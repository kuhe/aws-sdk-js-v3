// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListResourceTenantsRequest, ListResourceTenantsResponse } from "../models/models_0";
import { de_ListResourceTenantsCommand, se_ListResourceTenantsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceTenantsCommand}.
 */
export interface ListResourceTenantsCommandInput extends ListResourceTenantsRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceTenantsCommand}.
 */
export interface ListResourceTenantsCommandOutput extends ListResourceTenantsResponse, __MetadataBearer {}

/**
 * <p>List all tenants associated with a specific resource.</p>
 *          <p>This operation returns a list of tenants that are associated with the specified
 *             resource. This is useful for understanding which tenants are currently using a particular
 *             resource such as an email identity, configuration set, or email template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListResourceTenantsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListResourceTenantsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // ListResourceTenantsRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   PageSize: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListResourceTenantsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceTenantsResponse
 * //   ResourceTenants: [ // ResourceTenantMetadataList
 * //     { // ResourceTenantMetadata
 * //       TenantName: "STRING_VALUE",
 * //       TenantId: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       AssociatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceTenantsCommandInput - {@link ListResourceTenantsCommandInput}
 * @returns {@link ListResourceTenantsCommandOutput}
 * @see {@link ListResourceTenantsCommandInput} for command's `input` shape.
 * @see {@link ListResourceTenantsCommandOutput} for command's `response` shape.
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
export class ListResourceTenantsCommand extends $Command
  .classBuilder<
    ListResourceTenantsCommandInput,
    ListResourceTenantsCommandOutput,
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
  .s("SimpleEmailService_v2", "ListResourceTenants", {})
  .n("SESv2Client", "ListResourceTenantsCommand")
  .f(void 0, void 0)
  .ser(se_ListResourceTenantsCommand)
  .de(de_ListResourceTenantsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceTenantsRequest;
      output: ListResourceTenantsResponse;
    };
    sdk: {
      input: ListResourceTenantsCommandInput;
      output: ListResourceTenantsCommandOutput;
    };
  };
}
