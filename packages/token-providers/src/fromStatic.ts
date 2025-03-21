import { CredentialProviderOptions, TokenIdentity, TokenIdentityProvider } from "@aws-sdk/types";
import { TokenProviderError } from "@smithy/property-provider";

export interface FromStaticInit extends CredentialProviderOptions {
  token?: TokenIdentity;
}

/**
 * Creates a token provider that will read from static token.
 * @public
 */
export const fromStatic =
  ({ token, logger }: FromStaticInit): TokenIdentityProvider =>
  async () => {
    logger?.debug("@aws-sdk/token-providers - fromStatic");
    if (!token || !token.token) {
      throw new TokenProviderError(`Please pass a valid token to fromStatic`, false);
    }
    return token;
  };
