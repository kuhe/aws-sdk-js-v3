import {
  HttpBindingProtocol,
  HttpInterceptingShapeDeserializer,
  HttpInterceptingShapeSerializer,
} from "@smithy/core/protocols";
import { ErrorSchema, NormalizedSchema, SCHEMA, TypeRegistry } from "@smithy/core/schema";
import {
  HandlerExecutionContext,
  HttpRequest,
  HttpResponse,
  OperationSchema,
  ResponseMetadata,
  SerdeContext,
  ShapeDeserializer,
  ShapeSerializer,
} from "@smithy/types";
import { calculateBodyLength } from "@smithy/util-body-length-browser";

import { JsonCodec, JsonSettings } from "./JsonCodec";
import { loadRestJsonErrorCode } from "./parseJsonBody";

/**
 * @public
 */
export class AwsRestJsonProtocol extends HttpBindingProtocol {
  protected serializer: ShapeSerializer<string | Uint8Array>;
  protected deserializer: ShapeDeserializer<string | Uint8Array>;
  private readonly codec: JsonCodec;

  public constructor({ defaultNamespace }: { defaultNamespace: string }) {
    super({
      defaultNamespace,
    });
    const settings: JsonSettings = {
      timestampFormat: {
        useTrait: true,
        default: SCHEMA.TIMESTAMP_EPOCH_SECONDS,
      },
      httpBindings: true,
      jsonName: true,
    };
    this.codec = new JsonCodec(settings);
    this.serializer = new HttpInterceptingShapeSerializer(this.codec.createSerializer(), settings);
    this.deserializer = new HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), settings);
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

  public async serializeRequest<Input extends object>(
    operationSchema: OperationSchema,
    input: Input,
    context: HandlerExecutionContext & SerdeContext
  ): Promise<HttpRequest> {
    const request = await super.serializeRequest(operationSchema, input, context);
    const inputSchema = NormalizedSchema.of(operationSchema.input);
    const members = inputSchema.getMemberSchemas();

    if (!request.headers["content-type"]) {
      const httpPayloadMember = Object.values(members).find((m) => {
        return !!m.getMergedTraits().httpPayload;
      });

      if (httpPayloadMember) {
        const mediaType = httpPayloadMember.getMergedTraits().mediaType as string;
        if (mediaType) {
          request.headers["content-type"] = mediaType;
        } else if (httpPayloadMember.isStringSchema()) {
          request.headers["content-type"] = "text/plain";
        } else if (httpPayloadMember.isBlobSchema()) {
          request.headers["content-type"] = "application/octet-stream";
        } else {
          request.headers["content-type"] = "application/json";
        }
      } else if (!inputSchema.isUnitSchema()) {
        const hasBody = Object.values(members).find((m) => {
          const { httpQuery, httpQueryParams, httpHeader, httpLabel, httpPrefixHeaders } = m.getMergedTraits();
          return !httpQuery && !httpQueryParams && !httpHeader && !httpLabel && httpPrefixHeaders === void 0;
        });
        if (hasBody) {
          request.headers["content-type"] = "application/json";
        }
      }
    }

    if (request.headers["content-type"] && !request.body) {
      request.body = "{}";
    }

    if (request.body) {
      try {
        // todo(schema): use config.bodyLengthChecker or move that into serdeContext.
        request.headers["content-length"] = String(calculateBodyLength(request.body));
      } catch (e) {}
    }

    return request;
  }

  protected async handleError(
    operationSchema: OperationSchema,
    context: HandlerExecutionContext & SerdeContext,
    response: HttpResponse,
    dataObject: any,
    metadata: ResponseMetadata
  ): Promise<never> {
    const error = loadRestJsonErrorCode(response, dataObject) ?? "Unknown";

    let namespace = this.options.defaultNamespace;
    if (error.includes("#")) {
      [namespace] = error.split("#");
    }

    const registry = TypeRegistry.for(namespace);
    const errorSchema: ErrorSchema = registry.getSchema(error) as ErrorSchema;
    const ns = NormalizedSchema.of(errorSchema);

    if (!errorSchema) {
      // TODO(schema) throw client base exception using the dataObject.
      throw new Error("schema not found for " + error);
    }
    const message = dataObject.message ?? dataObject.Message ?? "Unknown";
    const exception = new errorSchema.ctor(message);

    const headerBindings = new Set<string>(
      Object.values(NormalizedSchema.of(errorSchema).getMemberSchemas())
        .map((schema) => {
          return schema.getMergedTraits().httpHeader;
        })
        .filter(Boolean) as string[]
    );
    await this.deserializeHttpMessage(errorSchema, context, response, headerBindings, dataObject);
    const output = {} as any;
    for (const [name, member] of Object.entries(ns.getMemberSchemas())) {
      const target = member.getMergedTraits().jsonName ?? name;
      output[name] = this.codec.createDeserializer().readObject(member, dataObject[target]);
    }

    Object.assign(exception, {
      $metadata: metadata,
      $response: response,
      message,
      ...output,
    });

    throw exception;
  }
}
