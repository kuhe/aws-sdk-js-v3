// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { AddUserToGroupRequest } from "../models/models_0";
import { de_AddUserToGroupCommand, se_AddUserToGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddUserToGroupCommand}.
 */
export interface AddUserToGroupCommandInput extends AddUserToGroupRequest {}
/**
 * @public
 *
 * The output of {@link AddUserToGroupCommand}.
 */
export interface AddUserToGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds the specified user to the specified group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AddUserToGroupCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AddUserToGroupCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // AddUserToGroupRequest
 *   GroupName: "STRING_VALUE", // required
 *   UserName: "STRING_VALUE", // required
 * };
 * const command = new AddUserToGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddUserToGroupCommandInput - {@link AddUserToGroupCommandInput}
 * @returns {@link AddUserToGroupCommandOutput}
 * @see {@link AddUserToGroupCommandInput} for command's `input` shape.
 * @see {@link AddUserToGroupCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @example To add a user to an IAM group
 * ```javascript
 * // The following command adds an IAM user named Bob to the IAM group named Admins:
 * const input = {
 *   GroupName: "Admins",
 *   UserName: "Bob"
 * };
 * const command = new AddUserToGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AddUserToGroupCommand extends $Command
  .classBuilder<
    AddUserToGroupCommandInput,
    AddUserToGroupCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "AddUserToGroup", {})
  .n("IAMClient", "AddUserToGroupCommand")
  .f(void 0, void 0)
  .ser(se_AddUserToGroupCommand)
  .de(de_AddUserToGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddUserToGroupRequest;
      output: {};
    };
    sdk: {
      input: AddUserToGroupCommandInput;
      output: AddUserToGroupCommandOutput;
    };
  };
}
