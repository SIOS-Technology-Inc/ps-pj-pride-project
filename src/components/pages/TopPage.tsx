import { useFirebaseAuth } from '@/hooks/useAuth';
import { useFetchLastMonthRankingTop3 } from '@/hooks/useReadPrideContent';

import { TitleComponent } from 'modules/TitleComponent';
import { ViewRankingCardComponent } from 'modules/ViewComponent/ViewCardComponent';

import { LoadingComponent } from '@/utilities/LoadingComponent';

export const TopPage = () => {
  const { user } = useFirebaseAuth();
  const { prideContentRankingList, isLoadingPrideContentRanking } = useFetchLastMonthRankingTop3();

  if (isLoadingPrideContentRanking || !prideContentRankingList) return <LoadingComponent />;
  return (
    <>
      <TitleComponent label={'ようこそ！' + user.displayName + 'さん'} />
      <div className="flex w-full flex-col items-center gap-2">
        <TitleComponent label="先月ランキング" />
        <div className="flex w-full flex-row justify-between gap-3 gap-y-10">
          {prideContentRankingList.map((content, index) => (
            <ViewRankingCardComponent key={content.uid} prideContent={content.pride} rank={index} />
          ))}
        </div>
      </div>
    </>
  );
};
