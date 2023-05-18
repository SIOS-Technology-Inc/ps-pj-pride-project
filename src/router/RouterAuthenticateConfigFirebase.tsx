import { useEffect, useState } from 'react';

import { onAuthStateChanged, User } from 'firebase/auth';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

import { auth } from '@/auth/authFirebase';
import { authenticatedState, userUidState } from '@/provider/firebaseStore';
import { RedirectComponent } from '@/utilities/RedirectComponent';

type Props = {
  component: React.ReactNode;
};
export const RouterAuthenticatedCheck = (props: Props) => {
  const { component } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const setAuthenticated = useSetRecoilState(authenticatedState);

  const setSignInUser = useSetRecoilState(userUidState);
  const resetStatus = useResetRecoilState(userUidState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (getAuthUser: User | null) => {
        if (getAuthUser) {
          setSignInUser(getAuthUser.uid);
          setAuthenticated(true);
        } else {
          resetStatus();
          setAuthenticated(false);
        }
        setLoading(true);
      }
    );
    return unsubscribe;
  });

  if (!loading)
    return (
      <div className="flex justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );

  return <>{component}</>;
};

export const RouterHasAuthenticated = (props: Props) => {
  const { component } = props;
  const authenticated = useRecoilValue(authenticatedState);
  if (!authenticated) return <RedirectComponent redirect="/firebase" />;

  return <>{component}</>;
};
