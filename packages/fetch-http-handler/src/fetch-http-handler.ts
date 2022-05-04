import { HttpHandler, HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { buildQueryString } from "@aws-sdk/querystring-builder";
import { HeaderBag, HttpHandlerOptions, Provider } from "@aws-sdk/types";

import { requestTimeout } from "./request-timeout";

declare let AbortController: any;

/**
 * Represents the http options that can be passed to a browser http client.
 */
export interface FetchHttpHandlerOptions {
  /**
   * The number of milliseconds a request can take before being automatically
   * terminated.
   */
  requestTimeout?: number;
}

type FetchHttpHandlerConfig = FetchHttpHandlerOptions;

export class FetchHttpHandler implements HttpHandler {
  private config?: FetchHttpHandlerConfig;
  private readonly configProvider?: Provider<FetchHttpHandlerConfig>;

  constructor(options?: FetchHttpHandlerOptions | Provider<FetchHttpHandlerOptions | undefined>) {
    console.log("ayyy", this);
    if (typeof options === "function") {
      this.configProvider = async () => (await options()) || {};
    } else {
      this.config = options ?? {};
    }
  }

  destroy(): void {
    // Do nothing. TLS and HTTP/2 connection pooling is handled by the browser.
  }

  async handle(request: HttpRequest, { abortSignal }: HttpHandlerOptions = {}): Promise<{ response: HttpResponse }> {
    if (!this.config && this.configProvider) {
      this.config = await this.configProvider();
    }
    const requestTimeoutInMs = this.config!.requestTimeout;

    // if the request was already aborted, prevent doing extra work
    if (abortSignal?.aborted) {
      const abortError = new Error("Request aborted");
      abortError.name = "AbortError";
      return Promise.reject(abortError);
    }

    let path = request.path;
    if (request.query) {
      const queryString = buildQueryString(request.query);
      if (queryString) {
        path += `?${queryString}`;
      }
    }

    const { port, method } = request;
    const url = `${request.protocol}//${request.hostname}${port ? `:${port}` : ""}${path}`;
    // Request constructor doesn't allow GET/HEAD request with body
    // ref: https://github.com/whatwg/fetch/issues/551
    const body = method === "GET" || method === "HEAD" ? undefined : request.body;
    const requestOptions: RequestInit = {
      body,
      headers: new Headers(request.headers),
      method: method,
    };

    // some browsers support abort signal
    if (typeof AbortController !== "undefined") {
      (requestOptions as any)["signal"] = abortSignal;
    }

    const fetchRequest = new Request(url, requestOptions);

    console.log("Hey Fry, Pizza goin' out, COME ON!!!!", request.body);

    const raceOfPromises = [
      fetch(fetchRequest).then((response) => {
        console.log("fetch resolved");
        const fetchHeaders = response.headers as Headers & { entries(): [string, string][] };
        const transformedHeaders: HeaderBag = {};

        for (const [key, value] of fetchHeaders.entries()) {
          transformedHeaders[key] = value;
        }

        const hasReadableStream = response.body !== undefined;

        // Return the response with buffered body
        if (!hasReadableStream) {
          return response.blob().then((body) => ({
            response: new HttpResponse({
              headers: transformedHeaders,
              statusCode: response.status,
              body,
            }),
          }));
        }
        // Return the response with streaming body
        return {
          response: new HttpResponse({
            headers: transformedHeaders,
            statusCode: response.status,
            body: null,
          }),
        };
      }),
      requestTimeout(requestTimeoutInMs),
    ];

    if (abortSignal) {
      raceOfPromises.push(
        new Promise<never>((resolve, reject) => {
          abortSignal.onabort = () => {
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            reject(abortError);
          };
        })
      );
    }

    return Promise.race(raceOfPromises);
  }
}
