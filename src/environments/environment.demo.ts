export const environment = {
  production: false,
  msalConfig: {
    auth: {
      clientId: '',
      authority: '',
      knownAuthorities: [''],
      redirectUri: '',
      postLogoutRedirectUri: '',
    },
  },
  apiConfig: {
    scopes: [],
    uri: '',
  },
  serverEndpoints: {
    helloUrl: '/',
  },
};
