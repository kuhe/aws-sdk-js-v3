// smithy-typescript generated code
import { getFlexibleChecksumsPlugin } from "@aws-sdk/middleware-flexible-checksums";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutBucketLoggingRequest } from "../models/models_1";
import { de_PutBucketLoggingCommand, se_PutBucketLoggingCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutBucketLoggingCommand}.
 */
export interface PutBucketLoggingCommandInput extends PutBucketLoggingRequest {}
/**
 * @public
 *
 * The output of {@link PutBucketLoggingCommand}.
 */
export interface PutBucketLoggingCommandOutput extends __MetadataBearer {}

/**
 * <important>
 *             <p>End of support notice: Beginning October 1, 2025, Amazon S3 will discontinue support for creating new Email Grantee Access Control Lists (ACL).
 *  Email Grantee ACLs created prior to this date will continue to work and remain accessible through the Amazon Web Services Management Console, Command Line Interface (CLI), SDKs,
 *  and REST API. However, you will no longer be able to create new Email Grantee ACLs.
 * </p>
 *             <p>This change affects the following Amazon Web Services Regions: US East (N. Virginia) Region, US West (N. California) Region, US West (Oregon) Region, Asia Pacific (Singapore) Region, Asia Pacific (Sydney) Region,
 *  Asia Pacific (Tokyo) Region, Europe (Ireland) Region, and South America (São Paulo) Region.</p>
 *          </important>
 *          <note>
 *             <p>This operation is not supported for directory buckets.</p>
 *          </note>
 *          <p>Set the logging parameters for a bucket and to specify permissions for who can view and modify the
 *       logging parameters. All logs are saved to buckets in the same Amazon Web Services Region as the source bucket. To set
 *       the logging status of a bucket, you must be the bucket owner.</p>
 *          <p>The bucket owner is automatically granted FULL_CONTROL to all logs. You use the <code>Grantee</code>
 *       request element to grant access to other people. The <code>Permissions</code> request element specifies
 *       the kind of access the grantee has to the logs.</p>
 *          <important>
 *             <p>If the target bucket for log delivery uses the bucket owner enforced setting for S3 Object
 *         Ownership, you can't use the <code>Grantee</code> request element to grant access to others.
 *         Permissions can only be granted using policies. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-server-access-logging.html#grant-log-delivery-permissions-general">Permissions for server access log delivery</a> in the
 *         <i>Amazon S3 User Guide</i>.</p>
 *          </important>
 *          <dl>
 *             <dt>Grantee Values</dt>
 *             <dd>
 *                <p>You can specify the person (grantee) to whom you're assigning access rights (by using request
 *             elements) in the following ways. For examples of how to specify these grantee values in JSON
 *             format, see the Amazon Web Services CLI example in <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-server-access-logging.html"> Enabling Amazon S3 server
 *               access logging</a> in the <i>Amazon S3 User Guide</i>.</p>
 *                <ul>
 *                   <li>
 *                      <p>By the person's ID:</p>
 *                      <p>
 *                         <code><Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 *                   xsi:type="CanonicalUser"><ID><>ID<></ID><DisplayName><>GranteesEmail<></DisplayName>
 *                   </Grantee></code>
 *                      </p>
 *                      <p>
 *                         <code>DisplayName</code> is optional and ignored in the request.</p>
 *                   </li>
 *                   <li>
 *                      <p>By Email address:</p>
 *                      <p>
 *                         <code> <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 *                   xsi:type="AmazonCustomerByEmail"><EmailAddress><>Grantees@email.com<></EmailAddress></Grantee></code>
 *                      </p>
 *                      <p>The grantee is resolved to the <code>CanonicalUser</code> and, in a response to a
 *                   <code>GETObjectAcl</code> request, appears as the CanonicalUser.</p>
 *                   </li>
 *                   <li>
 *                      <p>By URI:</p>
 *                      <p>
 *                         <code><Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 *                   xsi:type="Group"><URI><>http://acs.amazonaws.com/groups/global/AuthenticatedUsers<></URI></Grantee></code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </dd>
 *          </dl>
 *          <p>To enable logging, you use <code>LoggingEnabled</code> and its children request elements. To disable
 *       logging, you use an empty <code>BucketLoggingStatus</code> request element:</p>
 *          <p>
 *             <code><BucketLoggingStatus xmlns="http://doc.s3.amazonaws.com/2006-03-01" /></code>
 *          </p>
 *          <p>For more information about server access logging, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerLogs.html">Server Access Logging</a> in the
 *         <i>Amazon S3 User Guide</i>. </p>
 *          <p>For more information about creating a bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>. For more information about
 *       returning the logging status of a bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLogging.html">GetBucketLogging</a>.</p>
 *          <p>The following operations are related to <code>PutBucketLogging</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html">DeleteBucket</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLogging.html">GetBucketLogging</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketLoggingCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketLoggingCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // PutBucketLoggingRequest
 *   Bucket: "STRING_VALUE", // required
 *   BucketLoggingStatus: { // BucketLoggingStatus
 *     LoggingEnabled: { // LoggingEnabled
 *       TargetBucket: "STRING_VALUE", // required
 *       TargetGrants: [ // TargetGrants
 *         { // TargetGrant
 *           Grantee: { // Grantee
 *             DisplayName: "STRING_VALUE",
 *             EmailAddress: "STRING_VALUE",
 *             ID: "STRING_VALUE",
 *             URI: "STRING_VALUE",
 *             Type: "CanonicalUser" || "AmazonCustomerByEmail" || "Group", // required
 *           },
 *           Permission: "FULL_CONTROL" || "READ" || "WRITE",
 *         },
 *       ],
 *       TargetPrefix: "STRING_VALUE", // required
 *       TargetObjectKeyFormat: { // TargetObjectKeyFormat
 *         SimplePrefix: {},
 *         PartitionedPrefix: { // PartitionedPrefix
 *           PartitionDateSource: "EventTime" || "DeliveryTime",
 *         },
 *       },
 *     },
 *   },
 *   ContentMD5: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256" || "CRC64NVME",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new PutBucketLoggingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBucketLoggingCommandInput - {@link PutBucketLoggingCommandInput}
 * @returns {@link PutBucketLoggingCommandOutput}
 * @see {@link PutBucketLoggingCommandInput} for command's `input` shape.
 * @see {@link PutBucketLoggingCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @example Set logging configuration for a bucket
 * ```javascript
 * // The following example sets logging policy on a bucket. For the Log Delivery group to deliver logs to the destination bucket, it needs permission for the READ_ACP action which the policy grants.
 * const input = {
 *   Bucket: "sourcebucket",
 *   BucketLoggingStatus: {
 *     LoggingEnabled: {
 *       TargetBucket: "targetbucket",
 *       TargetGrants: [
 *         {
 *           Grantee: {
 *             Type: "Group",
 *             URI: "http://acs.amazonaws.com/groups/global/AllUsers"
 *           },
 *           Permission: "READ"
 *         }
 *       ],
 *       TargetPrefix: "MyBucketLogs/"
 *     }
 *   }
 * };
 * const command = new PutBucketLoggingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class PutBucketLoggingCommand extends $Command
  .classBuilder<
    PutBucketLoggingCommandInput,
    PutBucketLoggingCommandOutput,
    S3ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getFlexibleChecksumsPlugin(config, {
        requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
        requestChecksumRequired: true,
      }),
    ];
  })
  .s("AmazonS3", "PutBucketLogging", {})
  .n("S3Client", "PutBucketLoggingCommand")
  .f(void 0, void 0)
  .ser(se_PutBucketLoggingCommand)
  .de(de_PutBucketLoggingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutBucketLoggingRequest;
      output: {};
    };
    sdk: {
      input: PutBucketLoggingCommandInput;
      output: PutBucketLoggingCommandOutput;
    };
  };
}
