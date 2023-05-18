import { Link } from 'react-router-dom';

import { useRecoilValue } from 'recoil';

import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';
import { authenticatedState } from '@/provider/firebaseStore';

export const FirebasePage = () => {
  const { signInAction, singOutAction } = useFirebaseAuth();
  const authenticated = useRecoilValue(authenticatedState);
  return (
    <>
      <main className="flex flex-col gap-5">
        {authenticated ? (
          <>
            <Link to={'mypage'}>mypage</Link>
            <button onClick={singOutAction}>logout</button>
          </>
        ) : (
          <>
            <button onClick={signInAction}>login</button>
          </>
        )}
      </main>
    </>
  );
};
