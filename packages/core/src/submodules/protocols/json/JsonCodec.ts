import {
  Codec,
  ShapeDeserializer,
  ShapeSerializer,
  TimestampDateTimeSchema,
  TimestampEpochSecondsSchema,
  TimestampHttpDateSchema,
} from "@smithy/types";

import { SerdeContextConfig } from "../ConfigurableSerdeContext";
import { JsonShapeDeserializer } from "./JsonShapeDeserializer";
import { JsonShapeSerializer } from "./JsonShapeSerializer";

/**
 * @public
 */
export type JsonSettings = {
  timestampFormat: {
    useTrait: boolean;
    default: TimestampDateTimeSchema | TimestampHttpDateSchema | TimestampEpochSecondsSchema;
  };
  jsonName: boolean;
};

/**
 * @public
 */
export class JsonCodec extends SerdeContextConfig implements Codec<string, string> {
  public constructor(public settings: JsonSettings) {
    super();
  }

  public createSerializer(): ShapeSerializer<string> {
    const serializer = new JsonShapeSerializer(this.settings);
    serializer.setSerdeContext(this.serdeContext!);
    return serializer;
  }

  public createDeserializer(): ShapeDeserializer<string> {
    const deserializer = new JsonShapeDeserializer(this.settings);
    deserializer.setSerdeContext(this.serdeContext!);
    return deserializer;
  }
}
