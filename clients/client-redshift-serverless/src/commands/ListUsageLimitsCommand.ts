// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListUsageLimitsRequest, ListUsageLimitsResponse } from "../models/models_0";
import { de_ListUsageLimitsCommand, se_ListUsageLimitsCommand } from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUsageLimitsCommand}.
 */
export interface ListUsageLimitsCommandInput extends ListUsageLimitsRequest {}
/**
 * @public
 *
 * The output of {@link ListUsageLimitsCommand}.
 */
export interface ListUsageLimitsCommandOutput extends ListUsageLimitsResponse, __MetadataBearer {}

/**
 * <p>Lists all usage limits within Amazon Redshift Serverless.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, ListUsageLimitsCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, ListUsageLimitsCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const input = { // ListUsageLimitsRequest
 *   resourceArn: "STRING_VALUE",
 *   usageType: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListUsageLimitsCommand(input);
 * const response = await client.send(command);
 * // { // ListUsageLimitsResponse
 * //   usageLimits: [ // UsageLimits
 * //     { // UsageLimit
 * //       usageLimitId: "STRING_VALUE",
 * //       usageLimitArn: "STRING_VALUE",
 * //       resourceArn: "STRING_VALUE",
 * //       usageType: "STRING_VALUE",
 * //       amount: Number("long"),
 * //       period: "STRING_VALUE",
 * //       breachAction: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUsageLimitsCommandInput - {@link ListUsageLimitsCommandInput}
 * @returns {@link ListUsageLimitsCommandOutput}
 * @see {@link ListUsageLimitsCommandInput} for command's `input` shape.
 * @see {@link ListUsageLimitsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link InvalidPaginationException} (client fault)
 *  <p>The provided pagination token is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class ListUsageLimitsCommand extends $Command
  .classBuilder<
    ListUsageLimitsCommandInput,
    ListUsageLimitsCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServerless", "ListUsageLimits", {})
  .n("RedshiftServerlessClient", "ListUsageLimitsCommand")
  .f(void 0, void 0)
  .ser(se_ListUsageLimitsCommand)
  .de(de_ListUsageLimitsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUsageLimitsRequest;
      output: ListUsageLimitsResponse;
    };
    sdk: {
      input: ListUsageLimitsCommandInput;
      output: ListUsageLimitsCommandOutput;
    };
  };
}
