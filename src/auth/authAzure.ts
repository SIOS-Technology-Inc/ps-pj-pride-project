// export const msalConfig = {
//   auth: {
//     clientId: import.meta.env.VITE_AADB2C_CLIENT_ID || '',
//     authority:
//       'https://login.microsoftonline.com/' +
//         import.meta.env.VITE_AADB2C_TENANT_ID || '',
//     redirectUri: window.location.origin,
//   },
//   cache: {
//     cacheLocation: 'sessionStorage',
//     storeAuthStateInCookie: false,
//   },
// };

import { Configuration, RedirectRequest } from '@azure/msal-browser';

export const msalConfig: Configuration = {
  auth: {
    clientId: import.meta.env.VITE_AADB2C_CLIENT_ID || '',
    authority: import.meta.env.VITE_AADB2C_AUTHORITY || '',
    knownAuthorities: [import.meta.env.VITE_AADB2C_KNOWN_AUTHORITES || ''],
    redirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
};
export const loginRequest: RedirectRequest = {
  redirectStartPage: window.location.origin + '/azure/mypage?file=123',
  onRedirectNavigate: () => true,
  scopes: ['openid'],
};
