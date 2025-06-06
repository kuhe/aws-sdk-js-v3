// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListJobMembersRequest, ListJobMembersResponse } from "../models/models_0";
import { de_ListJobMembersCommand, se_ListJobMembersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListJobMembersCommand}.
 */
export interface ListJobMembersCommandInput extends ListJobMembersRequest {}
/**
 * @public
 *
 * The output of {@link ListJobMembersCommand}.
 */
export interface ListJobMembersCommandOutput extends ListJobMembersResponse, __MetadataBearer {}

/**
 * <p>Lists members on a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListJobMembersCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListJobMembersCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // ListJobMembersRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListJobMembersCommand(input);
 * const response = await client.send(command);
 * // { // ListJobMembersResponse
 * //   members: [ // JobMembers // required
 * //     { // JobMember
 * //       farmId: "STRING_VALUE", // required
 * //       queueId: "STRING_VALUE", // required
 * //       jobId: "STRING_VALUE", // required
 * //       principalId: "STRING_VALUE", // required
 * //       principalType: "USER" || "GROUP", // required
 * //       identityStoreId: "STRING_VALUE", // required
 * //       membershipLevel: "VIEWER" || "CONTRIBUTOR" || "OWNER" || "MANAGER", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJobMembersCommandInput - {@link ListJobMembersCommandInput}
 * @returns {@link ListJobMembersCommandOutput}
 * @see {@link ListJobMembersCommandInput} for command's `input` shape.
 * @see {@link ListJobMembersCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class ListJobMembersCommand extends $Command
  .classBuilder<
    ListJobMembersCommandInput,
    ListJobMembersCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "ListJobMembers", {})
  .n("DeadlineClient", "ListJobMembersCommand")
  .f(void 0, void 0)
  .ser(se_ListJobMembersCommand)
  .de(de_ListJobMembersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListJobMembersRequest;
      output: ListJobMembersResponse;
    };
    sdk: {
      input: ListJobMembersCommandInput;
      output: ListJobMembersCommandOutput;
    };
  };
}
