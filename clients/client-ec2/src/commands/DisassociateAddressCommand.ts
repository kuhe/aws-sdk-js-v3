// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateAddressRequest } from "../models/models_6";
import { de_DisassociateAddressCommand, se_DisassociateAddressCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateAddressCommand}.
 */
export interface DisassociateAddressCommandInput extends DisassociateAddressRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateAddressCommand}.
 */
export interface DisassociateAddressCommandOutput extends __MetadataBearer {}

/**
 * <p>Disassociates an Elastic IP address from the instance or network interface it's associated with.</p>
 *          <p>This is an idempotent operation. If you perform the operation more than once, Amazon EC2 doesn't return an error.</p>
 *          <p>An address cannot be disassociated if the all of the following conditions are met:</p>
 *          <ul>
 *             <li>
 *                <p>Network interface has a <code>publicDualStackDnsName</code> publicDnsName</p>
 *             </li>
 *             <li>
 *                <p>Public IPv4 address is the primary public IPv4 address</p>
 *             </li>
 *             <li>
 *                <p>Network interface only has one remaining public IPv4 address</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateAddressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateAddressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisassociateAddressRequest
 *   AssociationId: "STRING_VALUE",
 *   PublicIp: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DisassociateAddressCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateAddressCommandInput - {@link DisassociateAddressCommandInput}
 * @returns {@link DisassociateAddressCommandOutput}
 * @see {@link DisassociateAddressCommandInput} for command's `input` shape.
 * @see {@link DisassociateAddressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To disassociate an Elastic IP address
 * ```javascript
 * // This example disassociates an Elastic IP address from an instance.
 * const input = {
 *   AssociationId: "eipassoc-2bebb745"
 * };
 * const command = new DisassociateAddressCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DisassociateAddressCommand extends $Command
  .classBuilder<
    DisassociateAddressCommandInput,
    DisassociateAddressCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DisassociateAddress", {})
  .n("EC2Client", "DisassociateAddressCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateAddressCommand)
  .de(de_DisassociateAddressCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateAddressRequest;
      output: {};
    };
    sdk: {
      input: DisassociateAddressCommandInput;
      output: DisassociateAddressCommandOutput;
    };
  };
}
