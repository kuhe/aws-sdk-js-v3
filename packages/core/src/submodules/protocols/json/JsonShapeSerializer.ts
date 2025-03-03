import { NormalizedSchema, SCHEMA } from "@smithy/core/schema";
import { dateToUtcString } from "@smithy/core/serde";
import { Schema, ShapeSerializer } from "@smithy/types";

import { SerdeContextConfig } from "../ConfigurableSerdeContext";
import { JsonSettings } from "./JsonCodec";

/**
 * @public
 */
export class JsonShapeSerializer extends SerdeContextConfig implements ShapeSerializer<string> {
  private buffer: any;

  public constructor(public settings: JsonSettings) {
    super();
  }

  public write(schema: Schema, value: unknown): void {
    this.buffer = this._write(schema, value);
  }

  public flush(): string {
    return JSON.stringify(
      this.buffer,
      // todo(schema) use replacer.
      function replacer(key: string, value: any) {
        return value;
      },
      0
    );
  }

  private _write(schema: Schema, value: unknown): any {
    const isObject = value !== null && typeof value === "object";

    const ns = NormalizedSchema.of(schema);

    // === aggregate types ===
    if (ns.isListSchema() && Array.isArray(value)) {
      const listMember = ns.getValueSchema();
      const out = [] as any[];
      const sparse = !!listMember.getMergedTraits().sparse;
      for (const item of value) {
        if (sparse || item != null) {
          out.push(this._write(listMember, item));
        }
      }
      return out;
    } else if (ns.isMapSchema() && isObject) {
      const mapMember = ns.getValueSchema();
      const out = {} as any;
      const sparse = !!mapMember.getMergedTraits().sparse;
      for (const [_k, _v] of Object.entries(value)) {
        if (sparse || _v != null) {
          out[_k] = this._write(mapMember, _v);
        }
      }
      return out;
    } else if (ns.isStructSchema() && isObject) {
      const out = {} as any;
      for (const [_k, _v] of Object.entries(value)) {
        const member = ns.getMemberSchema(_k) ?? SCHEMA.DOCUMENT;
        out[_k] = this._write(member, _v);
      }
      return out;
    }

    // === simple types ===
    if (ns.isBlobSchema() && (value instanceof Uint8Array || typeof value === "string")) {
      if (!this.serdeContext?.base64Encoder) {
        throw new Error("Missing base64Encoder in serdeContext");
      }
      return this.serdeContext?.base64Encoder(value);
    }

    if (ns.isTimestampSchema() && value instanceof Date) {
      const options = this.settings.timestampFormat;
      const format = options.useTrait
        ? ns.getSchema() === SCHEMA.TIMESTAMP_DEFAULT
          ? options.default
          : ns.getSchema() ?? options.default
        : options.default;
      switch (format) {
        case SCHEMA.TIMESTAMP_DATE_TIME:
          return value.toISOString().replace(".000Z", "Z");
        case SCHEMA.TIMESTAMP_HTTP_DATE:
          return dateToUtcString(value);
        case SCHEMA.TIMESTAMP_EPOCH_SECONDS:
          return value.getTime() / 1000;
        default:
          console.warn("Missing timestamp format, using epoch seconds", value);
          return value.getTime() / 1000;
      }
    }

    return value;
  }
}
