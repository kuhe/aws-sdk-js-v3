// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  SdkStreamMixinInjector as __SdkStreamMixinInjector,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultOmicsHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AbortMultipartReadSetUploadCommandInput,
  AbortMultipartReadSetUploadCommandOutput,
} from "./commands/AbortMultipartReadSetUploadCommand";
import { AcceptShareCommandInput, AcceptShareCommandOutput } from "./commands/AcceptShareCommand";
import { BatchDeleteReadSetCommandInput, BatchDeleteReadSetCommandOutput } from "./commands/BatchDeleteReadSetCommand";
import {
  CancelAnnotationImportJobCommandInput,
  CancelAnnotationImportJobCommandOutput,
} from "./commands/CancelAnnotationImportJobCommand";
import { CancelRunCommandInput, CancelRunCommandOutput } from "./commands/CancelRunCommand";
import {
  CancelVariantImportJobCommandInput,
  CancelVariantImportJobCommandOutput,
} from "./commands/CancelVariantImportJobCommand";
import {
  CompleteMultipartReadSetUploadCommandInput,
  CompleteMultipartReadSetUploadCommandOutput,
} from "./commands/CompleteMultipartReadSetUploadCommand";
import {
  CreateAnnotationStoreCommandInput,
  CreateAnnotationStoreCommandOutput,
} from "./commands/CreateAnnotationStoreCommand";
import {
  CreateAnnotationStoreVersionCommandInput,
  CreateAnnotationStoreVersionCommandOutput,
} from "./commands/CreateAnnotationStoreVersionCommand";
import {
  CreateMultipartReadSetUploadCommandInput,
  CreateMultipartReadSetUploadCommandOutput,
} from "./commands/CreateMultipartReadSetUploadCommand";
import {
  CreateReferenceStoreCommandInput,
  CreateReferenceStoreCommandOutput,
} from "./commands/CreateReferenceStoreCommand";
import { CreateRunCacheCommandInput, CreateRunCacheCommandOutput } from "./commands/CreateRunCacheCommand";
import { CreateRunGroupCommandInput, CreateRunGroupCommandOutput } from "./commands/CreateRunGroupCommand";
import {
  CreateSequenceStoreCommandInput,
  CreateSequenceStoreCommandOutput,
} from "./commands/CreateSequenceStoreCommand";
import { CreateShareCommandInput, CreateShareCommandOutput } from "./commands/CreateShareCommand";
import { CreateVariantStoreCommandInput, CreateVariantStoreCommandOutput } from "./commands/CreateVariantStoreCommand";
import { CreateWorkflowCommandInput, CreateWorkflowCommandOutput } from "./commands/CreateWorkflowCommand";
import {
  CreateWorkflowVersionCommandInput,
  CreateWorkflowVersionCommandOutput,
} from "./commands/CreateWorkflowVersionCommand";
import {
  DeleteAnnotationStoreCommandInput,
  DeleteAnnotationStoreCommandOutput,
} from "./commands/DeleteAnnotationStoreCommand";
import {
  DeleteAnnotationStoreVersionsCommandInput,
  DeleteAnnotationStoreVersionsCommandOutput,
} from "./commands/DeleteAnnotationStoreVersionsCommand";
import { DeleteReferenceCommandInput, DeleteReferenceCommandOutput } from "./commands/DeleteReferenceCommand";
import {
  DeleteReferenceStoreCommandInput,
  DeleteReferenceStoreCommandOutput,
} from "./commands/DeleteReferenceStoreCommand";
import { DeleteRunCacheCommandInput, DeleteRunCacheCommandOutput } from "./commands/DeleteRunCacheCommand";
import { DeleteRunCommandInput, DeleteRunCommandOutput } from "./commands/DeleteRunCommand";
import { DeleteRunGroupCommandInput, DeleteRunGroupCommandOutput } from "./commands/DeleteRunGroupCommand";
import {
  DeleteS3AccessPolicyCommandInput,
  DeleteS3AccessPolicyCommandOutput,
} from "./commands/DeleteS3AccessPolicyCommand";
import {
  DeleteSequenceStoreCommandInput,
  DeleteSequenceStoreCommandOutput,
} from "./commands/DeleteSequenceStoreCommand";
import { DeleteShareCommandInput, DeleteShareCommandOutput } from "./commands/DeleteShareCommand";
import { DeleteVariantStoreCommandInput, DeleteVariantStoreCommandOutput } from "./commands/DeleteVariantStoreCommand";
import { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "./commands/DeleteWorkflowCommand";
import {
  DeleteWorkflowVersionCommandInput,
  DeleteWorkflowVersionCommandOutput,
} from "./commands/DeleteWorkflowVersionCommand";
import {
  GetAnnotationImportJobCommandInput,
  GetAnnotationImportJobCommandOutput,
} from "./commands/GetAnnotationImportJobCommand";
import { GetAnnotationStoreCommandInput, GetAnnotationStoreCommandOutput } from "./commands/GetAnnotationStoreCommand";
import {
  GetAnnotationStoreVersionCommandInput,
  GetAnnotationStoreVersionCommandOutput,
} from "./commands/GetAnnotationStoreVersionCommand";
import {
  GetReadSetActivationJobCommandInput,
  GetReadSetActivationJobCommandOutput,
} from "./commands/GetReadSetActivationJobCommand";
import { GetReadSetCommandInput, GetReadSetCommandOutput } from "./commands/GetReadSetCommand";
import {
  GetReadSetExportJobCommandInput,
  GetReadSetExportJobCommandOutput,
} from "./commands/GetReadSetExportJobCommand";
import {
  GetReadSetImportJobCommandInput,
  GetReadSetImportJobCommandOutput,
} from "./commands/GetReadSetImportJobCommand";
import { GetReadSetMetadataCommandInput, GetReadSetMetadataCommandOutput } from "./commands/GetReadSetMetadataCommand";
import { GetReferenceCommandInput, GetReferenceCommandOutput } from "./commands/GetReferenceCommand";
import {
  GetReferenceImportJobCommandInput,
  GetReferenceImportJobCommandOutput,
} from "./commands/GetReferenceImportJobCommand";
import {
  GetReferenceMetadataCommandInput,
  GetReferenceMetadataCommandOutput,
} from "./commands/GetReferenceMetadataCommand";
import { GetReferenceStoreCommandInput, GetReferenceStoreCommandOutput } from "./commands/GetReferenceStoreCommand";
import { GetRunCacheCommandInput, GetRunCacheCommandOutput } from "./commands/GetRunCacheCommand";
import { GetRunCommandInput, GetRunCommandOutput } from "./commands/GetRunCommand";
import { GetRunGroupCommandInput, GetRunGroupCommandOutput } from "./commands/GetRunGroupCommand";
import { GetRunTaskCommandInput, GetRunTaskCommandOutput } from "./commands/GetRunTaskCommand";
import { GetS3AccessPolicyCommandInput, GetS3AccessPolicyCommandOutput } from "./commands/GetS3AccessPolicyCommand";
import { GetSequenceStoreCommandInput, GetSequenceStoreCommandOutput } from "./commands/GetSequenceStoreCommand";
import { GetShareCommandInput, GetShareCommandOutput } from "./commands/GetShareCommand";
import {
  GetVariantImportJobCommandInput,
  GetVariantImportJobCommandOutput,
} from "./commands/GetVariantImportJobCommand";
import { GetVariantStoreCommandInput, GetVariantStoreCommandOutput } from "./commands/GetVariantStoreCommand";
import { GetWorkflowCommandInput, GetWorkflowCommandOutput } from "./commands/GetWorkflowCommand";
import { GetWorkflowVersionCommandInput, GetWorkflowVersionCommandOutput } from "./commands/GetWorkflowVersionCommand";
import {
  ListAnnotationImportJobsCommandInput,
  ListAnnotationImportJobsCommandOutput,
} from "./commands/ListAnnotationImportJobsCommand";
import {
  ListAnnotationStoresCommandInput,
  ListAnnotationStoresCommandOutput,
} from "./commands/ListAnnotationStoresCommand";
import {
  ListAnnotationStoreVersionsCommandInput,
  ListAnnotationStoreVersionsCommandOutput,
} from "./commands/ListAnnotationStoreVersionsCommand";
import {
  ListMultipartReadSetUploadsCommandInput,
  ListMultipartReadSetUploadsCommandOutput,
} from "./commands/ListMultipartReadSetUploadsCommand";
import {
  ListReadSetActivationJobsCommandInput,
  ListReadSetActivationJobsCommandOutput,
} from "./commands/ListReadSetActivationJobsCommand";
import {
  ListReadSetExportJobsCommandInput,
  ListReadSetExportJobsCommandOutput,
} from "./commands/ListReadSetExportJobsCommand";
import {
  ListReadSetImportJobsCommandInput,
  ListReadSetImportJobsCommandOutput,
} from "./commands/ListReadSetImportJobsCommand";
import { ListReadSetsCommandInput, ListReadSetsCommandOutput } from "./commands/ListReadSetsCommand";
import {
  ListReadSetUploadPartsCommandInput,
  ListReadSetUploadPartsCommandOutput,
} from "./commands/ListReadSetUploadPartsCommand";
import {
  ListReferenceImportJobsCommandInput,
  ListReferenceImportJobsCommandOutput,
} from "./commands/ListReferenceImportJobsCommand";
import { ListReferencesCommandInput, ListReferencesCommandOutput } from "./commands/ListReferencesCommand";
import {
  ListReferenceStoresCommandInput,
  ListReferenceStoresCommandOutput,
} from "./commands/ListReferenceStoresCommand";
import { ListRunCachesCommandInput, ListRunCachesCommandOutput } from "./commands/ListRunCachesCommand";
import { ListRunGroupsCommandInput, ListRunGroupsCommandOutput } from "./commands/ListRunGroupsCommand";
import { ListRunsCommandInput, ListRunsCommandOutput } from "./commands/ListRunsCommand";
import { ListRunTasksCommandInput, ListRunTasksCommandOutput } from "./commands/ListRunTasksCommand";
import { ListSequenceStoresCommandInput, ListSequenceStoresCommandOutput } from "./commands/ListSequenceStoresCommand";
import { ListSharesCommandInput, ListSharesCommandOutput } from "./commands/ListSharesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVariantImportJobsCommandInput,
  ListVariantImportJobsCommandOutput,
} from "./commands/ListVariantImportJobsCommand";
import { ListVariantStoresCommandInput, ListVariantStoresCommandOutput } from "./commands/ListVariantStoresCommand";
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "./commands/ListWorkflowsCommand";
import {
  ListWorkflowVersionsCommandInput,
  ListWorkflowVersionsCommandOutput,
} from "./commands/ListWorkflowVersionsCommand";
import { PutS3AccessPolicyCommandInput, PutS3AccessPolicyCommandOutput } from "./commands/PutS3AccessPolicyCommand";
import {
  StartAnnotationImportJobCommandInput,
  StartAnnotationImportJobCommandOutput,
} from "./commands/StartAnnotationImportJobCommand";
import {
  StartReadSetActivationJobCommandInput,
  StartReadSetActivationJobCommandOutput,
} from "./commands/StartReadSetActivationJobCommand";
import {
  StartReadSetExportJobCommandInput,
  StartReadSetExportJobCommandOutput,
} from "./commands/StartReadSetExportJobCommand";
import {
  StartReadSetImportJobCommandInput,
  StartReadSetImportJobCommandOutput,
} from "./commands/StartReadSetImportJobCommand";
import {
  StartReferenceImportJobCommandInput,
  StartReferenceImportJobCommandOutput,
} from "./commands/StartReferenceImportJobCommand";
import { StartRunCommandInput, StartRunCommandOutput } from "./commands/StartRunCommand";
import {
  StartVariantImportJobCommandInput,
  StartVariantImportJobCommandOutput,
} from "./commands/StartVariantImportJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateAnnotationStoreCommandInput,
  UpdateAnnotationStoreCommandOutput,
} from "./commands/UpdateAnnotationStoreCommand";
import {
  UpdateAnnotationStoreVersionCommandInput,
  UpdateAnnotationStoreVersionCommandOutput,
} from "./commands/UpdateAnnotationStoreVersionCommand";
import { UpdateRunCacheCommandInput, UpdateRunCacheCommandOutput } from "./commands/UpdateRunCacheCommand";
import { UpdateRunGroupCommandInput, UpdateRunGroupCommandOutput } from "./commands/UpdateRunGroupCommand";
import {
  UpdateSequenceStoreCommandInput,
  UpdateSequenceStoreCommandOutput,
} from "./commands/UpdateSequenceStoreCommand";
import { UpdateVariantStoreCommandInput, UpdateVariantStoreCommandOutput } from "./commands/UpdateVariantStoreCommand";
import { UpdateWorkflowCommandInput, UpdateWorkflowCommandOutput } from "./commands/UpdateWorkflowCommand";
import {
  UpdateWorkflowVersionCommandInput,
  UpdateWorkflowVersionCommandOutput,
} from "./commands/UpdateWorkflowVersionCommand";
import { UploadReadSetPartCommandInput, UploadReadSetPartCommandOutput } from "./commands/UploadReadSetPartCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AbortMultipartReadSetUploadCommandInput
  | AcceptShareCommandInput
  | BatchDeleteReadSetCommandInput
  | CancelAnnotationImportJobCommandInput
  | CancelRunCommandInput
  | CancelVariantImportJobCommandInput
  | CompleteMultipartReadSetUploadCommandInput
  | CreateAnnotationStoreCommandInput
  | CreateAnnotationStoreVersionCommandInput
  | CreateMultipartReadSetUploadCommandInput
  | CreateReferenceStoreCommandInput
  | CreateRunCacheCommandInput
  | CreateRunGroupCommandInput
  | CreateSequenceStoreCommandInput
  | CreateShareCommandInput
  | CreateVariantStoreCommandInput
  | CreateWorkflowCommandInput
  | CreateWorkflowVersionCommandInput
  | DeleteAnnotationStoreCommandInput
  | DeleteAnnotationStoreVersionsCommandInput
  | DeleteReferenceCommandInput
  | DeleteReferenceStoreCommandInput
  | DeleteRunCacheCommandInput
  | DeleteRunCommandInput
  | DeleteRunGroupCommandInput
  | DeleteS3AccessPolicyCommandInput
  | DeleteSequenceStoreCommandInput
  | DeleteShareCommandInput
  | DeleteVariantStoreCommandInput
  | DeleteWorkflowCommandInput
  | DeleteWorkflowVersionCommandInput
  | GetAnnotationImportJobCommandInput
  | GetAnnotationStoreCommandInput
  | GetAnnotationStoreVersionCommandInput
  | GetReadSetActivationJobCommandInput
  | GetReadSetCommandInput
  | GetReadSetExportJobCommandInput
  | GetReadSetImportJobCommandInput
  | GetReadSetMetadataCommandInput
  | GetReferenceCommandInput
  | GetReferenceImportJobCommandInput
  | GetReferenceMetadataCommandInput
  | GetReferenceStoreCommandInput
  | GetRunCacheCommandInput
  | GetRunCommandInput
  | GetRunGroupCommandInput
  | GetRunTaskCommandInput
  | GetS3AccessPolicyCommandInput
  | GetSequenceStoreCommandInput
  | GetShareCommandInput
  | GetVariantImportJobCommandInput
  | GetVariantStoreCommandInput
  | GetWorkflowCommandInput
  | GetWorkflowVersionCommandInput
  | ListAnnotationImportJobsCommandInput
  | ListAnnotationStoreVersionsCommandInput
  | ListAnnotationStoresCommandInput
  | ListMultipartReadSetUploadsCommandInput
  | ListReadSetActivationJobsCommandInput
  | ListReadSetExportJobsCommandInput
  | ListReadSetImportJobsCommandInput
  | ListReadSetUploadPartsCommandInput
  | ListReadSetsCommandInput
  | ListReferenceImportJobsCommandInput
  | ListReferenceStoresCommandInput
  | ListReferencesCommandInput
  | ListRunCachesCommandInput
  | ListRunGroupsCommandInput
  | ListRunTasksCommandInput
  | ListRunsCommandInput
  | ListSequenceStoresCommandInput
  | ListSharesCommandInput
  | ListTagsForResourceCommandInput
  | ListVariantImportJobsCommandInput
  | ListVariantStoresCommandInput
  | ListWorkflowVersionsCommandInput
  | ListWorkflowsCommandInput
  | PutS3AccessPolicyCommandInput
  | StartAnnotationImportJobCommandInput
  | StartReadSetActivationJobCommandInput
  | StartReadSetExportJobCommandInput
  | StartReadSetImportJobCommandInput
  | StartReferenceImportJobCommandInput
  | StartRunCommandInput
  | StartVariantImportJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAnnotationStoreCommandInput
  | UpdateAnnotationStoreVersionCommandInput
  | UpdateRunCacheCommandInput
  | UpdateRunGroupCommandInput
  | UpdateSequenceStoreCommandInput
  | UpdateVariantStoreCommandInput
  | UpdateWorkflowCommandInput
  | UpdateWorkflowVersionCommandInput
  | UploadReadSetPartCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AbortMultipartReadSetUploadCommandOutput
  | AcceptShareCommandOutput
  | BatchDeleteReadSetCommandOutput
  | CancelAnnotationImportJobCommandOutput
  | CancelRunCommandOutput
  | CancelVariantImportJobCommandOutput
  | CompleteMultipartReadSetUploadCommandOutput
  | CreateAnnotationStoreCommandOutput
  | CreateAnnotationStoreVersionCommandOutput
  | CreateMultipartReadSetUploadCommandOutput
  | CreateReferenceStoreCommandOutput
  | CreateRunCacheCommandOutput
  | CreateRunGroupCommandOutput
  | CreateSequenceStoreCommandOutput
  | CreateShareCommandOutput
  | CreateVariantStoreCommandOutput
  | CreateWorkflowCommandOutput
  | CreateWorkflowVersionCommandOutput
  | DeleteAnnotationStoreCommandOutput
  | DeleteAnnotationStoreVersionsCommandOutput
  | DeleteReferenceCommandOutput
  | DeleteReferenceStoreCommandOutput
  | DeleteRunCacheCommandOutput
  | DeleteRunCommandOutput
  | DeleteRunGroupCommandOutput
  | DeleteS3AccessPolicyCommandOutput
  | DeleteSequenceStoreCommandOutput
  | DeleteShareCommandOutput
  | DeleteVariantStoreCommandOutput
  | DeleteWorkflowCommandOutput
  | DeleteWorkflowVersionCommandOutput
  | GetAnnotationImportJobCommandOutput
  | GetAnnotationStoreCommandOutput
  | GetAnnotationStoreVersionCommandOutput
  | GetReadSetActivationJobCommandOutput
  | GetReadSetCommandOutput
  | GetReadSetExportJobCommandOutput
  | GetReadSetImportJobCommandOutput
  | GetReadSetMetadataCommandOutput
  | GetReferenceCommandOutput
  | GetReferenceImportJobCommandOutput
  | GetReferenceMetadataCommandOutput
  | GetReferenceStoreCommandOutput
  | GetRunCacheCommandOutput
  | GetRunCommandOutput
  | GetRunGroupCommandOutput
  | GetRunTaskCommandOutput
  | GetS3AccessPolicyCommandOutput
  | GetSequenceStoreCommandOutput
  | GetShareCommandOutput
  | GetVariantImportJobCommandOutput
  | GetVariantStoreCommandOutput
  | GetWorkflowCommandOutput
  | GetWorkflowVersionCommandOutput
  | ListAnnotationImportJobsCommandOutput
  | ListAnnotationStoreVersionsCommandOutput
  | ListAnnotationStoresCommandOutput
  | ListMultipartReadSetUploadsCommandOutput
  | ListReadSetActivationJobsCommandOutput
  | ListReadSetExportJobsCommandOutput
  | ListReadSetImportJobsCommandOutput
  | ListReadSetUploadPartsCommandOutput
  | ListReadSetsCommandOutput
  | ListReferenceImportJobsCommandOutput
  | ListReferenceStoresCommandOutput
  | ListReferencesCommandOutput
  | ListRunCachesCommandOutput
  | ListRunGroupsCommandOutput
  | ListRunTasksCommandOutput
  | ListRunsCommandOutput
  | ListSequenceStoresCommandOutput
  | ListSharesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListVariantImportJobsCommandOutput
  | ListVariantStoresCommandOutput
  | ListWorkflowVersionsCommandOutput
  | ListWorkflowsCommandOutput
  | PutS3AccessPolicyCommandOutput
  | StartAnnotationImportJobCommandOutput
  | StartReadSetActivationJobCommandOutput
  | StartReadSetExportJobCommandOutput
  | StartReadSetImportJobCommandOutput
  | StartReferenceImportJobCommandOutput
  | StartRunCommandOutput
  | StartVariantImportJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAnnotationStoreCommandOutput
  | UpdateAnnotationStoreVersionCommandOutput
  | UpdateRunCacheCommandOutput
  | UpdateRunGroupCommandOutput
  | UpdateSequenceStoreCommandOutput
  | UpdateVariantStoreCommandOutput
  | UpdateWorkflowCommandOutput
  | UpdateWorkflowVersionCommandOutput
  | UploadReadSetPartCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;

  /**
   * The internal function that inject utilities to runtime-specific stream to help users consume the data
   * @internal
   */
  sdkStreamMixin?: __SdkStreamMixinInjector;
}

/**
 * @public
 */
export type OmicsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of OmicsClient class constructor that set the region, credentials and other options.
 */
export interface OmicsClientConfig extends OmicsClientConfigType {}

/**
 * @public
 */
export type OmicsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of OmicsClient class. This is resolved and normalized from the {@link OmicsClientConfig | constructor configuration interface}.
 */
export interface OmicsClientResolvedConfig extends OmicsClientResolvedConfigType {}

/**
 * <p>Amazon Web Services HealthOmics is a service that helps users such as bioinformaticians, researchers, and scientists to store, query, analyze, and generate insights from genomics and other biological data. It simplifies and accelerates the process of storing and analyzing genomic information for Amazon Web Services.</p> <p>For an introduction to the service, see <a href="https://docs.aws.amazon.com/omics/latest/dev/what-is-healthomics.html">What is Amazon Web Services HealthOmics?</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
 * @public
 */
export class OmicsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  OmicsClientResolvedConfig
> {
  /**
   * The resolved configuration of OmicsClient class. This is resolved and normalized from the {@link OmicsClientConfig | constructor configuration interface}.
   */
  readonly config: OmicsClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<OmicsClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultOmicsHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: OmicsClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
