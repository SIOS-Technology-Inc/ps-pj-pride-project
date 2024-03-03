import { useFirebaseAuth } from '@/hooks/useAuth';
import { useFetchLastMonthRankingTop3 } from '@/hooks/useReadPrideContent';

import { LoadingComponent } from '@/utilities/LoadingComponent';

import { Title } from '../common/Title/Title';
import { UserRankingCard } from '../modules/UserRankingCard/UserRankingCard';

export const TopPage = () => {
  const { user } = useFirebaseAuth();
  const { prideContentRankingList, isLoadingPrideContentRanking } = useFetchLastMonthRankingTop3();

  if (isLoadingPrideContentRanking || !prideContentRankingList) return <LoadingComponent />;
  return (
    <>
      <Title label={'ようこそ！' + user.displayName + 'さん'} />
      <div className="flex w-full flex-col items-center gap-2">
        <Title label="先月ランキング" />
        <div className="flex w-full flex-row justify-between gap-3 gap-y-10">
          {prideContentRankingList.map((content, index) => (
            <UserRankingCard key={content.uid} prideContent={content.pride} rank={index} />
          ))}
        </div>
      </div>
    </>
  );
};
