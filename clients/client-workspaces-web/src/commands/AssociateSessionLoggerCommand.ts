// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateSessionLoggerRequest, AssociateSessionLoggerResponse } from "../models/models_0";
import { de_AssociateSessionLoggerCommand, se_AssociateSessionLoggerCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateSessionLoggerCommand}.
 */
export interface AssociateSessionLoggerCommandInput extends AssociateSessionLoggerRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSessionLoggerCommand}.
 */
export interface AssociateSessionLoggerCommandOutput extends AssociateSessionLoggerResponse, __MetadataBearer {}

/**
 * <p>Associates a session logger with a portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, AssociateSessionLoggerCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, AssociateSessionLoggerCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const input = { // AssociateSessionLoggerRequest
 *   portalArn: "STRING_VALUE", // required
 *   sessionLoggerArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateSessionLoggerCommand(input);
 * const response = await client.send(command);
 * // { // AssociateSessionLoggerResponse
 * //   portalArn: "STRING_VALUE", // required
 * //   sessionLoggerArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AssociateSessionLoggerCommandInput - {@link AssociateSessionLoggerCommandInput}
 * @returns {@link AssociateSessionLoggerCommandOutput}
 * @see {@link AssociateSessionLoggerCommandInput} for command's `input` shape.
 * @see {@link AssociateSessionLoggerCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>There is a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There is a validation error.</p>
 *
 * @throws {@link WorkSpacesWebServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesWeb service.</p>
 *
 *
 * @example Associate Session Logger with Portal
 * ```javascript
 * // Associates a session logger with a portal
 * const input = {
 *   portalArn: "arn:aws:workspaces-web:us-west-2:123456789012:portal/12345678-1234-1234-1234-123456789012",
 *   sessionLoggerArn: "arn:aws:workspaces-web:us-west-2:123456789012:sessionLogger/11111111-1111-1111-1111-111111111111"
 * };
 * const command = new AssociateSessionLoggerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   portalArn: "arn:aws:workspaces-web:us-west-2:123456789012:portal/12345678-1234-1234-1234-123456789012",
 *   sessionLoggerArn: "arn:aws:workspaces-web:us-west-2:123456789012:sessionLogger/11111111-1111-1111-1111-111111111111"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AssociateSessionLoggerCommand extends $Command
  .classBuilder<
    AssociateSessionLoggerCommandInput,
    AssociateSessionLoggerCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSErmineControlPlaneService", "AssociateSessionLogger", {})
  .n("WorkSpacesWebClient", "AssociateSessionLoggerCommand")
  .f(void 0, void 0)
  .ser(se_AssociateSessionLoggerCommand)
  .de(de_AssociateSessionLoggerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateSessionLoggerRequest;
      output: AssociateSessionLoggerResponse;
    };
    sdk: {
      input: AssociateSessionLoggerCommandInput;
      output: AssociateSessionLoggerCommandOutput;
    };
  };
}
