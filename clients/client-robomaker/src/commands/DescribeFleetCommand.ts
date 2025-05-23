// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFleetRequest, DescribeFleetResponse } from "../models/models_0";
import { de_DescribeFleetCommand, se_DescribeFleetCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFleetCommand}.
 */
export interface DescribeFleetCommandInput extends DescribeFleetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFleetCommand}.
 */
export interface DescribeFleetCommandOutput extends DescribeFleetResponse, __MetadataBearer {}

/**
 * <important>
 *             <p>End of support notice: On September 10, 2025, Amazon Web Services
 *          will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will
 *          no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources.
 *          For more information on transitioning to Batch to help run containerized
 *          simulations, visit <a href="https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/">https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/</a>.
 *       </p>
 *          </important>
 *          <important>
 *             <p>This API is no longer supported. For more information, see the May 2, 2022 update in the <a href="https://docs.aws.amazon.com/robomaker/latest/dg/chapter-support-policy.html#software-support-policy-may2022">Support policy</a> page.</p>
 *          </important>
 *          <p>Describes a fleet.</p>
 *
 * @deprecated Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeFleetCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeFleetCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // DescribeFleetRequest
 *   fleet: "STRING_VALUE", // required
 * };
 * const command = new DescribeFleetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetResponse
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   robots: [ // Robots
 * //     { // Robot
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       fleetArn: "STRING_VALUE",
 * //       status: "Available" || "Registered" || "PendingNewDeployment" || "Deploying" || "Failed" || "InSync" || "NoResponse",
 * //       greenGrassGroupId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       architecture: "X86_64" || "ARM64" || "ARMHF",
 * //       lastDeploymentJob: "STRING_VALUE",
 * //       lastDeploymentTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   createdAt: new Date("TIMESTAMP"),
 * //   lastDeploymentStatus: "Pending" || "Preparing" || "InProgress" || "Failed" || "Succeeded" || "Canceled",
 * //   lastDeploymentJob: "STRING_VALUE",
 * //   lastDeploymentTime: new Date("TIMESTAMP"),
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFleetCommandInput - {@link DescribeFleetCommandInput}
 * @returns {@link DescribeFleetCommandOutput}
 * @see {@link DescribeFleetCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 *
 * @public
 */
export class DescribeFleetCommand extends $Command
  .classBuilder<
    DescribeFleetCommandInput,
    DescribeFleetCommandOutput,
    RoboMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RoboMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("robomaker", "DescribeFleet", {})
  .n("RoboMakerClient", "DescribeFleetCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFleetCommand)
  .de(de_DescribeFleetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFleetRequest;
      output: DescribeFleetResponse;
    };
    sdk: {
      input: DescribeFleetCommandInput;
      output: DescribeFleetCommandOutput;
    };
  };
}
