import { AwsJsonRpcProtocol } from "./AwsJsonRpcProtocol";

/**
 * @public
 */
export class AwsJson1_0Protocol extends AwsJsonRpcProtocol {
  public getShapeId(): string {
    return "aws.protocols#awsJson1_0";
  }
}
