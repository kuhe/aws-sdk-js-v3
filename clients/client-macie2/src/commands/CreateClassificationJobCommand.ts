// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { CreateClassificationJobRequest, CreateClassificationJobResponse } from "../models/models_0";
import { de_CreateClassificationJobCommand, se_CreateClassificationJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateClassificationJobCommand}.
 */
export interface CreateClassificationJobCommandInput extends CreateClassificationJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateClassificationJobCommand}.
 */
export interface CreateClassificationJobCommandOutput extends CreateClassificationJobResponse, __MetadataBearer {}

/**
 * <p>Creates and defines the settings for a classification job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, CreateClassificationJobCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, CreateClassificationJobCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = { // CreateClassificationJobRequest
 *   allowListIds: [ // __listOf__string
 *     "STRING_VALUE",
 *   ],
 *   clientToken: "STRING_VALUE", // required
 *   customDataIdentifierIds: [
 *     "STRING_VALUE",
 *   ],
 *   description: "STRING_VALUE",
 *   initialRun: true || false,
 *   jobType: "ONE_TIME" || "SCHEDULED", // required
 *   managedDataIdentifierIds: [
 *     "STRING_VALUE",
 *   ],
 *   managedDataIdentifierSelector: "ALL" || "EXCLUDE" || "INCLUDE" || "NONE" || "RECOMMENDED",
 *   name: "STRING_VALUE", // required
 *   s3JobDefinition: { // S3JobDefinition
 *     bucketCriteria: { // S3BucketCriteriaForJob
 *       excludes: { // CriteriaBlockForJob
 *         and: [ // __listOfCriteriaForJob
 *           { // CriteriaForJob
 *             simpleCriterion: { // SimpleCriterionForJob
 *               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 *               key: "ACCOUNT_ID" || "S3_BUCKET_NAME" || "S3_BUCKET_EFFECTIVE_PERMISSION" || "S3_BUCKET_SHARED_ACCESS",
 *               values: [
 *                 "STRING_VALUE",
 *               ],
 *             },
 *             tagCriterion: { // TagCriterionForJob
 *               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 *               tagValues: [ // __listOfTagCriterionPairForJob
 *                 { // TagCriterionPairForJob
 *                   key: "STRING_VALUE",
 *                   value: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           },
 *         ],
 *       },
 *       includes: {
 *         and: [
 *           {
 *             simpleCriterion: {
 *               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 *               key: "ACCOUNT_ID" || "S3_BUCKET_NAME" || "S3_BUCKET_EFFECTIVE_PERMISSION" || "S3_BUCKET_SHARED_ACCESS",
 *               values: [
 *                 "STRING_VALUE",
 *               ],
 *             },
 *             tagCriterion: {
 *               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 *               tagValues: [
 *                 {
 *                   key: "STRING_VALUE",
 *                   value: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           },
 *         ],
 *       },
 *     },
 *     bucketDefinitions: [ // __listOfS3BucketDefinitionForJob
 *       { // S3BucketDefinitionForJob
 *         accountId: "STRING_VALUE", // required
 *         buckets: "<__listOf__string>", // required
 *       },
 *     ],
 *     scoping: { // Scoping
 *       excludes: { // JobScopingBlock
 *         and: [ // __listOfJobScopeTerm
 *           { // JobScopeTerm
 *             simpleScopeTerm: { // SimpleScopeTerm
 *               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 *               key: "OBJECT_EXTENSION" || "OBJECT_LAST_MODIFIED_DATE" || "OBJECT_SIZE" || "OBJECT_KEY",
 *               values: "<__listOf__string>",
 *             },
 *             tagScopeTerm: { // TagScopeTerm
 *               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 *               key: "STRING_VALUE",
 *               tagValues: [ // __listOfTagValuePair
 *                 { // TagValuePair
 *                   key: "STRING_VALUE",
 *                   value: "STRING_VALUE",
 *                 },
 *               ],
 *               target: "S3_OBJECT",
 *             },
 *           },
 *         ],
 *       },
 *       includes: {
 *         and: [
 *           {
 *             simpleScopeTerm: {
 *               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 *               key: "OBJECT_EXTENSION" || "OBJECT_LAST_MODIFIED_DATE" || "OBJECT_SIZE" || "OBJECT_KEY",
 *               values: "<__listOf__string>",
 *             },
 *             tagScopeTerm: {
 *               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 *               key: "STRING_VALUE",
 *               tagValues: [
 *                 {
 *                   key: "STRING_VALUE",
 *                   value: "STRING_VALUE",
 *                 },
 *               ],
 *               target: "S3_OBJECT",
 *             },
 *           },
 *         ],
 *       },
 *     },
 *   },
 *   samplingPercentage: Number("int"),
 *   scheduleFrequency: { // JobScheduleFrequency
 *     dailySchedule: {},
 *     monthlySchedule: { // MonthlySchedule
 *       dayOfMonth: Number("int"),
 *     },
 *     weeklySchedule: { // WeeklySchedule
 *       dayOfWeek: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY",
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateClassificationJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateClassificationJobResponse
 * //   jobArn: "STRING_VALUE",
 * //   jobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateClassificationJobCommandInput - {@link CreateClassificationJobCommandInput}
 * @returns {@link CreateClassificationJobCommandOutput}
 * @see {@link CreateClassificationJobCommandInput} for command's `input` shape.
 * @see {@link CreateClassificationJobCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Provides information about an error that occurred due to a versioning conflict for a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 *
 * @public
 */
export class CreateClassificationJobCommand extends $Command
  .classBuilder<
    CreateClassificationJobCommandInput,
    CreateClassificationJobCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Macie2", "CreateClassificationJob", {})
  .n("Macie2Client", "CreateClassificationJobCommand")
  .f(void 0, void 0)
  .ser(se_CreateClassificationJobCommand)
  .de(de_CreateClassificationJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateClassificationJobRequest;
      output: CreateClassificationJobResponse;
    };
    sdk: {
      input: CreateClassificationJobCommandInput;
      output: CreateClassificationJobCommandOutput;
    };
  };
}
