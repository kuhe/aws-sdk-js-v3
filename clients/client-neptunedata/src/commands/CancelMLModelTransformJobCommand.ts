// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelMLModelTransformJobInput, CancelMLModelTransformJobOutput } from "../models/models_0";
import { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { de_CancelMLModelTransformJobCommand, se_CancelMLModelTransformJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelMLModelTransformJobCommand}.
 */
export interface CancelMLModelTransformJobCommandInput extends CancelMLModelTransformJobInput {}
/**
 * @public
 *
 * The output of {@link CancelMLModelTransformJobCommand}.
 */
export interface CancelMLModelTransformJobCommandOutput extends CancelMLModelTransformJobOutput, __MetadataBearer {}

/**
 * <p>Cancels a specified model transform job. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/machine-learning-model-transform.html">Use a trained model to generate new model artifacts</a>.</p> <p>When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#cancelmlmodeltransformjob">neptune-db:CancelMLModelTransformJob</a> IAM action in that cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, CancelMLModelTransformJobCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, CancelMLModelTransformJobCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * const client = new NeptunedataClient(config);
 * const input = { // CancelMLModelTransformJobInput
 *   id: "STRING_VALUE", // required
 *   neptuneIamRoleArn: "STRING_VALUE",
 *   clean: true || false,
 * };
 * const command = new CancelMLModelTransformJobCommand(input);
 * const response = await client.send(command);
 * // { // CancelMLModelTransformJobOutput
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelMLModelTransformJobCommandInput - {@link CancelMLModelTransformJobCommandInput}
 * @returns {@link CancelMLModelTransformJobCommandOutput}
 * @see {@link CancelMLModelTransformJobCommandInput} for command's `input` shape.
 * @see {@link CancelMLModelTransformJobCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Raised when a request is submitted that cannot be processed.</p>
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *  <p>Raised when a request timed out in the client.</p>
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>Raised when a value in a request field did not satisfy required constraints.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Raised when an argument in a request is not supported.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Raised when an argument in a request has an invalid value.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Raised when a parameter value is not valid.</p>
 *
 * @throws {@link MissingParameterException} (client fault)
 *  <p>Raised when a required parameter is missing.</p>
 *
 * @throws {@link MLResourceNotFoundException} (client fault)
 *  <p>Raised when a specified machine-learning resource could not be found.</p>
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *  <p>Raised when a precondition for processing a request is not satisfied.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Raised when the number of requests being processed exceeds the limit.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>Raised when a request attempts to initiate an operation that is not supported.</p>
 *
 * @throws {@link NeptunedataServiceException}
 * <p>Base exception class for all service exceptions from Neptunedata service.</p>
 *
 *
 * @public
 */
export class CancelMLModelTransformJobCommand extends $Command
  .classBuilder<
    CancelMLModelTransformJobCommandInput,
    CancelMLModelTransformJobCommandOutput,
    NeptunedataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptunedataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonNeptuneDataplane", "CancelMLModelTransformJob", {})
  .n("NeptunedataClient", "CancelMLModelTransformJobCommand")
  .f(void 0, void 0)
  .ser(se_CancelMLModelTransformJobCommand)
  .de(de_CancelMLModelTransformJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelMLModelTransformJobInput;
      output: CancelMLModelTransformJobOutput;
    };
    sdk: {
      input: CancelMLModelTransformJobCommandInput;
      output: CancelMLModelTransformJobCommandOutput;
    };
  };
}
