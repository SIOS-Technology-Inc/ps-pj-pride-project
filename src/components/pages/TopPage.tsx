import { usePrideWithinOneMonthRankingTop3 } from '@/hooks/usePride';

import { RankingTop3 } from '@/components/templates/RankingTop3/RankingTop3';
import { LoadingComponent } from '@/utilities/LoadingComponent';

export const TopPage = () => {
  const { prideListWithinOneMonthRankingTop3, isLoadingWithinOneMonthRankingTop3 } =
    usePrideWithinOneMonthRankingTop3();
  if (!prideListWithinOneMonthRankingTop3 || isLoadingWithinOneMonthRankingTop3)
    return <LoadingComponent />;
  return (
    <>
      <RankingTop3 prides={prideListWithinOneMonthRankingTop3.prides} />
    </>
  );
};
