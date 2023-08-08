import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../auth/authFirebase';
import { LoadingComponent } from './LoadingComponent';
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';

type Props = {
  children: React.ReactNode;
};

export const RouterAuthenticatedCheck = (props: Props) => {
  const { children } = props;
  const { signInAction, uid } = useFirebaseAuth();

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
