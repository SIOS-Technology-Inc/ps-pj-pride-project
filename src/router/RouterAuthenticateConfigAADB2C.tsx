import { useEffect } from 'react';

import { InteractionStatus } from '@azure/msal-browser';

import { useAADB2CAuth } from '@/hooks/useAADB2CAuth';
import { RedirectComponent } from '@/utilities/RedirectComponent';

type Props = {
  component: React.ReactNode;
};
export const RouterAuthenticatedCheck = (props: Props) => {
  const { component } = props;
  const { inProgress, isAuthenticated } = useAADB2CAuth();
  useEffect(() => {
    console.log(inProgress, isAuthenticated);
  }, [inProgress, isAuthenticated]);

  if (
    inProgress == InteractionStatus.Startup ||
    inProgress == InteractionStatus.HandleRedirect
  )
    return (
      <div className="flex justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
      </div>
    );

  return <>{component}</>;
};

export const RouterHasAuthenticated = (props: Props) => {
  const { component } = props;
  const { isAuthenticated } = useAADB2CAuth();

  if (!isAuthenticated) return <RedirectComponent redirect="/azure" />;
  return <>{component}</>;
};
