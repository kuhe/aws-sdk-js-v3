// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVirtualServiceInput, CreateVirtualServiceOutput } from "../models/models_0";
import { de_CreateVirtualServiceCommand, se_CreateVirtualServiceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVirtualServiceCommand}.
 */
export interface CreateVirtualServiceCommandInput extends CreateVirtualServiceInput {}
/**
 * @public
 *
 * The output of {@link CreateVirtualServiceCommand}.
 */
export interface CreateVirtualServiceCommandOutput extends CreateVirtualServiceOutput, __MetadataBearer {}

/**
 * <p>Creates a virtual service within a service mesh.</p>
 *          <p>A virtual service is an abstraction of a real service that is provided by a virtual node
 *          directly or indirectly by means of a virtual router. Dependent services call your virtual
 *          service by its <code>virtualServiceName</code>, and those requests are routed to the
 *          virtual node or virtual router that is specified as the provider for the virtual
 *          service.</p>
 *          <p>For more information about virtual services, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html">Virtual services</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, CreateVirtualServiceCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, CreateVirtualServiceCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const input = { // CreateVirtualServiceInput
 *   virtualServiceName: "STRING_VALUE", // required
 *   meshName: "STRING_VALUE", // required
 *   spec: { // VirtualServiceSpec
 *     provider: { // VirtualServiceProvider Union: only one key present
 *       virtualNode: { // VirtualNodeServiceProvider
 *         virtualNodeName: "STRING_VALUE", // required
 *       },
 *       virtualRouter: { // VirtualRouterServiceProvider
 *         virtualRouterName: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   tags: [ // TagList
 *     { // TagRef
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 *   meshOwner: "STRING_VALUE",
 * };
 * const command = new CreateVirtualServiceCommand(input);
 * const response = await client.send(command);
 * // { // CreateVirtualServiceOutput
 * //   virtualService: { // VirtualServiceData
 * //     meshName: "STRING_VALUE", // required
 * //     virtualServiceName: "STRING_VALUE", // required
 * //     spec: { // VirtualServiceSpec
 * //       provider: { // VirtualServiceProvider Union: only one key present
 * //         virtualNode: { // VirtualNodeServiceProvider
 * //           virtualNodeName: "STRING_VALUE", // required
 * //         },
 * //         virtualRouter: { // VirtualRouterServiceProvider
 * //           virtualRouterName: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //     metadata: { // ResourceMetadata
 * //       arn: "STRING_VALUE", // required
 * //       version: Number("long"), // required
 * //       uid: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //       meshOwner: "STRING_VALUE", // required
 * //       resourceOwner: "STRING_VALUE", // required
 * //     },
 * //     status: { // VirtualServiceStatus
 * //       status: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateVirtualServiceCommandInput - {@link CreateVirtualServiceCommandInput}
 * @returns {@link CreateVirtualServiceCommandOutput}
 * @see {@link CreateVirtualServiceCommandInput} for command's `input` shape.
 * @see {@link CreateVirtualServiceCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for AppMeshClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request syntax was malformed. Check your request syntax and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request contains a client token that was used for a previous update resource call
 *          with different specifications. Try the request again with a new client token.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You don't have permissions to perform this action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have exceeded a service limit for your account. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/service-quotas.html">Service
 *             Limits</a> in the <i>App Mesh User Guide</i>.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed due to a temporary failure of the service.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for
 *          your account. For best results, use an increasing or variable sleep interval between
 *          requests.</p>
 *
 * @throws {@link AppMeshServiceException}
 * <p>Base exception class for all service exceptions from AppMesh service.</p>
 *
 *
 * @public
 */
export class CreateVirtualServiceCommand extends $Command
  .classBuilder<
    CreateVirtualServiceCommandInput,
    CreateVirtualServiceCommandOutput,
    AppMeshClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppMeshClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AppMesh", "CreateVirtualService", {})
  .n("AppMeshClient", "CreateVirtualServiceCommand")
  .f(void 0, void 0)
  .ser(se_CreateVirtualServiceCommand)
  .de(de_CreateVirtualServiceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVirtualServiceInput;
      output: CreateVirtualServiceOutput;
    };
    sdk: {
      input: CreateVirtualServiceCommandInput;
      output: CreateVirtualServiceCommandOutput;
    };
  };
}
