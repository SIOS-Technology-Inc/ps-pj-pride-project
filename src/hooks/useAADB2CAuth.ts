import { useCallback, useMemo } from 'react';

import { AccountInfo } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';

import { loginRequest } from '../auth/authAzure';

export const useAADB2CAuth = () => {
  const { instance, accounts, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const userId = useMemo(() => {
    const account: AccountInfo = accounts[0];
    if (account && account.idTokenClaims) {
      return account.idTokenClaims.sub || '';
    } else {
      return '';
    }
  }, [accounts]);

  const loginAzure = useCallback(async () => {
    instance.loginRedirect(loginRequest);
  }, [instance]);

  const logoutAzure = useCallback(async () => {
    instance.logout();
  }, [instance]);

  return { loginAzure, logoutAzure, inProgress, userId, isAuthenticated };
};
