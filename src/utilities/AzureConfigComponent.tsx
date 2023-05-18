import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';

import { msalConfig } from '@/auth/authAzure';

type Props = {
  children: React.ReactNode;
};
export const AzureConfigComponent = (props: Props) => {
  const { children } = props;
  const pca = new PublicClientApplication(msalConfig);
  return <MsalProvider instance={pca}>{children}</MsalProvider>;
};
