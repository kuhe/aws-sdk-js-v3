// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTenantRequest, DeleteTenantResponse } from "../models/models_0";
import { de_DeleteTenantCommand, se_DeleteTenantCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTenantCommand}.
 */
export interface DeleteTenantCommandInput extends DeleteTenantRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTenantCommand}.
 */
export interface DeleteTenantCommandOutput extends DeleteTenantResponse, __MetadataBearer {}

/**
 * <p>Delete an existing tenant.</p>
 *          <p>When you delete a tenant, its associations with resources
 *             are removed, but the resources themselves are not deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, DeleteTenantCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, DeleteTenantCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // DeleteTenantRequest
 *   TenantName: "STRING_VALUE", // required
 * };
 * const command = new DeleteTenantCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTenantCommandInput - {@link DeleteTenantCommandInput}
 * @returns {@link DeleteTenantCommandOutput}
 * @see {@link DeleteTenantCommandInput} for command's `input` shape.
 * @see {@link DeleteTenantCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 *
 * @public
 */
export class DeleteTenantCommand extends $Command
  .classBuilder<
    DeleteTenantCommandInput,
    DeleteTenantCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService_v2", "DeleteTenant", {})
  .n("SESv2Client", "DeleteTenantCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTenantCommand)
  .de(de_DeleteTenantCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTenantRequest;
      output: {};
    };
    sdk: {
      input: DeleteTenantCommandInput;
      output: DeleteTenantCommandOutput;
    };
  };
}
