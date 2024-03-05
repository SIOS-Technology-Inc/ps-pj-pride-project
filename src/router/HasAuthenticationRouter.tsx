import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { onAuthStateChanged, User } from 'firebase/auth';

import { useFirebaseAuth } from '@/hooks/useAuth';

import { auth } from '@/auth/authFirebase';
import { LoadingComponent } from '@/utilities/LoadingComponent';

export const HasAuthenticationRouter = () => {
  const { signInAction } = useFirebaseAuth();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (getAuthUser: User | null) => {
      if (getAuthUser == null) signInAction();
      setLoading(false);
    });
    return unsubscribe;
  });

  if (loading || auth.currentUser == null) return <LoadingComponent />;

  return (
    <>
      <Outlet />
    </>
  );
};
