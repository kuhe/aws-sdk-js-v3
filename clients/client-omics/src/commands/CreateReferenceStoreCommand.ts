// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateReferenceStoreRequest, CreateReferenceStoreResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_CreateReferenceStoreCommand, se_CreateReferenceStoreCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateReferenceStoreCommand}.
 */
export interface CreateReferenceStoreCommandInput extends CreateReferenceStoreRequest {}
/**
 * @public
 *
 * The output of {@link CreateReferenceStoreCommand}.
 */
export interface CreateReferenceStoreCommandOutput extends CreateReferenceStoreResponse, __MetadataBearer {}

/**
 * <p>Creates a reference store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CreateReferenceStoreCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CreateReferenceStoreCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // CreateReferenceStoreRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   sseConfig: { // SseConfig
 *     type: "STRING_VALUE", // required
 *     keyArn: "STRING_VALUE",
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateReferenceStoreCommand(input);
 * const response = await client.send(command);
 * // { // CreateReferenceStoreResponse
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   sseConfig: { // SseConfig
 * //     type: "STRING_VALUE", // required
 * //     keyArn: "STRING_VALUE",
 * //   },
 * //   creationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateReferenceStoreCommandInput - {@link CreateReferenceStoreCommandInput}
 * @returns {@link CreateReferenceStoreCommandOutput}
 * @see {@link CreateReferenceStoreCommandInput} for command's `input` shape.
 * @see {@link CreateReferenceStoreCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class CreateReferenceStoreCommand extends $Command
  .classBuilder<
    CreateReferenceStoreCommandInput,
    CreateReferenceStoreCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "CreateReferenceStore", {})
  .n("OmicsClient", "CreateReferenceStoreCommand")
  .f(void 0, void 0)
  .ser(se_CreateReferenceStoreCommand)
  .de(de_CreateReferenceStoreCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateReferenceStoreRequest;
      output: CreateReferenceStoreResponse;
    };
    sdk: {
      input: CreateReferenceStoreCommandInput;
      output: CreateReferenceStoreCommandOutput;
    };
  };
}
