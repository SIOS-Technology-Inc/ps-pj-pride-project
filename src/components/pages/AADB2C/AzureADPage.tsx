import { Link } from 'react-router-dom';

import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from '@azure/msal-react';

import { useAADB2CAuth } from '@/hooks/useAADB2CAuth';

export const AzureADPage = () => {
  const { loginAzure, logoutAzure } = useAADB2CAuth();
  return (
    <>
      <AuthenticatedTemplate>
        <Link to={'mypage'}>mypage</Link>
        <button onClick={logoutAzure}>logout</button>
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <button onClick={loginAzure}>login</button>
      </UnauthenticatedTemplate>
    </>
  );
};
