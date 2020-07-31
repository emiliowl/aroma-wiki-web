const CLIENT_ID: string = "0oan5z95vBOTMeI2h4x6";
const ISSUER: string = "https://auth.asetterapias.com.br/oauth2/aset/";
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
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: "http://localhost:3000/implicit/callback",
    scopes: ["openid", "profile", "email"],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
  resourceServer: {
    messagesUrl: "http://localhost:5000/api/messages",
  },
};

export default oktaConfig;
