import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable';

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

export const useFetchLastMonthRankingTop3 = () => {
  const { readLastMonthRankingTop3 } = usePrideContent();

  const { data: prideContentRankingList, isLoading: isLoadingPrideContentRanking } = useSWR(
    'prideContentRanking',
    () => readLastMonthRankingTop3()
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

export const useFetchTargetMonthPrideList = (target: string) => {
  const { readTargetMonthPrideList } = usePrideContent();
  const { data: prideContentTargetList, isLoading: isLoadingPrideContentTargetList } =
    useSWRImmutable(target, () => readTargetMonthPrideList(target));
  return { prideContentTargetList, isLoadingPrideContentTargetList };
};
