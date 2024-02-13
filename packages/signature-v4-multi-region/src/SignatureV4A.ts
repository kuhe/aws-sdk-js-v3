import { isArrayBuffer } from "@smithy/is-array-buffer";
import {
  AwsCredentialIdentity,
  ChecksumConstructor,
  DateInput,
  HashConstructor,
  HeaderBag,
  HttpRequest,
  Provider,
  QueryParameterBag,
  RequestPresigner,
  RequestPresigningArguments,
  RequestSigner,
  RequestSigningArguments,
  SourceData,
} from "@smithy/types";
import { toHex } from "@smithy/util-hex-encoding";
import { normalizeProvider } from "@smithy/util-middleware";
import { escapeUri } from "@smithy/util-uri-escape";
import { toUint8Array } from "@smithy/util-utf8";

/**
 * @internal
 */
export interface SignatureV4AInit {
  service: string;
  region: string;
  credentials: AwsCredentialIdentity | Provider<AwsCredentialIdentity>;
  /**
   * Whether to uri-escape the request URI path as part of computing the
   * canonical request string. This is required for every AWS service, except
   * Amazon S3, as of late 2017.
   *
   * Default=true.
   */
  uriEscapePath?: boolean;
  /**
   * Whether to calculate a checksum of the request body and include it as
   * either a request header (when signing) or as a query string parameter
   * (when presigning). This is required for AWS Glacier and Amazon S3 and optional for
   * every other AWS service as of late 2017.
   *
   * Default=true.
   */
  applyChecksum?: boolean;
}

/**
 * @internal
 */
export class SignatureV4A implements RequestPresigner, RequestSigner {
  private static ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
  private static CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
  private static AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
  private static SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
  private static EXPIRES_QUERY_PARAM = "X-Amz-Expires";
  private static SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
  private static TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
  private static REGION_SET_PARAM = "X-Amz-Region-Set";
  private static AUTH_HEADER = "authorization";
  private static AMZ_DATE_HEADER = SignatureV4A.AMZ_DATE_QUERY_PARAM.toLowerCase();
  private static REGION_SET_HEADER = SignatureV4A.REGION_SET_PARAM.toLowerCase();
  private static DATE_HEADER = "date";
  private static GENERATED_HEADERS = [
    SignatureV4A.AUTH_HEADER,
    SignatureV4A.AMZ_DATE_HEADER,
    SignatureV4A.DATE_HEADER,
    SignatureV4A.REGION_SET_HEADER,
  ];
  private static SIGNATURE_HEADER = SignatureV4A.SIGNATURE_QUERY_PARAM.toLowerCase();
  private static SHA256_HEADER = "x-amz-content-sha256";
  private static TOKEN_HEADER = SignatureV4A.TOKEN_QUERY_PARAM.toLowerCase();
  private static HOST_HEADER = "host";

  private static ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true,
  };
  private static PROXY_HEADER_PATTERN = /^proxy-/;
  private static SEC_HEADER_PATTERN = /^sec-/;
  private static UNSIGNABLE_PATTERNS = [/^proxy-/i, /^sec-/i];
  private static ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
  private static ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
  private static EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
  private static UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
  private static MAX_CACHE_SIZE = 50;
  private static KEY_TYPE_IDENTIFIER = "aws4_request";
  private static MAX_PRESIGNED_TTL = 60 * 60 * 24;

  private readonly service: string;
  private readonly regionProvider: Provider<string>;
  private readonly credentialProvider: Provider<AwsCredentialIdentity>;
  private readonly uriEscapePath: boolean;
  private readonly applyChecksum: boolean;
  private readonly Sha256: ChecksumConstructor | HashConstructor;
  private signingKeyCache: Record<string, Uint8Array> = {};
  private cacheQueue: Array<string> = [];

  constructor({ applyChecksum, credentials, region, service, uriEscapePath = true }: SignatureV4AInit) {
    this.service = service;
    this.uriEscapePath = uriEscapePath;
    this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
    this.regionProvider = normalizeProvider(region);
    this.credentialProvider = normalizeProvider(credentials);
  }

  public async sign(requestToSign: HttpRequest, options: RequestSigningArguments = {}): Promise<HttpRequest> {
    return this.signWithCredentials(requestToSign, await this.credentialProvider(), options);
  }

  public async signWithCredentials(
    requestToSign: HttpRequest,
    credentials: AwsCredentialIdentity,
    {
      signingDate = new Date(),
      signableHeaders,
      unsignableHeaders,
      signingRegion,
      signingService,
    }: RequestSigningArguments = {}
  ): Promise<HttpRequest> {
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? (await this.regionProvider());
    const request = this.prepareRequest(requestToSign);

    const { longDate, shortDate } = this.formatDate(signingDate);
    const scope = this.createScope(shortDate, region, signingService ?? this.service);

    request.headers[SignatureV4A.AMZ_DATE_HEADER] = longDate;
    request.headers[SignatureV4A.REGION_SET_HEADER] = region;
    if (credentials.sessionToken) {
      request.headers[SignatureV4A.TOKEN_HEADER] = credentials.sessionToken;
    }

    const payloadHash = await this.getPayloadHash(request);
    if (!this.hasHeader(SignatureV4A.SHA256_HEADER, request.headers) && this.applyChecksum) {
      request.headers[SignatureV4A.SHA256_HEADER] = payloadHash;
    }

    const canonicalHeaders = this.getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
    const canonicalRequest = this.createCanonicalRequest(request, canonicalHeaders, payloadHash);

    const signature = await this.getSignature(
      longDate,
      scope,
      this.getSigningKey(credentials, region, shortDate, signingService!),
      canonicalRequest
    );

    request.headers[SignatureV4A.AUTH_HEADER] =
      `${SignatureV4A.ALGORITHM_IDENTIFIER} ` +
      `Credential=${credentials.accessKeyId}/${scope}, ` +
      `SignedHeaders=${this.getCanonicalHeaderList(canonicalHeaders)}, ` +
      `Signature=${signature}`;

    return request;
  }

  public async presign(originalRequest: HttpRequest, options: RequestPresigningArguments = {}): Promise<HttpRequest> {
    return this.presignWithCredentials(originalRequest, await this.credentialProvider(), options);
  }

  public async presignWithCredentials(
    originalRequest: HttpRequest,
    credentials: AwsCredentialIdentity,
    options: RequestPresigningArguments = {}
  ): Promise<HttpRequest> {
    throw new Error("Not Yet Implemented");
  }

  private validateResolvedCredentials(credentials: AwsCredentialIdentity) {
    if (
      typeof credentials !== "object" ||
      typeof credentials.accessKeyId !== "string" ||
      typeof credentials.secretAccessKey !== "string"
    ) {
      throw new Error("Resolved credential object is not valid");
    }
  }

  private formatDate(now: DateInput): { longDate: string; shortDate: string } {
    const longDate = this.iso8601(now).replace(/[\-:]/g, "");
    return {
      longDate,
      shortDate: longDate.slice(0, 8),
    };
  }

  private getCanonicalHeaderList(headers: object): string {
    return Object.keys(headers).sort().join(";");
  }

  private iso8601(time: number | string | Date): string {
    return this.toDate(time)
      .toISOString()
      .replace(/\.\d{3}Z$/, "Z");
  }

  private toDate(time: number | string | Date): Date {
    if (typeof time === "number") {
      return new Date(time * 1000);
    }

    if (typeof time === "string") {
      if (Number(time)) {
        return new Date(Number(time) * 1000);
      }
      return new Date(time);
    }

    return time;
  }

  private prepareRequest(request: HttpRequest): HttpRequest {
    // Create a clone of the request object that does not clone the body
    request = typeof (request as any).clone === "function" ? (request as any).clone() : this.cloneRequest(request);

    for (const headerName of Object.keys(request.headers)) {
      if (SignatureV4A.GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
        delete request.headers[headerName];
      }
    }

    return request;
  }

  private cloneRequest({ headers, query, ...rest }: HttpRequest): HttpRequest {
    return {
      ...rest,
      headers: { ...headers },
      query: query ? this.cloneQuery(query) : undefined,
    };
  }

  private cloneQuery(query: QueryParameterBag): QueryParameterBag {
    return Object.keys(query).reduce((carry: QueryParameterBag, paramName: string) => {
      const param = query[paramName];
      return {
        ...carry,
        [paramName]: Array.isArray(param) ? [...param] : param,
      };
    }, {});
  }

  private createScope(shortDate: string, region: string, service: string): string {
    return `${shortDate}/${region}/${service}/${SignatureV4A.KEY_TYPE_IDENTIFIER}`;
  }

  private hmac(secret: SourceData, data: SourceData): Promise<Uint8Array> {
    const hash = new this.Sha256(secret);
    hash.update(toUint8Array(data));
    return hash.digest();
  }

  private async getSigningKey(
    credentials: AwsCredentialIdentity,
    shortDate: string,
    region: string,
    service: string
  ): Promise<Uint8Array> {
    const { cacheQueue, signingKeyCache } = this;

    const credsHash = await this.hmac(credentials.secretAccessKey, credentials.accessKeyId);
    const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
    if (cacheKey in signingKeyCache) {
      return signingKeyCache[cacheKey];
    }

    cacheQueue.push(cacheKey);
    while (cacheQueue.length > SignatureV4A.MAX_CACHE_SIZE) {
      delete signingKeyCache[cacheQueue.shift() as string];
    }

    let key: SourceData = `AWS4${credentials.secretAccessKey}`;
    for (const signable of [shortDate, region, service, SignatureV4A.KEY_TYPE_IDENTIFIER]) {
      key = await this.hmac(key, signable);
    }
    return (signingKeyCache[cacheKey] = key as Uint8Array);
  }

  private async getPayloadHash({ headers, body }: HttpRequest): Promise<string> {
    for (const headerName of Object.keys(headers)) {
      if (headerName.toLowerCase() === SignatureV4A.SHA256_HEADER) {
        return headers[headerName];
      }
    }

    if (body == undefined) {
      return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
      const hashCtor = new this.Sha256();
      hashCtor.update(toUint8Array(body));
      return toHex(await hashCtor.digest());
    }

    // As any defined body that is not a string or binary data is a stream, this
    // body is unsignable. Attempt to send the request with an unsigned payload,
    // which may or may not be accepted by the service.
    return SignatureV4A.UNSIGNED_PAYLOAD;
  }

  private hasHeader(soughtHeader: string, headers: HeaderBag): boolean {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
      if (soughtHeader === headerName.toLowerCase()) {
        return true;
      }
    }

    return false;
  }

  private getCanonicalHeaders(
    { headers }: HttpRequest,
    unsignableHeaders?: Set<string>,
    signableHeaders?: Set<string>
  ): HeaderBag {
    const canonical: HeaderBag = {};
    for (const headerName of Object.keys(headers).sort()) {
      if (headers[headerName] == undefined) {
        continue;
      }

      const canonicalHeaderName = headerName.toLowerCase();
      if (
        canonicalHeaderName in SignatureV4A.ALWAYS_UNSIGNABLE_HEADERS ||
        unsignableHeaders?.has(canonicalHeaderName) ||
        SignatureV4A.PROXY_HEADER_PATTERN.test(canonicalHeaderName) ||
        SignatureV4A.SEC_HEADER_PATTERN.test(canonicalHeaderName)
      ) {
        if (!signableHeaders || (signableHeaders && !signableHeaders.has(canonicalHeaderName))) {
          continue;
        }
      }

      canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
    }

    return canonical;
  }

  private createCanonicalRequest(request: HttpRequest, canonicalHeaders: HeaderBag, payloadHash: string): string {
    const sortedHeaders = Object.keys(canonicalHeaders).sort();
    return `${request.method}
${this.getCanonicalPath(request)}
${this.getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
  }

  private async createStringToSign(
    longDate: string,
    credentialScope: string,
    canonicalRequest: string
  ): Promise<string> {
    const hash = new this.Sha256();
    hash.update(toUint8Array(canonicalRequest));
    const hashedRequest = await hash.digest();

    return `${SignatureV4A.ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
  }

  private getCanonicalQuery({ query = {} }: HttpRequest): string {
    const keys: Array<string> = [];
    const serialized: Record<string, string> = {};
    for (const key of Object.keys(query).sort()) {
      if (key.toLowerCase() === SignatureV4A.SIGNATURE_HEADER) {
        continue;
      }

      keys.push(key);
      const value = query[key];
      if (typeof value === "string") {
        serialized[key] = `${escapeUri(key)}=${escapeUri(value)}`;
      } else if (Array.isArray(value)) {
        serialized[key] = value
          .slice(0)
          .reduce(
            (encoded: Array<string>, value: string) => encoded.concat([`${escapeUri(key)}=${escapeUri(value)}`]),
            []
          )
          .sort()
          .join("&");
      }
    }

    return keys
      .map((key) => serialized[key])
      .filter(Boolean)
      .join("&");
  }

  private getCanonicalPath({ path }: HttpRequest): string {
    if (this.uriEscapePath) {
      // Non-S3 services, we normalize the path and then double URI encode it.
      // Ref: "Remove Dot Segments" https://datatracker.ietf.org/doc/html/rfc3986#section-5.2.4
      const normalizedPathSegments = [] as string[];
      for (const pathSegment of path.split("/")) {
        if (pathSegment?.length === 0) continue;
        if (pathSegment === ".") continue;
        if (pathSegment === "..") {
          normalizedPathSegments.pop();
        } else {
          normalizedPathSegments.push(pathSegment);
        }
      }
      // Joining by single slashes to remove consecutive slashes.
      const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${
        normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""
      }`;

      const doubleEncoded = encodeURIComponent(normalizedPath);
      return doubleEncoded.replace(/%2F/g, "/");
    }

    // For S3, we shouldn't normalize the path. For example, object name
    // my-object//example//photo.user should not be normalized to
    // my-object/example/photo.user
    return path;
  }

  private async getSignature(
    longDate: string,
    credentialScope: string,
    keyPromise: Promise<Uint8Array>,
    canonicalRequest: string
  ): Promise<string> {
    const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);

    const hash = new this.Sha256(await keyPromise);
    hash.update(toUint8Array(stringToSign));
    return toHex(await hash.digest());
  }
}
