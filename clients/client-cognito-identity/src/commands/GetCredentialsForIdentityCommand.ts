// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetCredentialsForIdentityInput,
  GetCredentialsForIdentityInputFilterSensitiveLog,
  GetCredentialsForIdentityResponse,
  GetCredentialsForIdentityResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetCredentialsForIdentityCommand, se_GetCredentialsForIdentityCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCredentialsForIdentityCommand}.
 */
export interface GetCredentialsForIdentityCommandInput extends GetCredentialsForIdentityInput {}
/**
 * @public
 *
 * The output of {@link GetCredentialsForIdentityCommand}.
 */
export interface GetCredentialsForIdentityCommandOutput extends GetCredentialsForIdentityResponse, __MetadataBearer {}

/**
 * <p>Returns credentials for the provided identity ID. Any provided logins will be
 *          validated against supported login providers. If the token is for
 *             <code>cognito-identity.amazonaws.com</code>, it will be passed through to Security Token Service with the appropriate role for the token.</p>
 *          <p>This is a public API. You do not need any credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetCredentialsForIdentityCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, GetCredentialsForIdentityCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const input = { // GetCredentialsForIdentityInput
 *   IdentityId: "STRING_VALUE", // required
 *   Logins: { // LoginsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   CustomRoleArn: "STRING_VALUE",
 * };
 * const command = new GetCredentialsForIdentityCommand(input);
 * const response = await client.send(command);
 * // { // GetCredentialsForIdentityResponse
 * //   IdentityId: "STRING_VALUE",
 * //   Credentials: { // Credentials
 * //     AccessKeyId: "STRING_VALUE",
 * //     SecretKey: "STRING_VALUE",
 * //     SessionToken: "STRING_VALUE",
 * //     Expiration: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCredentialsForIdentityCommandInput - {@link GetCredentialsForIdentityCommandInput}
 * @returns {@link GetCredentialsForIdentityCommandOutput}
 * @see {@link GetCredentialsForIdentityCommandInput} for command's `input` shape.
 * @see {@link GetCredentialsForIdentityCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 * @throws {@link ExternalServiceException} (client fault)
 *  <p>An exception thrown when a dependent service such as Facebook or Twitter is not
 *          responding</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Thrown when the service encounters an error during processing the request.</p>
 *
 * @throws {@link InvalidIdentityPoolConfigurationException} (client fault)
 *  <p>If you provided authentication information in the request, the identity pool has no
 *          authenticated role configured, or STS returned an error response to the
 *          request to assume the authenticated role from the identity pool. If you provided no
 *          authentication information in the request, the identity pool has no unauthenticated role
 *          configured, or STS returned an error response to the request to assume the
 *          unauthenticated role from the identity pool.</p>
 *          <p>Your role trust policy must grant <code>AssumeRoleWithWebIdentity</code> permissions to <code>cognito-identity.amazonaws.com</code>.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Thrown for missing or bad input parameter(s).</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>Thrown when a user is not authorized to access the requested resource.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>Thrown when a user tries to use a login which is already linked to another
 *          account.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when the requested resource (for example, a dataset or record) does not
 *          exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Thrown when a request is throttled.</p>
 *
 * @throws {@link CognitoIdentityServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentity service.</p>
 *
 *
 * @public
 */
export class GetCredentialsForIdentityCommand extends $Command
  .classBuilder<
    GetCredentialsForIdentityCommandInput,
    GetCredentialsForIdentityCommandOutput,
    CognitoIdentityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCognitoIdentityService", "GetCredentialsForIdentity", {})
  .n("CognitoIdentityClient", "GetCredentialsForIdentityCommand")
  .f(GetCredentialsForIdentityInputFilterSensitiveLog, GetCredentialsForIdentityResponseFilterSensitiveLog)
  .ser(se_GetCredentialsForIdentityCommand)
  .de(de_GetCredentialsForIdentityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCredentialsForIdentityInput;
      output: GetCredentialsForIdentityResponse;
    };
    sdk: {
      input: GetCredentialsForIdentityCommandInput;
      output: GetCredentialsForIdentityCommandOutput;
    };
  };
}
