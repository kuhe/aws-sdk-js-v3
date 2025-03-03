import { RpcProtocol } from "@smithy/core/protocols";
import {
  HandlerExecutionContext,
  HttpResponse,
  OperationSchema,
  ResponseMetadata,
  ShapeDeserializer,
  ShapeSerializer,
} from "@smithy/types";

/**
 * @public
 */
export class AwsQueryProtocol extends RpcProtocol {
  protected serializer: ShapeSerializer<string | Uint8Array> = null as any;
  protected deserializer: ShapeDeserializer<string | Uint8Array> = null as any;

  public constructor() {
    super();
    throw new Error("AwsQueryProtocol not yet implemented.");
  }

  public getShapeId(): string {
    throw new Error("Method not implemented.");
  }

  protected handleError(
    operationSchema: OperationSchema,
    context: HandlerExecutionContext,
    response: HttpResponse,
    dataObject: any,
    metadata: ResponseMetadata,
  ): Promise<never> {
    throw new Error("Method not implemented.");
  }
}
