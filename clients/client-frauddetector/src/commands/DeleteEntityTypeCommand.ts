// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteEntityTypeRequest, DeleteEntityTypeResult } from "../models/models_0";
import { de_DeleteEntityTypeCommand, se_DeleteEntityTypeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEntityTypeCommand}.
 */
export interface DeleteEntityTypeCommandInput extends DeleteEntityTypeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEntityTypeCommand}.
 */
export interface DeleteEntityTypeCommandOutput extends DeleteEntityTypeResult, __MetadataBearer {}

/**
 * <p>Deletes an entity type.</p>
 *          <p>You cannot delete an entity type that is included in an event type.</p>
 *          <p>When you delete an entity type, Amazon Fraud Detector permanently deletes that entity type and the data is no longer stored in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteEntityTypeCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteEntityTypeCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const input = { // DeleteEntityTypeRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteEntityTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEntityTypeCommandInput - {@link DeleteEntityTypeCommandInput}
 * @returns {@link DeleteEntityTypeCommandOutput}
 * @see {@link DeleteEntityTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteEntityTypeCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An exception indicating there was a conflict during a delete operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
 *
 *
 * @public
 */
export class DeleteEntityTypeCommand extends $Command
  .classBuilder<
    DeleteEntityTypeCommandInput,
    DeleteEntityTypeCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHawksNestServiceFacade", "DeleteEntityType", {})
  .n("FraudDetectorClient", "DeleteEntityTypeCommand")
  .f(void 0, void 0)
  .ser(se_DeleteEntityTypeCommand)
  .de(de_DeleteEntityTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEntityTypeRequest;
      output: {};
    };
    sdk: {
      input: DeleteEntityTypeCommandInput;
      output: DeleteEntityTypeCommandOutput;
    };
  };
}
