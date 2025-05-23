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
  defaultRolesAnywhereHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { CreateProfileCommandInput, CreateProfileCommandOutput } from "./commands/CreateProfileCommand";
import { CreateTrustAnchorCommandInput, CreateTrustAnchorCommandOutput } from "./commands/CreateTrustAnchorCommand";
import {
  DeleteAttributeMappingCommandInput,
  DeleteAttributeMappingCommandOutput,
} from "./commands/DeleteAttributeMappingCommand";
import { DeleteCrlCommandInput, DeleteCrlCommandOutput } from "./commands/DeleteCrlCommand";
import { DeleteProfileCommandInput, DeleteProfileCommandOutput } from "./commands/DeleteProfileCommand";
import { DeleteTrustAnchorCommandInput, DeleteTrustAnchorCommandOutput } from "./commands/DeleteTrustAnchorCommand";
import { DisableCrlCommandInput, DisableCrlCommandOutput } from "./commands/DisableCrlCommand";
import { DisableProfileCommandInput, DisableProfileCommandOutput } from "./commands/DisableProfileCommand";
import { DisableTrustAnchorCommandInput, DisableTrustAnchorCommandOutput } from "./commands/DisableTrustAnchorCommand";
import { EnableCrlCommandInput, EnableCrlCommandOutput } from "./commands/EnableCrlCommand";
import { EnableProfileCommandInput, EnableProfileCommandOutput } from "./commands/EnableProfileCommand";
import { EnableTrustAnchorCommandInput, EnableTrustAnchorCommandOutput } from "./commands/EnableTrustAnchorCommand";
import { GetCrlCommandInput, GetCrlCommandOutput } from "./commands/GetCrlCommand";
import { GetProfileCommandInput, GetProfileCommandOutput } from "./commands/GetProfileCommand";
import { GetSubjectCommandInput, GetSubjectCommandOutput } from "./commands/GetSubjectCommand";
import { GetTrustAnchorCommandInput, GetTrustAnchorCommandOutput } from "./commands/GetTrustAnchorCommand";
import { ImportCrlCommandInput, ImportCrlCommandOutput } from "./commands/ImportCrlCommand";
import { ListCrlsCommandInput, ListCrlsCommandOutput } from "./commands/ListCrlsCommand";
import { ListProfilesCommandInput, ListProfilesCommandOutput } from "./commands/ListProfilesCommand";
import { ListSubjectsCommandInput, ListSubjectsCommandOutput } from "./commands/ListSubjectsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTrustAnchorsCommandInput, ListTrustAnchorsCommandOutput } from "./commands/ListTrustAnchorsCommand";
import {
  PutAttributeMappingCommandInput,
  PutAttributeMappingCommandOutput,
} from "./commands/PutAttributeMappingCommand";
import {
  PutNotificationSettingsCommandInput,
  PutNotificationSettingsCommandOutput,
} from "./commands/PutNotificationSettingsCommand";
import {
  ResetNotificationSettingsCommandInput,
  ResetNotificationSettingsCommandOutput,
} from "./commands/ResetNotificationSettingsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateCrlCommandInput, UpdateCrlCommandOutput } from "./commands/UpdateCrlCommand";
import { UpdateProfileCommandInput, UpdateProfileCommandOutput } from "./commands/UpdateProfileCommand";
import { UpdateTrustAnchorCommandInput, UpdateTrustAnchorCommandOutput } from "./commands/UpdateTrustAnchorCommand";
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
  | CreateProfileCommandInput
  | CreateTrustAnchorCommandInput
  | DeleteAttributeMappingCommandInput
  | DeleteCrlCommandInput
  | DeleteProfileCommandInput
  | DeleteTrustAnchorCommandInput
  | DisableCrlCommandInput
  | DisableProfileCommandInput
  | DisableTrustAnchorCommandInput
  | EnableCrlCommandInput
  | EnableProfileCommandInput
  | EnableTrustAnchorCommandInput
  | GetCrlCommandInput
  | GetProfileCommandInput
  | GetSubjectCommandInput
  | GetTrustAnchorCommandInput
  | ImportCrlCommandInput
  | ListCrlsCommandInput
  | ListProfilesCommandInput
  | ListSubjectsCommandInput
  | ListTagsForResourceCommandInput
  | ListTrustAnchorsCommandInput
  | PutAttributeMappingCommandInput
  | PutNotificationSettingsCommandInput
  | ResetNotificationSettingsCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateCrlCommandInput
  | UpdateProfileCommandInput
  | UpdateTrustAnchorCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateProfileCommandOutput
  | CreateTrustAnchorCommandOutput
  | DeleteAttributeMappingCommandOutput
  | DeleteCrlCommandOutput
  | DeleteProfileCommandOutput
  | DeleteTrustAnchorCommandOutput
  | DisableCrlCommandOutput
  | DisableProfileCommandOutput
  | DisableTrustAnchorCommandOutput
  | EnableCrlCommandOutput
  | EnableProfileCommandOutput
  | EnableTrustAnchorCommandOutput
  | GetCrlCommandOutput
  | GetProfileCommandOutput
  | GetSubjectCommandOutput
  | GetTrustAnchorCommandOutput
  | ImportCrlCommandOutput
  | ListCrlsCommandOutput
  | ListProfilesCommandOutput
  | ListSubjectsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTrustAnchorsCommandOutput
  | PutAttributeMappingCommandOutput
  | PutNotificationSettingsCommandOutput
  | ResetNotificationSettingsCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateCrlCommandOutput
  | UpdateProfileCommandOutput
  | UpdateTrustAnchorCommandOutput;

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
export type RolesAnywhereClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of RolesAnywhereClient class constructor that set the region, credentials and other options.
 */
export interface RolesAnywhereClientConfig extends RolesAnywhereClientConfigType {}

/**
 * @public
 */
export type RolesAnywhereClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of RolesAnywhereClient class. This is resolved and normalized from the {@link RolesAnywhereClientConfig | constructor configuration interface}.
 */
export interface RolesAnywhereClientResolvedConfig extends RolesAnywhereClientResolvedConfigType {}

/**
 * <p>Identity and Access Management Roles Anywhere provides a secure way for your workloads such as
 *          servers, containers, and applications that run outside of Amazon Web Services to obtain
 *          temporary Amazon Web Services credentials. Your workloads can use the same IAM policies and roles you have for native Amazon Web Services applications to access Amazon Web Services resources. Using IAM Roles Anywhere eliminates the need to
 *          manage long-term credentials for workloads running outside of Amazon Web Services.</p>
 *          <p>
 *          To use IAM Roles Anywhere, your workloads must use X.509 certificates
 *          issued by their certificate authority (CA). You register the CA with IAM
 *          Roles Anywhere as a trust anchor to establish trust between your public key infrastructure
 *          (PKI) and IAM Roles Anywhere. If you don't manage your own PKI system, you
 *          can use Private Certificate Authority to create a CA and then use that to establish trust with
 *          IAM Roles Anywhere.
 *       </p>
 *          <p>This guide describes the IAM Roles Anywhere operations that you can call
 *          programmatically. For more information about IAM Roles Anywhere, see the
 *             <a href="https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html">IAM Roles Anywhere User Guide</a>.</p>
 * @public
 */
export class RolesAnywhereClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RolesAnywhereClientResolvedConfig
> {
  /**
   * The resolved configuration of RolesAnywhereClient class. This is resolved and normalized from the {@link RolesAnywhereClientConfig | constructor configuration interface}.
   */
  readonly config: RolesAnywhereClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<RolesAnywhereClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultRolesAnywhereHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: RolesAnywhereClientResolvedConfig) =>
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
