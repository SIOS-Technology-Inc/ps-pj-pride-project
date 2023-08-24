import { useFetchThisMonthRankingTop3 } from '@/hooks/api/useReadPrideContent';
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';
import { LoadingComponent } from '@/utilities/LoadingComponent';

import { TitleComponent } from '../modules/TitleComponent';
import { ViewRankingCardComponent } from '../modules/ViewComponent/ViewCardComponent';

export const TopPage = () => {
  const { user } = useFirebaseAuth();
  const { prideContentRankingList, isLoadingPrideContentRanking } = useFetchThisMonthRankingTop3();

  if (isLoadingPrideContentRanking || !prideContentRankingList) return <LoadingComponent />;
  return (
    <>
      <TitleComponent label={'ようこそ！' + user.displayName + 'さん'} />
      <div className="flex w-full flex-col items-center gap-2">
        <TitleComponent label="今月のランキング" />
        <div className="flex w-full flex-row justify-between gap-3 gap-y-10">
          {prideContentRankingList.map((content, index) => (
            <ViewRankingCardComponent key={content.uid} prideContent={content.pride} rank={index} />
          ))}
        </div>
      </div>
    </>
  );
};
