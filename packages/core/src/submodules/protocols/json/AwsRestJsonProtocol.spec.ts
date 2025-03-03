import { SCHEMA, struct } from "@smithy/core/schema";
import { toBase64 } from "@smithy/util-base64";
import { describe, expect, test as it } from "vitest";

import { AwsRestJsonProtocol } from "./AwsRestJsonProtocol";

describe("AwsRestJsonProtocol", () => {
  describe("codec", () => {
    it("serializes blobs and timestamps", () => {
      const protocol = new AwsRestJsonProtocol();
      protocol.setSerdeContext({
        base64Encoder: toBase64,
      } as any);
      const codec = protocol.getPayloadCodec();
      const serializer = codec.createSerializer();
      const data = {
        string: "string",
        number: 1234,
        boolean: false,
        blob: new Uint8Array(8),
        timestamp: new Date(0),
      };
      const schema = struct(
        "MyStruct",
        0,
        [...Object.keys(data)],
        [SCHEMA.STRING, SCHEMA.NUMERIC, SCHEMA.BOOLEAN, SCHEMA.BLOB, SCHEMA.TIMESTAMP_DEFAULT]
      );
      serializer.write(schema, data);
      const serialized = serializer.flush();
      expect(JSON.parse(serialized)).toEqual({
        string: "string",
        number: 1234,
        boolean: false,
        blob: "AAAAAAAAAAA=",
        timestamp: 0,
      });
    });

    it("deserializes blobs and timestamps", () => {
      const protocol = new AwsRestJsonProtocol();
      protocol.setSerdeContext({
        base64Encoder: toBase64,
      } as any);
      const codec = protocol.getPayloadCodec();
      const deserializer = codec.createDeserializer();
      const json = {
        string: "string",
        number: 1234,
        boolean: false,
        blob: "AAAAAAAAAAA=",
        timestamp: 0,
      };
      const schema = struct(
        "MyStruct",
        0,
        [...Object.keys(json)],
        [SCHEMA.STRING, SCHEMA.NUMERIC, SCHEMA.BOOLEAN, SCHEMA.BLOB, SCHEMA.TIMESTAMP_DEFAULT]
      );
      const parsed = deserializer.read(schema, JSON.stringify(json));
      expect(parsed).toEqual({
        string: "string",
        number: 1234,
        boolean: false,
        blob: new Uint8Array(8),
        timestamp: new Date(0),
      });
    });
  });
});
