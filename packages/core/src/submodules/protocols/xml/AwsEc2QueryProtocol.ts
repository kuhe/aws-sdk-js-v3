import { Codec } from "@smithy/types";

import { AwsQueryProtocol } from "./AwsQueryProtocol";

/**
 * @public
 */
export class AwsEc2QueryProtocol extends AwsQueryProtocol {
  public getPayloadCodec(): Codec<any, any> {
    throw new Error("Method not implemented.");
  }
  public constructor({ defaultNamespace }: { defaultNamespace: string }) {
    super({
      defaultNamespace,
    });
    throw new Error("AwsEc2QueryProtocol not yet implemented.");
  }
}
