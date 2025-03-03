import { RpcProtocol } from "@smithy/core/protocols";
import { ErrorSchema, SCHEMA, TypeRegistry } from "@smithy/core/schema";
import {
  HandlerExecutionContext,
  HttpResponse,
  OperationSchema,
  ResponseMetadata,
  ShapeDeserializer,
  ShapeSerializer,
} from "@smithy/types";

import { loadRestXmlErrorCode } from "../xml/parseXmlBody";
import { JsonCodec } from "./JsonCodec";
import { loadRestJsonErrorCode } from "./parseJsonBody";

/**
 * @public
 */
export abstract class AwsJsonRpcProtocol extends RpcProtocol {
  protected serializer: ShapeSerializer<string | Uint8Array>;
  protected deserializer: ShapeDeserializer<string | Uint8Array>;
  private codec: JsonCodec;

  protected constructor() {
    super();
    this.codec = new JsonCodec({
      timestampFormat: {
        useTrait: true,
        default: SCHEMA.TIMESTAMP_EPOCH_SECONDS,
      },
      jsonName: false,
    });
    this.serializer = this.codec.createSerializer();
    this.deserializer = this.codec.createDeserializer();
  }

  protected handleError(
    operationSchema: OperationSchema,
    context: HandlerExecutionContext,
    response: HttpResponse,
    dataObject: any,
    metadata: ResponseMetadata,
  ): Promise<never> {
    // loadRestJsonErrorCode is still used in JSON RPC.
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
