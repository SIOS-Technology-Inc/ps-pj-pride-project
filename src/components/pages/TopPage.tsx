import { useAuthenticated } from '@/hooks/useAuth';
import { useFetchLastMonthRankingTop3 } from '@/hooks/useReadPrideContent';

import { RankingTop3 } from '@/components/object/RankingTop3/RankingTop3';
import { LoadingComponent } from '@/utilities/LoadingComponent';

import { Title } from '../common/Title/Title';

export const TopPage = () => {
  const { user } = useAuthenticated();
  const { prideContentRankingList, isLoadingPrideContentRanking } = useFetchLastMonthRankingTop3();

  if (isLoadingPrideContentRanking || !prideContentRankingList) return <LoadingComponent />;
  return (
    <>
      <Title label={'ようこそ！' + user.displayName + 'さん'} />
      <div className="flex w-full flex-col items-center gap-2">
        <Title label="先月ランキング" />
        <RankingTop3 prides={prideContentRankingList} />
      </div>
    </>
  );
};
