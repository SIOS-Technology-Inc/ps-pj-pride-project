import { useMemo } from 'react';

import { signInWithRedirect, signOut } from 'firebase/auth';

import { auth, provider } from '@/auth/authFirebase';
import { firebaseAuthType } from '@/types/firebaseAuthType';

export const useFirebaseAuth = () => {
  const signInAction = () => {
    signInWithRedirect(auth, provider).catch((err) => {
      alert(err);
    });
  };
  const singOutAction = () => {
    signOut(auth);
  };
  const isAuthenticated = useMemo(() => (auth.currentUser ? true : false), []);
  const uid: string = useMemo(() => (auth.currentUser ? auth.currentUser.uid : ''), []);
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

  return { signInAction, singOutAction, uid, user, isAuthenticated };
};
