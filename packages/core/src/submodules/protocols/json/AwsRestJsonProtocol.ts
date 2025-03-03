import { HttpBindingProtocol } from "@smithy/core/protocols";
import { ErrorSchema, SCHEMA, TypeRegistry } from "@smithy/core/schema";
import {
  HandlerExecutionContext,
  HttpResponse,
  OperationSchema,
  ResponseMetadata,
  SerdeContext,
  ShapeDeserializer,
  ShapeSerializer,
} from "@smithy/types";

import { JsonCodec } from "./JsonCodec";
import { loadRestJsonErrorCode } from "./parseJsonBody";

/**
 * @public
 */
export class AwsRestJsonProtocol extends HttpBindingProtocol {
  protected serializer: ShapeSerializer<string | Uint8Array> = null as any;
  protected deserializer: ShapeDeserializer<string | Uint8Array> = null as any;
  private readonly codec: JsonCodec;

  public constructor() {
    super();
    this.codec = new JsonCodec({
      timestampFormat: {
        useTrait: true,
        default: SCHEMA.TIMESTAMP_EPOCH_SECONDS,
      },
      jsonName: true,
    });
    this.serializer = this.codec.createSerializer();
    this.deserializer = this.codec.createDeserializer();
  }

  public getShapeId(): string {
    return "aws.protocols#restJson1";
  }

  public getPayloadCodec() {
    return this.codec;
  }

  public setSerdeContext(serdeContext: SerdeContext) {
    this.codec.setSerdeContext(serdeContext);
    super.setSerdeContext(serdeContext);
  }

  protected handleError(
    operationSchema: OperationSchema,
    context: HandlerExecutionContext,
    response: HttpResponse,
    dataObject: any,
    metadata: ResponseMetadata
  ): Promise<never> {
    const error = loadRestJsonErrorCode(response, dataObject) ?? "Unknown";

    const registry = TypeRegistry.schemaToRegistry.get(operationSchema);
    if (!registry) {
      // TODO(schema) throw client base exception using the dataObject.
      throw new Error("registry not found for " + error);
    }
    const errorSchema: ErrorSchema = registry.getSchema(error) as ErrorSchema;

    if (!errorSchema) {
      // TODO(schema) throw client base exception using the dataObject.
      throw new Error("schema not found for " + error);
    }
    const message = dataObject.message ?? dataObject.Message ?? "Unknown";
    const exception = new errorSchema.ctor(message);
    Object.assign(exception, {
      $metadata: metadata,
      $response: response,
      message,
      ...dataObject,
    });

    throw exception;
  }
}
