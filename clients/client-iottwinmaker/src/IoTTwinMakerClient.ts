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
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultIoTTwinMakerHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  BatchPutPropertyValuesCommandInput,
  BatchPutPropertyValuesCommandOutput,
} from "./commands/BatchPutPropertyValuesCommand";
import {
  CancelMetadataTransferJobCommandInput,
  CancelMetadataTransferJobCommandOutput,
} from "./commands/CancelMetadataTransferJobCommand";
import {
  CreateComponentTypeCommandInput,
  CreateComponentTypeCommandOutput,
} from "./commands/CreateComponentTypeCommand";
import { CreateEntityCommandInput, CreateEntityCommandOutput } from "./commands/CreateEntityCommand";
import {
  CreateMetadataTransferJobCommandInput,
  CreateMetadataTransferJobCommandOutput,
} from "./commands/CreateMetadataTransferJobCommand";
import { CreateSceneCommandInput, CreateSceneCommandOutput } from "./commands/CreateSceneCommand";
import { CreateSyncJobCommandInput, CreateSyncJobCommandOutput } from "./commands/CreateSyncJobCommand";
import { CreateWorkspaceCommandInput, CreateWorkspaceCommandOutput } from "./commands/CreateWorkspaceCommand";
import {
  DeleteComponentTypeCommandInput,
  DeleteComponentTypeCommandOutput,
} from "./commands/DeleteComponentTypeCommand";
import { DeleteEntityCommandInput, DeleteEntityCommandOutput } from "./commands/DeleteEntityCommand";
import { DeleteSceneCommandInput, DeleteSceneCommandOutput } from "./commands/DeleteSceneCommand";
import { DeleteSyncJobCommandInput, DeleteSyncJobCommandOutput } from "./commands/DeleteSyncJobCommand";
import { DeleteWorkspaceCommandInput, DeleteWorkspaceCommandOutput } from "./commands/DeleteWorkspaceCommand";
import { ExecuteQueryCommandInput, ExecuteQueryCommandOutput } from "./commands/ExecuteQueryCommand";
import { GetComponentTypeCommandInput, GetComponentTypeCommandOutput } from "./commands/GetComponentTypeCommand";
import { GetEntityCommandInput, GetEntityCommandOutput } from "./commands/GetEntityCommand";
import {
  GetMetadataTransferJobCommandInput,
  GetMetadataTransferJobCommandOutput,
} from "./commands/GetMetadataTransferJobCommand";
import { GetPricingPlanCommandInput, GetPricingPlanCommandOutput } from "./commands/GetPricingPlanCommand";
import { GetPropertyValueCommandInput, GetPropertyValueCommandOutput } from "./commands/GetPropertyValueCommand";
import {
  GetPropertyValueHistoryCommandInput,
  GetPropertyValueHistoryCommandOutput,
} from "./commands/GetPropertyValueHistoryCommand";
import { GetSceneCommandInput, GetSceneCommandOutput } from "./commands/GetSceneCommand";
import { GetSyncJobCommandInput, GetSyncJobCommandOutput } from "./commands/GetSyncJobCommand";
import { GetWorkspaceCommandInput, GetWorkspaceCommandOutput } from "./commands/GetWorkspaceCommand";
import { ListComponentsCommandInput, ListComponentsCommandOutput } from "./commands/ListComponentsCommand";
import { ListComponentTypesCommandInput, ListComponentTypesCommandOutput } from "./commands/ListComponentTypesCommand";
import { ListEntitiesCommandInput, ListEntitiesCommandOutput } from "./commands/ListEntitiesCommand";
import {
  ListMetadataTransferJobsCommandInput,
  ListMetadataTransferJobsCommandOutput,
} from "./commands/ListMetadataTransferJobsCommand";
import { ListPropertiesCommandInput, ListPropertiesCommandOutput } from "./commands/ListPropertiesCommand";
import { ListScenesCommandInput, ListScenesCommandOutput } from "./commands/ListScenesCommand";
import { ListSyncJobsCommandInput, ListSyncJobsCommandOutput } from "./commands/ListSyncJobsCommand";
import { ListSyncResourcesCommandInput, ListSyncResourcesCommandOutput } from "./commands/ListSyncResourcesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListWorkspacesCommandInput, ListWorkspacesCommandOutput } from "./commands/ListWorkspacesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateComponentTypeCommandInput,
  UpdateComponentTypeCommandOutput,
} from "./commands/UpdateComponentTypeCommand";
import { UpdateEntityCommandInput, UpdateEntityCommandOutput } from "./commands/UpdateEntityCommand";
import { UpdatePricingPlanCommandInput, UpdatePricingPlanCommandOutput } from "./commands/UpdatePricingPlanCommand";
import { UpdateSceneCommandInput, UpdateSceneCommandOutput } from "./commands/UpdateSceneCommand";
import { UpdateWorkspaceCommandInput, UpdateWorkspaceCommandOutput } from "./commands/UpdateWorkspaceCommand";
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
  | BatchPutPropertyValuesCommandInput
  | CancelMetadataTransferJobCommandInput
  | CreateComponentTypeCommandInput
  | CreateEntityCommandInput
  | CreateMetadataTransferJobCommandInput
  | CreateSceneCommandInput
  | CreateSyncJobCommandInput
  | CreateWorkspaceCommandInput
  | DeleteComponentTypeCommandInput
  | DeleteEntityCommandInput
  | DeleteSceneCommandInput
  | DeleteSyncJobCommandInput
  | DeleteWorkspaceCommandInput
  | ExecuteQueryCommandInput
  | GetComponentTypeCommandInput
  | GetEntityCommandInput
  | GetMetadataTransferJobCommandInput
  | GetPricingPlanCommandInput
  | GetPropertyValueCommandInput
  | GetPropertyValueHistoryCommandInput
  | GetSceneCommandInput
  | GetSyncJobCommandInput
  | GetWorkspaceCommandInput
  | ListComponentTypesCommandInput
  | ListComponentsCommandInput
  | ListEntitiesCommandInput
  | ListMetadataTransferJobsCommandInput
  | ListPropertiesCommandInput
  | ListScenesCommandInput
  | ListSyncJobsCommandInput
  | ListSyncResourcesCommandInput
  | ListTagsForResourceCommandInput
  | ListWorkspacesCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateComponentTypeCommandInput
  | UpdateEntityCommandInput
  | UpdatePricingPlanCommandInput
  | UpdateSceneCommandInput
  | UpdateWorkspaceCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchPutPropertyValuesCommandOutput
  | CancelMetadataTransferJobCommandOutput
  | CreateComponentTypeCommandOutput
  | CreateEntityCommandOutput
  | CreateMetadataTransferJobCommandOutput
  | CreateSceneCommandOutput
  | CreateSyncJobCommandOutput
  | CreateWorkspaceCommandOutput
  | DeleteComponentTypeCommandOutput
  | DeleteEntityCommandOutput
  | DeleteSceneCommandOutput
  | DeleteSyncJobCommandOutput
  | DeleteWorkspaceCommandOutput
  | ExecuteQueryCommandOutput
  | GetComponentTypeCommandOutput
  | GetEntityCommandOutput
  | GetMetadataTransferJobCommandOutput
  | GetPricingPlanCommandOutput
  | GetPropertyValueCommandOutput
  | GetPropertyValueHistoryCommandOutput
  | GetSceneCommandOutput
  | GetSyncJobCommandOutput
  | GetWorkspaceCommandOutput
  | ListComponentTypesCommandOutput
  | ListComponentsCommandOutput
  | ListEntitiesCommandOutput
  | ListMetadataTransferJobsCommandOutput
  | ListPropertiesCommandOutput
  | ListScenesCommandOutput
  | ListSyncJobsCommandOutput
  | ListSyncResourcesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWorkspacesCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateComponentTypeCommandOutput
  | UpdateEntityCommandOutput
  | UpdatePricingPlanCommandOutput
  | UpdateSceneCommandOutput
  | UpdateWorkspaceCommandOutput;

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
}

/**
 * @public
 */
export type IoTTwinMakerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of IoTTwinMakerClient class constructor that set the region, credentials and other options.
 */
export interface IoTTwinMakerClientConfig extends IoTTwinMakerClientConfigType {}

/**
 * @public
 */
export type IoTTwinMakerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of IoTTwinMakerClient class. This is resolved and normalized from the {@link IoTTwinMakerClientConfig | constructor configuration interface}.
 */
export interface IoTTwinMakerClientResolvedConfig extends IoTTwinMakerClientResolvedConfigType {}

/**
 * <p>IoT TwinMaker is a service with which you can
 *          build operational digital twins of physical systems. IoT TwinMaker overlays measurements
 *          and analysis from real-world sensors, cameras, and enterprise applications so you can
 *          create data visualizations to monitor your physical factory, building, or industrial plant.
 *          You can use this real-world data to monitor operations and diagnose and repair
 *          errors.</p>
 * @public
 */
export class IoTTwinMakerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IoTTwinMakerClientResolvedConfig
> {
  /**
   * The resolved configuration of IoTTwinMakerClient class. This is resolved and normalized from the {@link IoTTwinMakerClientConfig | constructor configuration interface}.
   */
  readonly config: IoTTwinMakerClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<IoTTwinMakerClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultIoTTwinMakerHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: IoTTwinMakerClientResolvedConfig) =>
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
