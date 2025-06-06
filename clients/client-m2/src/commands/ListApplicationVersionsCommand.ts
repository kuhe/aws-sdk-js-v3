// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { ListApplicationVersionsRequest, ListApplicationVersionsResponse } from "../models/models_0";
import { de_ListApplicationVersionsCommand, se_ListApplicationVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationVersionsCommand}.
 */
export interface ListApplicationVersionsCommandInput extends ListApplicationVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationVersionsCommand}.
 */
export interface ListApplicationVersionsCommandOutput extends ListApplicationVersionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the application versions for a specific application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, ListApplicationVersionsCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, ListApplicationVersionsCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * const client = new M2Client(config);
 * const input = { // ListApplicationVersionsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   applicationId: "STRING_VALUE", // required
 * };
 * const command = new ListApplicationVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationVersionsResponse
 * //   applicationVersions: [ // ApplicationVersionSummaryList // required
 * //     { // ApplicationVersionSummary
 * //       applicationVersion: Number("int"), // required
 * //       status: "STRING_VALUE", // required
 * //       statusReason: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationVersionsCommandInput - {@link ListApplicationVersionsCommandInput}
 * @returns {@link ListApplicationVersionsCommandOutput}
 * @see {@link ListApplicationVersionsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationVersionsCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 *
 * @public
 */
export class ListApplicationVersionsCommand extends $Command
  .classBuilder<
    ListApplicationVersionsCommandInput,
    ListApplicationVersionsCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsSupernovaControlPlaneService", "ListApplicationVersions", {})
  .n("M2Client", "ListApplicationVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListApplicationVersionsCommand)
  .de(de_ListApplicationVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationVersionsRequest;
      output: ListApplicationVersionsResponse;
    };
    sdk: {
      input: ListApplicationVersionsCommandInput;
      output: ListApplicationVersionsCommandOutput;
    };
  };
}
