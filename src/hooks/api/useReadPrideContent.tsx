import useSWR from 'swr';

import { usePrideContent } from './usePrideContent';

export const useFetchThisMonthPrideList = () => {
  const { readThisMonthPrideList } = usePrideContent();
  const {
    data: prideContentList,
    mutate: prideContentMutate,
    isLoading: isLoadingPrideContent,
  } = useSWR('prideContent', () => readThisMonthPrideList());

  return { prideContentList, prideContentMutate, isLoadingPrideContent };
};

export const useFetchThisMonthRankingTop3 = () => {
  const { readThisMonthRankingTop3 } = usePrideContent();

  const { data: prideContentRankingList, isLoading: isLoadingPrideContentRanking } = useSWR(
    'prideContentRanking',
    () => readThisMonthRankingTop3()
  );

  return { prideContentRankingList, isLoadingPrideContentRanking };
};

export const useFetchThisMonthOwnPrideContentList = (uid: string) => {
  const { readThisMonthOwnPrideContentList } = usePrideContent();

  const {
    data: prideContentOwnList,
    isLoading: isLoadingPrideContentOwnList,
    mutate: prideContentOwnListMutate,
  } = useSWR(uid, () => readThisMonthOwnPrideContentList(uid));
  return { prideContentOwnList, isLoadingPrideContentOwnList, prideContentOwnListMutate };
};
