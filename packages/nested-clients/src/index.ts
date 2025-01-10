/**
 * @internal
 */
export { CreateTokenCommand, SSOOIDCClient } from "./nested-sso-oidc/index";

/**
 * @internal
 */
export type { SSOOIDCClientConfig, CreateTokenCommandInput } from "./nested-sso-oidc";

/**
 * @internal
 */
export {
  AssumeRoleCommand,
  AssumeRoleWithWebIdentityCommand,
  STSClient,
  getDefaultRoleAssumer,
  getDefaultRoleAssumerWithWebIdentity,
} from "./nested-sts/index";

/**
 * @internal
 */
export type { AssumeRoleCommandInput, STSClientConfig } from "./nested-sts";
