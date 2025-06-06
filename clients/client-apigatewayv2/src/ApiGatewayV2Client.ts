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
  defaultApiGatewayV2HttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { CreateApiCommandInput, CreateApiCommandOutput } from "./commands/CreateApiCommand";
import { CreateApiMappingCommandInput, CreateApiMappingCommandOutput } from "./commands/CreateApiMappingCommand";
import { CreateAuthorizerCommandInput, CreateAuthorizerCommandOutput } from "./commands/CreateAuthorizerCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "./commands/CreateDeploymentCommand";
import { CreateDomainNameCommandInput, CreateDomainNameCommandOutput } from "./commands/CreateDomainNameCommand";
import { CreateIntegrationCommandInput, CreateIntegrationCommandOutput } from "./commands/CreateIntegrationCommand";
import {
  CreateIntegrationResponseCommandInput,
  CreateIntegrationResponseCommandOutput,
} from "./commands/CreateIntegrationResponseCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import { CreateRouteCommandInput, CreateRouteCommandOutput } from "./commands/CreateRouteCommand";
import {
  CreateRouteResponseCommandInput,
  CreateRouteResponseCommandOutput,
} from "./commands/CreateRouteResponseCommand";
import { CreateRoutingRuleCommandInput, CreateRoutingRuleCommandOutput } from "./commands/CreateRoutingRuleCommand";
import { CreateStageCommandInput, CreateStageCommandOutput } from "./commands/CreateStageCommand";
import { CreateVpcLinkCommandInput, CreateVpcLinkCommandOutput } from "./commands/CreateVpcLinkCommand";
import {
  DeleteAccessLogSettingsCommandInput,
  DeleteAccessLogSettingsCommandOutput,
} from "./commands/DeleteAccessLogSettingsCommand";
import { DeleteApiCommandInput, DeleteApiCommandOutput } from "./commands/DeleteApiCommand";
import { DeleteApiMappingCommandInput, DeleteApiMappingCommandOutput } from "./commands/DeleteApiMappingCommand";
import { DeleteAuthorizerCommandInput, DeleteAuthorizerCommandOutput } from "./commands/DeleteAuthorizerCommand";
import {
  DeleteCorsConfigurationCommandInput,
  DeleteCorsConfigurationCommandOutput,
} from "./commands/DeleteCorsConfigurationCommand";
import { DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput } from "./commands/DeleteDeploymentCommand";
import { DeleteDomainNameCommandInput, DeleteDomainNameCommandOutput } from "./commands/DeleteDomainNameCommand";
import { DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput } from "./commands/DeleteIntegrationCommand";
import {
  DeleteIntegrationResponseCommandInput,
  DeleteIntegrationResponseCommandOutput,
} from "./commands/DeleteIntegrationResponseCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import { DeleteRouteCommandInput, DeleteRouteCommandOutput } from "./commands/DeleteRouteCommand";
import {
  DeleteRouteRequestParameterCommandInput,
  DeleteRouteRequestParameterCommandOutput,
} from "./commands/DeleteRouteRequestParameterCommand";
import {
  DeleteRouteResponseCommandInput,
  DeleteRouteResponseCommandOutput,
} from "./commands/DeleteRouteResponseCommand";
import {
  DeleteRouteSettingsCommandInput,
  DeleteRouteSettingsCommandOutput,
} from "./commands/DeleteRouteSettingsCommand";
import { DeleteRoutingRuleCommandInput, DeleteRoutingRuleCommandOutput } from "./commands/DeleteRoutingRuleCommand";
import { DeleteStageCommandInput, DeleteStageCommandOutput } from "./commands/DeleteStageCommand";
import { DeleteVpcLinkCommandInput, DeleteVpcLinkCommandOutput } from "./commands/DeleteVpcLinkCommand";
import { ExportApiCommandInput, ExportApiCommandOutput } from "./commands/ExportApiCommand";
import { GetApiCommandInput, GetApiCommandOutput } from "./commands/GetApiCommand";
import { GetApiMappingCommandInput, GetApiMappingCommandOutput } from "./commands/GetApiMappingCommand";
import { GetApiMappingsCommandInput, GetApiMappingsCommandOutput } from "./commands/GetApiMappingsCommand";
import { GetApisCommandInput, GetApisCommandOutput } from "./commands/GetApisCommand";
import { GetAuthorizerCommandInput, GetAuthorizerCommandOutput } from "./commands/GetAuthorizerCommand";
import { GetAuthorizersCommandInput, GetAuthorizersCommandOutput } from "./commands/GetAuthorizersCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "./commands/GetDeploymentCommand";
import { GetDeploymentsCommandInput, GetDeploymentsCommandOutput } from "./commands/GetDeploymentsCommand";
import { GetDomainNameCommandInput, GetDomainNameCommandOutput } from "./commands/GetDomainNameCommand";
import { GetDomainNamesCommandInput, GetDomainNamesCommandOutput } from "./commands/GetDomainNamesCommand";
import { GetIntegrationCommandInput, GetIntegrationCommandOutput } from "./commands/GetIntegrationCommand";
import {
  GetIntegrationResponseCommandInput,
  GetIntegrationResponseCommandOutput,
} from "./commands/GetIntegrationResponseCommand";
import {
  GetIntegrationResponsesCommandInput,
  GetIntegrationResponsesCommandOutput,
} from "./commands/GetIntegrationResponsesCommand";
import { GetIntegrationsCommandInput, GetIntegrationsCommandOutput } from "./commands/GetIntegrationsCommand";
import { GetModelCommandInput, GetModelCommandOutput } from "./commands/GetModelCommand";
import { GetModelsCommandInput, GetModelsCommandOutput } from "./commands/GetModelsCommand";
import { GetModelTemplateCommandInput, GetModelTemplateCommandOutput } from "./commands/GetModelTemplateCommand";
import { GetRouteCommandInput, GetRouteCommandOutput } from "./commands/GetRouteCommand";
import { GetRouteResponseCommandInput, GetRouteResponseCommandOutput } from "./commands/GetRouteResponseCommand";
import { GetRouteResponsesCommandInput, GetRouteResponsesCommandOutput } from "./commands/GetRouteResponsesCommand";
import { GetRoutesCommandInput, GetRoutesCommandOutput } from "./commands/GetRoutesCommand";
import { GetRoutingRuleCommandInput, GetRoutingRuleCommandOutput } from "./commands/GetRoutingRuleCommand";
import { GetStageCommandInput, GetStageCommandOutput } from "./commands/GetStageCommand";
import { GetStagesCommandInput, GetStagesCommandOutput } from "./commands/GetStagesCommand";
import { GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import { GetVpcLinkCommandInput, GetVpcLinkCommandOutput } from "./commands/GetVpcLinkCommand";
import { GetVpcLinksCommandInput, GetVpcLinksCommandOutput } from "./commands/GetVpcLinksCommand";
import { ImportApiCommandInput, ImportApiCommandOutput } from "./commands/ImportApiCommand";
import { ListRoutingRulesCommandInput, ListRoutingRulesCommandOutput } from "./commands/ListRoutingRulesCommand";
import { PutRoutingRuleCommandInput, PutRoutingRuleCommandOutput } from "./commands/PutRoutingRuleCommand";
import { ReimportApiCommandInput, ReimportApiCommandOutput } from "./commands/ReimportApiCommand";
import {
  ResetAuthorizersCacheCommandInput,
  ResetAuthorizersCacheCommandOutput,
} from "./commands/ResetAuthorizersCacheCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateApiCommandInput, UpdateApiCommandOutput } from "./commands/UpdateApiCommand";
import { UpdateApiMappingCommandInput, UpdateApiMappingCommandOutput } from "./commands/UpdateApiMappingCommand";
import { UpdateAuthorizerCommandInput, UpdateAuthorizerCommandOutput } from "./commands/UpdateAuthorizerCommand";
import { UpdateDeploymentCommandInput, UpdateDeploymentCommandOutput } from "./commands/UpdateDeploymentCommand";
import { UpdateDomainNameCommandInput, UpdateDomainNameCommandOutput } from "./commands/UpdateDomainNameCommand";
import { UpdateIntegrationCommandInput, UpdateIntegrationCommandOutput } from "./commands/UpdateIntegrationCommand";
import {
  UpdateIntegrationResponseCommandInput,
  UpdateIntegrationResponseCommandOutput,
} from "./commands/UpdateIntegrationResponseCommand";
import { UpdateModelCommandInput, UpdateModelCommandOutput } from "./commands/UpdateModelCommand";
import { UpdateRouteCommandInput, UpdateRouteCommandOutput } from "./commands/UpdateRouteCommand";
import {
  UpdateRouteResponseCommandInput,
  UpdateRouteResponseCommandOutput,
} from "./commands/UpdateRouteResponseCommand";
import { UpdateStageCommandInput, UpdateStageCommandOutput } from "./commands/UpdateStageCommand";
import { UpdateVpcLinkCommandInput, UpdateVpcLinkCommandOutput } from "./commands/UpdateVpcLinkCommand";
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
  | CreateApiCommandInput
  | CreateApiMappingCommandInput
  | CreateAuthorizerCommandInput
  | CreateDeploymentCommandInput
  | CreateDomainNameCommandInput
  | CreateIntegrationCommandInput
  | CreateIntegrationResponseCommandInput
  | CreateModelCommandInput
  | CreateRouteCommandInput
  | CreateRouteResponseCommandInput
  | CreateRoutingRuleCommandInput
  | CreateStageCommandInput
  | CreateVpcLinkCommandInput
  | DeleteAccessLogSettingsCommandInput
  | DeleteApiCommandInput
  | DeleteApiMappingCommandInput
  | DeleteAuthorizerCommandInput
  | DeleteCorsConfigurationCommandInput
  | DeleteDeploymentCommandInput
  | DeleteDomainNameCommandInput
  | DeleteIntegrationCommandInput
  | DeleteIntegrationResponseCommandInput
  | DeleteModelCommandInput
  | DeleteRouteCommandInput
  | DeleteRouteRequestParameterCommandInput
  | DeleteRouteResponseCommandInput
  | DeleteRouteSettingsCommandInput
  | DeleteRoutingRuleCommandInput
  | DeleteStageCommandInput
  | DeleteVpcLinkCommandInput
  | ExportApiCommandInput
  | GetApiCommandInput
  | GetApiMappingCommandInput
  | GetApiMappingsCommandInput
  | GetApisCommandInput
  | GetAuthorizerCommandInput
  | GetAuthorizersCommandInput
  | GetDeploymentCommandInput
  | GetDeploymentsCommandInput
  | GetDomainNameCommandInput
  | GetDomainNamesCommandInput
  | GetIntegrationCommandInput
  | GetIntegrationResponseCommandInput
  | GetIntegrationResponsesCommandInput
  | GetIntegrationsCommandInput
  | GetModelCommandInput
  | GetModelTemplateCommandInput
  | GetModelsCommandInput
  | GetRouteCommandInput
  | GetRouteResponseCommandInput
  | GetRouteResponsesCommandInput
  | GetRoutesCommandInput
  | GetRoutingRuleCommandInput
  | GetStageCommandInput
  | GetStagesCommandInput
  | GetTagsCommandInput
  | GetVpcLinkCommandInput
  | GetVpcLinksCommandInput
  | ImportApiCommandInput
  | ListRoutingRulesCommandInput
  | PutRoutingRuleCommandInput
  | ReimportApiCommandInput
  | ResetAuthorizersCacheCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateApiCommandInput
  | UpdateApiMappingCommandInput
  | UpdateAuthorizerCommandInput
  | UpdateDeploymentCommandInput
  | UpdateDomainNameCommandInput
  | UpdateIntegrationCommandInput
  | UpdateIntegrationResponseCommandInput
  | UpdateModelCommandInput
  | UpdateRouteCommandInput
  | UpdateRouteResponseCommandInput
  | UpdateStageCommandInput
  | UpdateVpcLinkCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateApiCommandOutput
  | CreateApiMappingCommandOutput
  | CreateAuthorizerCommandOutput
  | CreateDeploymentCommandOutput
  | CreateDomainNameCommandOutput
  | CreateIntegrationCommandOutput
  | CreateIntegrationResponseCommandOutput
  | CreateModelCommandOutput
  | CreateRouteCommandOutput
  | CreateRouteResponseCommandOutput
  | CreateRoutingRuleCommandOutput
  | CreateStageCommandOutput
  | CreateVpcLinkCommandOutput
  | DeleteAccessLogSettingsCommandOutput
  | DeleteApiCommandOutput
  | DeleteApiMappingCommandOutput
  | DeleteAuthorizerCommandOutput
  | DeleteCorsConfigurationCommandOutput
  | DeleteDeploymentCommandOutput
  | DeleteDomainNameCommandOutput
  | DeleteIntegrationCommandOutput
  | DeleteIntegrationResponseCommandOutput
  | DeleteModelCommandOutput
  | DeleteRouteCommandOutput
  | DeleteRouteRequestParameterCommandOutput
  | DeleteRouteResponseCommandOutput
  | DeleteRouteSettingsCommandOutput
  | DeleteRoutingRuleCommandOutput
  | DeleteStageCommandOutput
  | DeleteVpcLinkCommandOutput
  | ExportApiCommandOutput
  | GetApiCommandOutput
  | GetApiMappingCommandOutput
  | GetApiMappingsCommandOutput
  | GetApisCommandOutput
  | GetAuthorizerCommandOutput
  | GetAuthorizersCommandOutput
  | GetDeploymentCommandOutput
  | GetDeploymentsCommandOutput
  | GetDomainNameCommandOutput
  | GetDomainNamesCommandOutput
  | GetIntegrationCommandOutput
  | GetIntegrationResponseCommandOutput
  | GetIntegrationResponsesCommandOutput
  | GetIntegrationsCommandOutput
  | GetModelCommandOutput
  | GetModelTemplateCommandOutput
  | GetModelsCommandOutput
  | GetRouteCommandOutput
  | GetRouteResponseCommandOutput
  | GetRouteResponsesCommandOutput
  | GetRoutesCommandOutput
  | GetRoutingRuleCommandOutput
  | GetStageCommandOutput
  | GetStagesCommandOutput
  | GetTagsCommandOutput
  | GetVpcLinkCommandOutput
  | GetVpcLinksCommandOutput
  | ImportApiCommandOutput
  | ListRoutingRulesCommandOutput
  | PutRoutingRuleCommandOutput
  | ReimportApiCommandOutput
  | ResetAuthorizersCacheCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateApiCommandOutput
  | UpdateApiMappingCommandOutput
  | UpdateAuthorizerCommandOutput
  | UpdateDeploymentCommandOutput
  | UpdateDomainNameCommandOutput
  | UpdateIntegrationCommandOutput
  | UpdateIntegrationResponseCommandOutput
  | UpdateModelCommandOutput
  | UpdateRouteCommandOutput
  | UpdateRouteResponseCommandOutput
  | UpdateStageCommandOutput
  | UpdateVpcLinkCommandOutput;

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
export type ApiGatewayV2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ApiGatewayV2Client class constructor that set the region, credentials and other options.
 */
export interface ApiGatewayV2ClientConfig extends ApiGatewayV2ClientConfigType {}

/**
 * @public
 */
export type ApiGatewayV2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ApiGatewayV2Client class. This is resolved and normalized from the {@link ApiGatewayV2ClientConfig | constructor configuration interface}.
 */
export interface ApiGatewayV2ClientResolvedConfig extends ApiGatewayV2ClientResolvedConfigType {}

/**
 * <p>Amazon API Gateway V2</p>
 * @public
 */
export class ApiGatewayV2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ApiGatewayV2ClientResolvedConfig
> {
  /**
   * The resolved configuration of ApiGatewayV2Client class. This is resolved and normalized from the {@link ApiGatewayV2ClientConfig | constructor configuration interface}.
   */
  readonly config: ApiGatewayV2ClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ApiGatewayV2ClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultApiGatewayV2HttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ApiGatewayV2ClientResolvedConfig) =>
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
