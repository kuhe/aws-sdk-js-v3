// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import { UpdateConnectorDestinationRequest } from "../models/models_0";
import { de_UpdateConnectorDestinationCommand, se_UpdateConnectorDestinationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConnectorDestinationCommand}.
 */
export interface UpdateConnectorDestinationCommandInput extends UpdateConnectorDestinationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectorDestinationCommand}.
 */
export interface UpdateConnectorDestinationCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the properties of an existing connector destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, UpdateConnectorDestinationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, UpdateConnectorDestinationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // UpdateConnectorDestinationRequest
 *   Identifier: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 *   AuthType: "OAUTH",
 *   AuthConfig: { // AuthConfigUpdate
 *     oAuthUpdate: { // OAuthUpdate
 *       oAuthCompleteRedirectUrl: "STRING_VALUE",
 *       proactiveRefreshTokenRenewal: { // ProactiveRefreshTokenRenewal
 *         enabled: true || false,
 *         DaysBeforeRenewal: Number("int"),
 *       },
 *     },
 *   },
 *   SecretsManager: { // SecretsManager
 *     arn: "STRING_VALUE", // required
 *     versionId: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateConnectorDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateConnectorDestinationCommandInput - {@link UpdateConnectorDestinationCommandInput}
 * @returns {@link UpdateConnectorDestinationCommandOutput}
 * @see {@link UpdateConnectorDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectorDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from IoTManagedIntegrations service.</p>
 *
 *
 * @public
 */
export class UpdateConnectorDestinationCommand extends $Command
  .classBuilder<
    UpdateConnectorDestinationCommandInput,
    UpdateConnectorDestinationCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotManagedIntegrations", "UpdateConnectorDestination", {})
  .n("IoTManagedIntegrationsClient", "UpdateConnectorDestinationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateConnectorDestinationCommand)
  .de(de_UpdateConnectorDestinationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConnectorDestinationRequest;
      output: {};
    };
    sdk: {
      input: UpdateConnectorDestinationCommandInput;
      output: UpdateConnectorDestinationCommandOutput;
    };
  };
}
