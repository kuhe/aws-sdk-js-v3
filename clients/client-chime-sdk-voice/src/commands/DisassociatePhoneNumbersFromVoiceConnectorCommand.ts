// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisassociatePhoneNumbersFromVoiceConnectorRequest,
  DisassociatePhoneNumbersFromVoiceConnectorRequestFilterSensitiveLog,
  DisassociatePhoneNumbersFromVoiceConnectorResponse,
  DisassociatePhoneNumbersFromVoiceConnectorResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DisassociatePhoneNumbersFromVoiceConnectorCommand,
  se_DisassociatePhoneNumbersFromVoiceConnectorCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociatePhoneNumbersFromVoiceConnectorCommand}.
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorCommandInput
  extends DisassociatePhoneNumbersFromVoiceConnectorRequest {}
/**
 * @public
 *
 * The output of {@link DisassociatePhoneNumbersFromVoiceConnectorCommand}.
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorCommandOutput
  extends DisassociatePhoneNumbersFromVoiceConnectorResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates the specified phone numbers from the specified
 *          Amazon Chime SDK Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, DisassociatePhoneNumbersFromVoiceConnectorCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, DisassociatePhoneNumbersFromVoiceConnectorCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // DisassociatePhoneNumbersFromVoiceConnectorRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   E164PhoneNumbers: [ // E164PhoneNumberList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociatePhoneNumbersFromVoiceConnectorCommand(input);
 * const response = await client.send(command);
 * // { // DisassociatePhoneNumbersFromVoiceConnectorResponse
 * //   PhoneNumberErrors: [ // PhoneNumberErrorList
 * //     { // PhoneNumberError
 * //       PhoneNumberId: "STRING_VALUE",
 * //       ErrorCode: "BadRequest" || "Conflict" || "Forbidden" || "NotFound" || "PreconditionFailed" || "ResourceLimitExceeded" || "ServiceFailure" || "AccessDenied" || "ServiceUnavailable" || "Throttled" || "Throttling" || "Unauthorized" || "Unprocessable" || "VoiceConnectorGroupAssociationsExist" || "PhoneNumberAssociationsExist" || "Gone",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DisassociatePhoneNumbersFromVoiceConnectorCommandInput - {@link DisassociatePhoneNumbersFromVoiceConnectorCommandInput}
 * @returns {@link DisassociatePhoneNumbersFromVoiceConnectorCommandOutput}
 * @see {@link DisassociatePhoneNumbersFromVoiceConnectorCommandInput} for command's `input` shape.
 * @see {@link DisassociatePhoneNumbersFromVoiceConnectorCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource couldn't be found.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client isn't authorized to request a resource.</p>
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKVoice service.</p>
 *
 *
 * @public
 */
export class DisassociatePhoneNumbersFromVoiceConnectorCommand extends $Command
  .classBuilder<
    DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    DisassociatePhoneNumbersFromVoiceConnectorCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeSDKTelephonyService", "DisassociatePhoneNumbersFromVoiceConnector", {})
  .n("ChimeSDKVoiceClient", "DisassociatePhoneNumbersFromVoiceConnectorCommand")
  .f(
    DisassociatePhoneNumbersFromVoiceConnectorRequestFilterSensitiveLog,
    DisassociatePhoneNumbersFromVoiceConnectorResponseFilterSensitiveLog
  )
  .ser(se_DisassociatePhoneNumbersFromVoiceConnectorCommand)
  .de(de_DisassociatePhoneNumbersFromVoiceConnectorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociatePhoneNumbersFromVoiceConnectorRequest;
      output: DisassociatePhoneNumbersFromVoiceConnectorResponse;
    };
    sdk: {
      input: DisassociatePhoneNumbersFromVoiceConnectorCommandInput;
      output: DisassociatePhoneNumbersFromVoiceConnectorCommandOutput;
    };
  };
}
