import { getApiUrl, getClientId, getIssuer, getCallbackPath } from './utils/constants'

const OKTA_TESTING_DISABLEHTTPSCHECK: string = "true";

export interface OidcConfig {
  clientId: string;
  issuer: string;
  redirectUri: string;
  scopes: Array<string>;
  pkce: boolean;
  disableHttpsCheck: string;
}

export interface ResourceServer {
  messagesUrl: string;
}

export interface OktaConfig {
  oidc: OidcConfig;
  resourceServer: ResourceServer;
}

const oktaConfig: OktaConfig = {
  oidc: {
    clientId: getClientId(),
    issuer: getIssuer(),
    redirectUri: getCallbackPath(),
    scopes: ["openid", "profile", "email"],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
  resourceServer: {
    messagesUrl: `${getApiUrl("/")}/api/scents`,
  },
};

export default oktaConfig;
