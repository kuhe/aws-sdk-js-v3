import { RpcProtocol } from "@smithy/core/protocols";
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

  protected constructor({ defaultNamespace }: { defaultNamespace: string }) {
    super({
      defaultNamespace,
    });
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

  public getPayloadCodec(): JsonCodec {
    return this.codec;
  }

  public setSerdeContext(serdeContext: SerdeContext) {
    this.codec.setSerdeContext(serdeContext);
    super.setSerdeContext(serdeContext);
  }

  protected async handleError(
    operationSchema: OperationSchema,
    context: HandlerExecutionContext & SerdeContext,
    response: HttpResponse,
    dataObject: any,
    metadata: ResponseMetadata
  ): Promise<never> {
    // loadRestJsonErrorCode is still used in JSON RPC.
    const error = loadRestJsonErrorCode(response, dataObject) ?? "Unknown";

    let namespace = this.options.defaultNamespace;
    if (error.includes("#")) {
      [namespace] = error.split("#");
    }

    const registry = TypeRegistry.for(namespace);
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
