// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSigningCertificateRequest, GetSigningCertificateResponse } from "../models/models_0";
import { de_GetSigningCertificateCommand, se_GetSigningCertificateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSigningCertificateCommand}.
 */
export interface GetSigningCertificateCommandInput extends GetSigningCertificateRequest {}
/**
 * @public
 *
 * The output of {@link GetSigningCertificateCommand}.
 */
export interface GetSigningCertificateCommandOutput extends GetSigningCertificateResponse, __MetadataBearer {}

/**
 * <p>Given a user pool ID, returns the signing certificate for SAML 2.0 federation.</p>
 *          <p>Issued certificates are valid for 10 years from the date of issue. Amazon Cognito issues and
 *             assigns a new signing certificate annually. This renewal process returns a new value in
 *             the response to <code>GetSigningCertificate</code>, but doesn't invalidate the original
 *             certificate.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-SAML-signing-encryption.html#cognito-user-pools-SAML-signing">Signing SAML requests</a>.</p>
 *          <note>
 *             <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 *     this operation, you must use IAM credentials to authorize requests, and you must
 *     grant yourself the corresponding IAM permission in a policy.</p>
 *             <p class="title">
 *                <b>Learn more</b>
 *             </p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a>
 *                   </p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetSigningCertificateCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetSigningCertificateCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // GetSigningCertificateRequest
 *   UserPoolId: "STRING_VALUE", // required
 * };
 * const command = new GetSigningCertificateCommand(input);
 * const response = await client.send(command);
 * // { // GetSigningCertificateResponse
 * //   Certificate: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSigningCertificateCommandInput - {@link GetSigningCertificateCommandInput}
 * @returns {@link GetSigningCertificateCommandOutput}
 * @see {@link GetSigningCertificateCommandInput} for command's `input` shape.
 * @see {@link GetSigningCertificateCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @public
 */
export class GetSigningCertificateCommand extends $Command
  .classBuilder<
    GetSigningCertificateCommandInput,
    GetSigningCertificateCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCognitoIdentityProviderService", "GetSigningCertificate", {})
  .n("CognitoIdentityProviderClient", "GetSigningCertificateCommand")
  .f(void 0, void 0)
  .ser(se_GetSigningCertificateCommand)
  .de(de_GetSigningCertificateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSigningCertificateRequest;
      output: GetSigningCertificateResponse;
    };
    sdk: {
      input: GetSigningCertificateCommandInput;
      output: GetSigningCertificateCommandOutput;
    };
  };
}
