// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { DeleteIdNamespaceInput, DeleteIdNamespaceOutput } from "../models/models_0";
import { de_DeleteIdNamespaceCommand, se_DeleteIdNamespaceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIdNamespaceCommand}.
 */
export interface DeleteIdNamespaceCommandInput extends DeleteIdNamespaceInput {}
/**
 * @public
 *
 * The output of {@link DeleteIdNamespaceCommand}.
 */
export interface DeleteIdNamespaceCommandOutput extends DeleteIdNamespaceOutput, __MetadataBearer {}

/**
 * <p>Deletes the <code>IdNamespace</code> with a given name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, DeleteIdNamespaceCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, DeleteIdNamespaceCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * const client = new EntityResolutionClient(config);
 * const input = { // DeleteIdNamespaceInput
 *   idNamespaceName: "STRING_VALUE", // required
 * };
 * const command = new DeleteIdNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIdNamespaceOutput
 * //   message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteIdNamespaceCommandInput - {@link DeleteIdNamespaceCommandInput}
 * @returns {@link DeleteIdNamespaceCommandOutput}
 * @see {@link DeleteIdNamespaceCommandInput} for command's `input` shape.
 * @see {@link DeleteIdNamespaceCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution service. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Entity Resolution. </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 *
 * @public
 */
export class DeleteIdNamespaceCommand extends $Command
  .classBuilder<
    DeleteIdNamespaceCommandInput,
    DeleteIdNamespaceCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSVeniceService", "DeleteIdNamespace", {})
  .n("EntityResolutionClient", "DeleteIdNamespaceCommand")
  .f(void 0, void 0)
  .ser(se_DeleteIdNamespaceCommand)
  .de(de_DeleteIdNamespaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIdNamespaceInput;
      output: DeleteIdNamespaceOutput;
    };
    sdk: {
      input: DeleteIdNamespaceCommandInput;
      output: DeleteIdNamespaceCommandOutput;
    };
  };
}
