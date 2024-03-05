import { useMemo } from 'react';

import { signInWithRedirect, signOut } from 'firebase/auth';
import useSWR from 'swr';

import { auth, provider } from '@/auth/authFirebase';
import { firebaseAuthType } from '@/types/firebaseAuthType';

export const useAuthAction = () => {
  const signInAction = () => {
    signInWithRedirect(auth, provider).catch((err) => {
      alert(err);
    });
  };
  const singOutAction = () => {
    signOut(auth);
  };
  return { signInAction, singOutAction };
};

export const useAuthenticated = () => {
  const uid: string = auth.currentUser ? auth.currentUser.uid : '';

  const { data: idToken, isLoading: isLoadingIDToken } = useSWR('idToken', async () => {
    if (auth.currentUser === null) return '';
    const token = await auth.currentUser.getIdToken();
    return token;
  });

  const user: firebaseAuthType = useMemo(() => {
    if (auth.currentUser) {
      return {
        photoURL: auth.currentUser.photoURL ? auth.currentUser.photoURL : '',
        displayName: auth.currentUser.displayName ? auth.currentUser.displayName : '',
      };
    } else {
      return {
        photoURL: '',
        displayName: '',
      };
    }
  }, []);

  return { user, idToken, isLoadingIDToken, uid };
};
