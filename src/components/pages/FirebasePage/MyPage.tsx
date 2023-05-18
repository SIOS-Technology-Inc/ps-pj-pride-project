import { useRecoilValue } from 'recoil';

import { userUidState } from '@/provider/firebaseStore';

export const MyPage = () => {
  const uid = useRecoilValue(userUidState);
  return (
    <>
      <main className="flex flex-col gap-5">{uid}</main>
    </>
  );
};
