import { AwsJsonRpcProtocol } from "./AwsJsonRpcProtocol";

/**
 * @public
 */
export class AwsJson1_1Protocol extends AwsJsonRpcProtocol {
  public getShapeId(): string {
    return "aws.protocols#awsJson1_1";
  }
}
