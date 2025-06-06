// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeWorkspaceImagePermissionsRequest, DescribeWorkspaceImagePermissionsResult } from "../models/models_0";
import {
  de_DescribeWorkspaceImagePermissionsCommand,
  se_DescribeWorkspaceImagePermissionsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorkspaceImagePermissionsCommand}.
 */
export interface DescribeWorkspaceImagePermissionsCommandInput extends DescribeWorkspaceImagePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkspaceImagePermissionsCommand}.
 */
export interface DescribeWorkspaceImagePermissionsCommandOutput
  extends DescribeWorkspaceImagePermissionsResult,
    __MetadataBearer {}

/**
 * <p>Describes the permissions that the owner of an image has granted to other Amazon Web Services accounts for an image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspaceImagePermissionsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspaceImagePermissionsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeWorkspaceImagePermissionsRequest
 *   ImageId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeWorkspaceImagePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkspaceImagePermissionsResult
 * //   ImageId: "STRING_VALUE",
 * //   ImagePermissions: [ // ImagePermissions
 * //     { // ImagePermission
 * //       SharedAccountId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeWorkspaceImagePermissionsCommandInput - {@link DescribeWorkspaceImagePermissionsCommandInput}
 * @returns {@link DescribeWorkspaceImagePermissionsCommandOutput}
 * @see {@link DescribeWorkspaceImagePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceImagePermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class DescribeWorkspaceImagePermissionsCommand extends $Command
  .classBuilder<
    DescribeWorkspaceImagePermissionsCommandInput,
    DescribeWorkspaceImagePermissionsCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "DescribeWorkspaceImagePermissions", {})
  .n("WorkSpacesClient", "DescribeWorkspaceImagePermissionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeWorkspaceImagePermissionsCommand)
  .de(de_DescribeWorkspaceImagePermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWorkspaceImagePermissionsRequest;
      output: DescribeWorkspaceImagePermissionsResult;
    };
    sdk: {
      input: DescribeWorkspaceImagePermissionsCommandInput;
      output: DescribeWorkspaceImagePermissionsCommandOutput;
    };
  };
}
