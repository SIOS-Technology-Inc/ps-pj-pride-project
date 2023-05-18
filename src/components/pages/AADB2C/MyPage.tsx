import { useLocation } from 'react-router-dom';

import { useAADB2CAuth } from '@/hooks/useAADB2CAuth';

export const MyPage = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  console.log(query.get('file'));

  const { userId } = useAADB2CAuth();
  return (
    <>
      <main className="flex flex-col gap-5">{userId}</main>
    </>
  );
};
