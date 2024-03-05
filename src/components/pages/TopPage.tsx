import { useAuthenticated } from '@/hooks/useAuth';
import { usePrideWithinOneMonthRankingTop3 } from '@/hooks/usePride';

import { RankingTop3 } from '@/components/object/RankingTop3/RankingTop3';
import { LoadingComponent } from '@/utilities/LoadingComponent';

import { Title } from '../common/Title/Title';

export const TopPage = () => {
  const { user } = useAuthenticated();
  const { prideListWithinOneMonthRankingTop3, isLoadingWithinOneMonthRankingTop3 } =
    usePrideWithinOneMonthRankingTop3();
  if (!prideListWithinOneMonthRankingTop3 || isLoadingWithinOneMonthRankingTop3)
    return <LoadingComponent />;
  return (
    <>
      <Title label={'ようこそ！' + user.displayName + 'さん'} />
      <div className="flex w-full flex-col items-center gap-2">
        <Title label="先月ランキング" />
        <RankingTop3 prides={prideListWithinOneMonthRankingTop3.prides} />
      </div>
    </>
  );
};
