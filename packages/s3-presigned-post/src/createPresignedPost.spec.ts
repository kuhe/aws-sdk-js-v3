import { defaultEndpointResolver } from "@aws-sdk/client-s3/src/endpoint/endpointResolver";
import { createScope, getSigningKey } from "@smithy/signature-v4";
import { HttpRequest, SourceData } from "@smithy/types";
import { afterAll, beforeEach, describe, expect, test as it, vi } from "vitest";

import {
  ALGORITHM_IDENTIFIER,
  ALGORITHM_QUERY_PARAM,
  AMZ_DATE_QUERY_PARAM,
  CREDENTIAL_QUERY_PARAM,
  SIGNATURE_QUERY_PARAM,
} from "./constants";
import { createPresignedPost } from "./createPresignedPost";

vi.mock("@smithy/signature-v4", () => ({
  createScope: vi.fn().mockReturnValue("mock_credential_scope"),
  getSigningKey: vi.fn().mockReturnValue(Buffer.from("mock_signing_key")),
  SignatureV4: class {},
}));

vi.mock("@smithy/util-hex-encoding", () => ({
  toHex: vi.fn().mockReturnValue("mock_hex_encoded"),
}));

const endpoint: HttpRequest = {
  method: "POST",
  protocol: "https:",
  hostname: "s3.us-foo-1.amazonaws.com",
  headers: {},
  path: "/foo",
};
const region = "us-foo-1";
const credentials = {
  accessKeyId: "AKID",
  secretAccessKey: "SECRET",
};
const mockHashUpdate = vi.fn();
const mockHashCtor = vi.fn();
const sha256 = function (secret: SourceData) {
  mockHashCtor(secret);
  //@ts-ignore mock constructor
  this.update = function (data) {
    mockHashUpdate(data);
    return this;
  };
  //@ts-ignore mock constructor
  this.digest = () => Buffer.from("mock_sha256_hash");
};
const mockS3Client = {
  config: {
    endpoint: async () => endpoint,
    endpointProvider: defaultEndpointResolver,
    forcePathStyle: true,
    systemClockOffset: 0,
    base64Encoder: vi.fn().mockReturnValue("mock_base64_encoded"),
    utf8Decoder: vi.fn().mockReturnValue(Buffer.from("mock_utf8_decoded")),
    sha256,
    region: async () => region,
    credentials: async () => credentials,
  },
};

describe("createPresignedPost", () => {
  const Bucket = "bucket";
  const Key = "key";
  //Mock Date.now() to be 2020-10-28T22:56:49.535Z
  const dateNowMock = vi.spyOn(Date, "now").mockImplementation(() => 1603925809535);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterAll(() => {
    dateNowMock.mockRestore();
  });

  it("should correctly generate url and fields", async () => {
    //@ts-ignore mock s3 client
    const { url, fields } = await createPresignedPost(mockS3Client, {
      Bucket,
      Key,
    });
    expect(url).toBe("https://s3.us-foo-1.amazonaws.com/foo/bucket"),
      expect(fields).toEqual({
        bucket: Bucket,
        key: Key,
        [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
        [CREDENTIAL_QUERY_PARAM]: `${credentials.accessKeyId}/mock_credential_scope`,
        [AMZ_DATE_QUERY_PARAM]: "20201028T225649Z",
        Policy: "mock_base64_encoded",
        [SIGNATURE_QUERY_PARAM]: "mock_hex_encoded",
      });

    expect(vi.mocked(createScope).mock.calls[0]).toEqual(["20201028", "us-foo-1", "s3"]);
    expect(mockS3Client.config.utf8Decoder).toBeCalled();
    expect(vi.mocked(getSigningKey).mock.calls[0]).toEqual([sha256, credentials, "20201028", "us-foo-1", "s3"]);
  });

  it("should generate presigned post with filename", async () => {
    //@ts-ignore mock s3 client
    await createPresignedPost(mockS3Client, {
      Bucket,
      Key: "path/to/${filename}",
    });
    const { conditions } = JSON.parse(mockS3Client.config.utf8Decoder.mock.calls[0] as any);
    expect(conditions).toContainEqual(["starts-with", "$key", "path/to/"]);
  });

  it("should default expiration at 3600 seconds later", async () => {
    //@ts-ignore mock s3 client
    await createPresignedPost(mockS3Client, {
      Bucket,
      Key,
    });
    const policy = JSON.parse(mockS3Client.config.utf8Decoder.mock.calls[0] as any);
    expect(policy).toMatchObject({
      expiration: "2020-10-28T23:56:49Z",
    });
  });

  it("should set expiration if set in parameters", async () => {
    //@ts-ignore mock s3 client
    await createPresignedPost(mockS3Client, {
      Bucket,
      Key,
      Expires: 7200,
    });
    expect(JSON.parse(mockS3Client.config.utf8Decoder.mock.calls[0] as any)).toMatchObject({
      expiration: "2020-10-29T00:56:49Z",
    });
  });

  it("should generate policies with prefilled fields", async () => {
    //@ts-ignore mock s3 client
    const { fields } = await createPresignedPost(mockS3Client, {
      Bucket,
      Key,
      Conditions: [{ acl: "public-read" }],
      Fields: { acl: "public-read" },
    });
    expect(fields).toMatchObject({ bucket: Bucket, key: Key, acl: "public-read" });
    const { conditions } = JSON.parse(mockS3Client.config.utf8Decoder.mock.calls[0] as any);
    expect(conditions).toContainEqual({ acl: "public-read" });
  });
});
