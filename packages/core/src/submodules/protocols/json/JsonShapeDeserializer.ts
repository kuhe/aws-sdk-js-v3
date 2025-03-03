import { NormalizedSchema, SCHEMA } from "@smithy/core/schema";
import { parseEpochTimestamp, parseRfc3339DateTimeWithOffset, parseRfc7231DateTime } from "@smithy/core/serde";
import { Schema, ShapeDeserializer } from "@smithy/types";
import { fromBase64 } from "@smithy/util-base64";

import { SerdeContextConfig } from "../ConfigurableSerdeContext";
import { JsonSettings } from "./JsonCodec";
import { jsonReviver } from "./jsonReviver";

/**
 * @public
 */
export class JsonShapeDeserializer extends SerdeContextConfig implements ShapeDeserializer<string> {
  public constructor(public settings: JsonSettings) {
    super();
  }

  public read(schema: Schema, data: string): any {
    return this._read(schema, this.parse(data));
  }

  public parse(json: string): any {
    return JSON.parse(json, jsonReviver);
  }

  private _read(schema: Schema, value: unknown): any {
    const isObject = value !== null && typeof value === "object";

    const ns = NormalizedSchema.of(schema);

    // === aggregate types ===
    if (ns.isListSchema() && Array.isArray(value)) {
      const listMember = ns.getValueSchema();
      const out = [] as any[];
      const sparse = !!listMember.getMergedTraits().sparse;
      for (const item of value) {
        if (sparse || item != null) {
          out.push(this._read(listMember, item));
        }
      }
      return out;
    } else if (ns.isMapSchema() && isObject) {
      const mapMember = ns.getValueSchema();
      const out = {} as any;
      const sparse = !!mapMember.getMergedTraits().sparse;
      for (const [_k, _v] of Object.entries(value)) {
        if (sparse || _v != null) {
          out[_k] = this._read(mapMember, _v);
        }
      }
      return out;
    } else if (ns.isStructSchema() && isObject) {
      const out = {} as any;
      for (const [_k, _v] of Object.entries(value)) {
        const member = ns.getMemberSchema(_k) ?? SCHEMA.DOCUMENT;
        out[_k] = this._read(member, _v);
      }
      return out;
    }

    // === simple types ===
    if (ns.isBlobSchema() && typeof value === "string") {
      return fromBase64(value);
    }
    if (ns.isTimestampSchema()) {
      const options = this.settings.timestampFormat;
      const format = options.useTrait
        ? ns.getSchema() === SCHEMA.TIMESTAMP_DEFAULT
          ? options.default
          : ns.getSchema() ?? options.default
        : options.default;
      switch (format) {
        case SCHEMA.TIMESTAMP_DATE_TIME:
          return parseRfc3339DateTimeWithOffset(value);
        case SCHEMA.TIMESTAMP_HTTP_DATE:
          return parseRfc7231DateTime(value);
        case SCHEMA.TIMESTAMP_EPOCH_SECONDS:
          return parseEpochTimestamp(value);
        default:
          console.warn("Missing timestamp format, parsing value with Date constructor:", value);
          return new Date(value as string | number);
      }
    }
    if (ns.isBigIntegerSchema()) {
      return BigInt(value as number | string);
    }

    // covers string, numeric, boolean, document, bigDecimal
    return value;
  }
}
