export const getClientId = ():string => {
    if(process.env.NODE_ENV === 'development') return "0oan5z95vBOTMeI2h4x6";
    return "0oan5z95vBOTMeI2h4x6"
};
export const getIssuer = ():string => {
    if(process.env.NODE_ENV === 'development') return "https://dev-250545.okta.com/oauth2/aset/";
    return "https://dev-250545-admin.okta.com/oauth2/aset/";
}

export const getCallbackPath = ():string => {
    if(process.env.NODE_ENV === 'development') return "http://localhost:3000/implicit/callback";
    return "https://aroma-wiki-web.herokuapp.com/implicit/callback";
}

export const getApiUrl = (path: string): string => {
    if(process.env.NODE_ENV === 'development') return `http://localhost:8000${path}`
    return `https://aroma-wiki-api.herokuapp.com${path}`
}

export default getApiUrl;