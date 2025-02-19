import { RpcProtocol } from "@smithy/core/protocols";
import {
  Codec,
  HandlerExecutionContext,
  HttpResponse,
  OperationSchema,
  ResponseMetadata,
  SerdeContext,
  ShapeDeserializer,
  ShapeSerializer,
} from "@smithy/types";

/**
 * @public
 */
export class AwsQueryProtocol extends RpcProtocol {
  protected serializer: ShapeSerializer<string | Uint8Array> = null as any;
  protected deserializer: ShapeDeserializer<string | Uint8Array> = null as any;

  public constructor({ defaultNamespace }: { defaultNamespace: string }) {
    super({
      defaultNamespace,
    });
    throw new Error("AwsQueryProtocol not yet implemented.");
  }

  public getShapeId(): string {
    throw new Error("Method not implemented.");
  }

  public getPayloadCodec(): Codec<any, any> {
    throw new Error("Method not implemented.");
  }

  protected async handleError(
    operationSchema: OperationSchema,
    context: HandlerExecutionContext & SerdeContext,
    response: HttpResponse,
    dataObject: any,
    metadata: ResponseMetadata
  ): Promise<never> {
    throw new Error("Method not implemented.");
  }
}
