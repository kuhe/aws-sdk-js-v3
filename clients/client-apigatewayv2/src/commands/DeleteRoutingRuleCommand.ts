// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRoutingRuleRequest } from "../models/models_0";
import { de_DeleteRoutingRuleCommand, se_DeleteRoutingRuleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRoutingRuleCommand}.
 */
export interface DeleteRoutingRuleCommandInput extends DeleteRoutingRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRoutingRuleCommand}.
 */
export interface DeleteRoutingRuleCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a routing rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteRoutingRuleCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeleteRoutingRuleCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // DeleteRoutingRuleRequest
 *   DomainName: "STRING_VALUE", // required
 *   DomainNameId: "STRING_VALUE",
 *   RoutingRuleId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRoutingRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRoutingRuleCommandInput - {@link DeleteRoutingRuleCommandInput}
 * @returns {@link DeleteRoutingRuleCommandOutput}
 * @see {@link DeleteRoutingRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteRoutingRuleCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. See the message field for more information.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>A limit has been exceeded. See the accompanying error message for details.</p>
 *
 * @throws {@link ApiGatewayV2ServiceException}
 * <p>Base exception class for all service exceptions from ApiGatewayV2 service.</p>
 *
 *
 * @public
 */
export class DeleteRoutingRuleCommand extends $Command
  .classBuilder<
    DeleteRoutingRuleCommandInput,
    DeleteRoutingRuleCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApiGatewayV2", "DeleteRoutingRule", {})
  .n("ApiGatewayV2Client", "DeleteRoutingRuleCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRoutingRuleCommand)
  .de(de_DeleteRoutingRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRoutingRuleRequest;
      output: {};
    };
    sdk: {
      input: DeleteRoutingRuleCommandInput;
      output: DeleteRoutingRuleCommandOutput;
    };
  };
}
