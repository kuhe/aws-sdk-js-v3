// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIntegrationAssociationRequest } from "../models/models_0";
import {
  de_DeleteIntegrationAssociationCommand,
  se_DeleteIntegrationAssociationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIntegrationAssociationCommand}.
 */
export interface DeleteIntegrationAssociationCommandInput extends DeleteIntegrationAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIntegrationAssociationCommand}.
 */
export interface DeleteIntegrationAssociationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an Amazon Web Services resource association from an Amazon Connect instance. The
 *    association must not have any use cases associated with it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteIntegrationAssociationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteIntegrationAssociationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DeleteIntegrationAssociationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   IntegrationAssociationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteIntegrationAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIntegrationAssociationCommandInput - {@link DeleteIntegrationAssociationCommandInput}
 * @returns {@link DeleteIntegrationAssociationCommandOutput}
 * @see {@link DeleteIntegrationAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteIntegrationAssociationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DeleteIntegrationAssociationCommand extends $Command
  .classBuilder<
    DeleteIntegrationAssociationCommandInput,
    DeleteIntegrationAssociationCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "DeleteIntegrationAssociation", {})
  .n("ConnectClient", "DeleteIntegrationAssociationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteIntegrationAssociationCommand)
  .de(de_DeleteIntegrationAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIntegrationAssociationRequest;
      output: {};
    };
    sdk: {
      input: DeleteIntegrationAssociationCommandInput;
      output: DeleteIntegrationAssociationCommandOutput;
    };
  };
}
