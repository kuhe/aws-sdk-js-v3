// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { UpdateIdMappingWorkflowInput, UpdateIdMappingWorkflowOutput } from "../models/models_0";
import { de_UpdateIdMappingWorkflowCommand, se_UpdateIdMappingWorkflowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateIdMappingWorkflowCommand}.
 */
export interface UpdateIdMappingWorkflowCommandInput extends UpdateIdMappingWorkflowInput {}
/**
 * @public
 *
 * The output of {@link UpdateIdMappingWorkflowCommand}.
 */
export interface UpdateIdMappingWorkflowCommandOutput extends UpdateIdMappingWorkflowOutput, __MetadataBearer {}

/**
 * <p>Updates an existing <code>IdMappingWorkflow</code>. This method is identical to CreateIdMappingWorkflow, except it uses an HTTP <code>PUT</code> request instead of a <code>POST</code> request, and the <code>IdMappingWorkflow</code> must already exist for the method to succeed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, UpdateIdMappingWorkflowCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, UpdateIdMappingWorkflowCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * const client = new EntityResolutionClient(config);
 * const input = { // UpdateIdMappingWorkflowInput
 *   workflowName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   inputSourceConfig: [ // IdMappingWorkflowInputSourceConfig // required
 *     { // IdMappingWorkflowInputSource
 *       inputSourceARN: "STRING_VALUE", // required
 *       schemaName: "STRING_VALUE",
 *       type: "SOURCE" || "TARGET",
 *     },
 *   ],
 *   outputSourceConfig: [ // IdMappingWorkflowOutputSourceConfig
 *     { // IdMappingWorkflowOutputSource
 *       outputS3Path: "STRING_VALUE", // required
 *       KMSArn: "STRING_VALUE",
 *     },
 *   ],
 *   idMappingTechniques: { // IdMappingTechniques
 *     idMappingType: "PROVIDER" || "RULE_BASED", // required
 *     ruleBasedProperties: { // IdMappingRuleBasedProperties
 *       rules: [ // RuleList
 *         { // Rule
 *           ruleName: "STRING_VALUE", // required
 *           matchingKeys: [ // MatchingKeys // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       ruleDefinitionType: "SOURCE" || "TARGET", // required
 *       attributeMatchingModel: "ONE_TO_ONE" || "MANY_TO_MANY", // required
 *       recordMatchingModel: "ONE_SOURCE_TO_ONE_TARGET" || "MANY_SOURCE_TO_ONE_TARGET", // required
 *     },
 *     providerProperties: { // ProviderProperties
 *       providerServiceArn: "STRING_VALUE", // required
 *       providerConfiguration: "DOCUMENT_VALUE",
 *       intermediateSourceConfiguration: { // IntermediateSourceConfiguration
 *         intermediateS3Path: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   roleArn: "STRING_VALUE",
 * };
 * const command = new UpdateIdMappingWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIdMappingWorkflowOutput
 * //   workflowName: "STRING_VALUE", // required
 * //   workflowArn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   inputSourceConfig: [ // IdMappingWorkflowInputSourceConfig // required
 * //     { // IdMappingWorkflowInputSource
 * //       inputSourceARN: "STRING_VALUE", // required
 * //       schemaName: "STRING_VALUE",
 * //       type: "SOURCE" || "TARGET",
 * //     },
 * //   ],
 * //   outputSourceConfig: [ // IdMappingWorkflowOutputSourceConfig
 * //     { // IdMappingWorkflowOutputSource
 * //       outputS3Path: "STRING_VALUE", // required
 * //       KMSArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   idMappingTechniques: { // IdMappingTechniques
 * //     idMappingType: "PROVIDER" || "RULE_BASED", // required
 * //     ruleBasedProperties: { // IdMappingRuleBasedProperties
 * //       rules: [ // RuleList
 * //         { // Rule
 * //           ruleName: "STRING_VALUE", // required
 * //           matchingKeys: [ // MatchingKeys // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       ruleDefinitionType: "SOURCE" || "TARGET", // required
 * //       attributeMatchingModel: "ONE_TO_ONE" || "MANY_TO_MANY", // required
 * //       recordMatchingModel: "ONE_SOURCE_TO_ONE_TARGET" || "MANY_SOURCE_TO_ONE_TARGET", // required
 * //     },
 * //     providerProperties: { // ProviderProperties
 * //       providerServiceArn: "STRING_VALUE", // required
 * //       providerConfiguration: "DOCUMENT_VALUE",
 * //       intermediateSourceConfiguration: { // IntermediateSourceConfiguration
 * //         intermediateS3Path: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   },
 * //   roleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateIdMappingWorkflowCommandInput - {@link UpdateIdMappingWorkflowCommandInput}
 * @returns {@link UpdateIdMappingWorkflowCommandOutput}
 * @see {@link UpdateIdMappingWorkflowCommandInput} for command's `input` shape.
 * @see {@link UpdateIdMappingWorkflowCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution service. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Entity Resolution. </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 *
 * @public
 */
export class UpdateIdMappingWorkflowCommand extends $Command
  .classBuilder<
    UpdateIdMappingWorkflowCommandInput,
    UpdateIdMappingWorkflowCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSVeniceService", "UpdateIdMappingWorkflow", {})
  .n("EntityResolutionClient", "UpdateIdMappingWorkflowCommand")
  .f(void 0, void 0)
  .ser(se_UpdateIdMappingWorkflowCommand)
  .de(de_UpdateIdMappingWorkflowCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIdMappingWorkflowInput;
      output: UpdateIdMappingWorkflowOutput;
    };
    sdk: {
      input: UpdateIdMappingWorkflowCommandInput;
      output: UpdateIdMappingWorkflowCommandOutput;
    };
  };
}
