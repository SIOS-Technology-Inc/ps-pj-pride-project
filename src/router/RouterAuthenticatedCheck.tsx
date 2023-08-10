import { useEffect, useState } from 'react';

import { onAuthStateChanged, User } from 'firebase/auth';

import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';

import { auth } from '../auth/authFirebase';
import { LoadingComponent } from '../utilities/LoadingComponent';

type Props = {
  children: React.ReactNode;
};

export const RouterAuthenticatedCheck = (props: Props) => {
  const { children } = props;
  const { signInAction, isAuthenticated } = useFirebaseAuth();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (getAuthUser: User | null) => {
      if (!getAuthUser) signInAction();
      console.info('auth処理', getAuthUser);

      setLoading(false);
    });
    return unsubscribe;
  });

  if (loading || !isAuthenticated) return <LoadingComponent />;

  return <>{children}</>;
};
