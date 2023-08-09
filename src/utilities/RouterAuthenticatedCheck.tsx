import { useEffect, useState } from 'react';

import { onAuthStateChanged, User } from 'firebase/auth';

import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';

import { auth } from '../auth/authFirebase';

import { LoadingComponent } from './LoadingComponent';

type Props = {
  children: React.ReactNode;
};

export const RouterAuthenticatedCheck = (props: Props) => {
  const { children } = props;
  const { signInAction } = useFirebaseAuth();

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (getAuthUser: User | null) => {
      if (!getAuthUser) signInAction();
      console.log(getAuthUser);

      setLoading(true);
    });
    return unsubscribe;
  });

  if (!loading) return <LoadingComponent />;

  return <>{children}</>;
};
