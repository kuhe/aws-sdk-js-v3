// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CancelEnvironmentDeploymentInput,
  CancelEnvironmentDeploymentOutput,
  CancelEnvironmentDeploymentOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CancelEnvironmentDeploymentCommand, se_CancelEnvironmentDeploymentCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelEnvironmentDeploymentCommand}.
 */
export interface CancelEnvironmentDeploymentCommandInput extends CancelEnvironmentDeploymentInput {}
/**
 * @public
 *
 * The output of {@link CancelEnvironmentDeploymentCommand}.
 */
export interface CancelEnvironmentDeploymentCommandOutput extends CancelEnvironmentDeploymentOutput, __MetadataBearer {}

/**
 * <p>Attempts to cancel an environment deployment on an <a>UpdateEnvironment</a> action, if the deployment is <code>IN_PROGRESS</code>. For more
 *       information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-update.html">Update an environment</a> in the <i>Proton
 *         User guide</i>.</p>
 *          <p>The following list includes potential cancellation scenarios.</p>
 *          <ul>
 *             <li>
 *                <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p>
 *             </li>
 *             <li>
 *                <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p>
 *             </li>
 *             <li>
 *                <p>If the current <a>UpdateEnvironment</a> action succeeds before the cancellation attempt starts, the resulting deployment state is
 *             <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, CancelEnvironmentDeploymentCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, CancelEnvironmentDeploymentCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // CancelEnvironmentDeploymentInput
 *   environmentName: "STRING_VALUE", // required
 * };
 * const command = new CancelEnvironmentDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // CancelEnvironmentDeploymentOutput
 * //   environment: { // Environment
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastDeploymentAttemptedAt: new Date("TIMESTAMP"), // required
 * //     lastDeploymentSucceededAt: new Date("TIMESTAMP"), // required
 * //     arn: "STRING_VALUE", // required
 * //     templateName: "STRING_VALUE", // required
 * //     templateMajorVersion: "STRING_VALUE", // required
 * //     templateMinorVersion: "STRING_VALUE", // required
 * //     deploymentStatus: "STRING_VALUE", // required
 * //     deploymentStatusMessage: "STRING_VALUE",
 * //     protonServiceRoleArn: "STRING_VALUE",
 * //     environmentAccountConnectionId: "STRING_VALUE",
 * //     environmentAccountId: "STRING_VALUE",
 * //     spec: "STRING_VALUE",
 * //     provisioning: "STRING_VALUE",
 * //     provisioningRepository: { // RepositoryBranch
 * //       arn: "STRING_VALUE", // required
 * //       provider: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       branch: "STRING_VALUE", // required
 * //     },
 * //     componentRoleArn: "STRING_VALUE",
 * //     codebuildRoleArn: "STRING_VALUE",
 * //     lastAttemptedDeploymentId: "STRING_VALUE",
 * //     lastSucceededDeploymentId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CancelEnvironmentDeploymentCommandInput - {@link CancelEnvironmentDeploymentCommandInput}
 * @returns {@link CancelEnvironmentDeploymentCommandOutput}
 * @see {@link CancelEnvironmentDeploymentCommandInput} for command's `input` shape.
 * @see {@link CancelEnvironmentDeploymentCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request <i>couldn't</i> be made due to a conflicting operation or resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 *
 * @public
 */
export class CancelEnvironmentDeploymentCommand extends $Command
  .classBuilder<
    CancelEnvironmentDeploymentCommandInput,
    CancelEnvironmentDeploymentCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsProton20200720", "CancelEnvironmentDeployment", {})
  .n("ProtonClient", "CancelEnvironmentDeploymentCommand")
  .f(void 0, CancelEnvironmentDeploymentOutputFilterSensitiveLog)
  .ser(se_CancelEnvironmentDeploymentCommand)
  .de(de_CancelEnvironmentDeploymentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelEnvironmentDeploymentInput;
      output: CancelEnvironmentDeploymentOutput;
    };
    sdk: {
      input: CancelEnvironmentDeploymentCommandInput;
      output: CancelEnvironmentDeploymentCommandOutput;
    };
  };
}
