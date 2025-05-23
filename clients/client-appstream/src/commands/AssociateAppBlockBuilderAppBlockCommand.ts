// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateAppBlockBuilderAppBlockRequest, AssociateAppBlockBuilderAppBlockResult } from "../models/models_0";
import {
  de_AssociateAppBlockBuilderAppBlockCommand,
  se_AssociateAppBlockBuilderAppBlockCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateAppBlockBuilderAppBlockCommand}.
 */
export interface AssociateAppBlockBuilderAppBlockCommandInput extends AssociateAppBlockBuilderAppBlockRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAppBlockBuilderAppBlockCommand}.
 */
export interface AssociateAppBlockBuilderAppBlockCommandOutput
  extends AssociateAppBlockBuilderAppBlockResult,
    __MetadataBearer {}

/**
 * <p>Associates the specified app block builder with the specified app block.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, AssociateAppBlockBuilderAppBlockCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, AssociateAppBlockBuilderAppBlockCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // AssociateAppBlockBuilderAppBlockRequest
 *   AppBlockArn: "STRING_VALUE", // required
 *   AppBlockBuilderName: "STRING_VALUE", // required
 * };
 * const command = new AssociateAppBlockBuilderAppBlockCommand(input);
 * const response = await client.send(command);
 * // { // AssociateAppBlockBuilderAppBlockResult
 * //   AppBlockBuilderAppBlockAssociation: { // AppBlockBuilderAppBlockAssociation
 * //     AppBlockArn: "STRING_VALUE", // required
 * //     AppBlockBuilderName: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateAppBlockBuilderAppBlockCommandInput - {@link AssociateAppBlockBuilderAppBlockCommandInput}
 * @returns {@link AssociateAppBlockBuilderAppBlockCommandOutput}
 * @see {@link AssociateAppBlockBuilderAppBlockCommandInput} for command's `input` shape.
 * @see {@link AssociateAppBlockBuilderAppBlockCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested limit exceeds the permitted limit for an account.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class AssociateAppBlockBuilderAppBlockCommand extends $Command
  .classBuilder<
    AssociateAppBlockBuilderAppBlockCommandInput,
    AssociateAppBlockBuilderAppBlockCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PhotonAdminProxyService", "AssociateAppBlockBuilderAppBlock", {})
  .n("AppStreamClient", "AssociateAppBlockBuilderAppBlockCommand")
  .f(void 0, void 0)
  .ser(se_AssociateAppBlockBuilderAppBlockCommand)
  .de(de_AssociateAppBlockBuilderAppBlockCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateAppBlockBuilderAppBlockRequest;
      output: AssociateAppBlockBuilderAppBlockResult;
    };
    sdk: {
      input: AssociateAppBlockBuilderAppBlockCommandInput;
      output: AssociateAppBlockBuilderAppBlockCommandOutput;
    };
  };
}
