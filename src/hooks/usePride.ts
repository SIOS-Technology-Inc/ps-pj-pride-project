import useSWR from 'swr';

import {
  fetchPridePastOneMonthAgo,
  fetchPrideWithinOneMonth,
  fetchPrideWithinOneMonthRankingTop3,
  patchPrideThumbsup,
} from '@/api/prideList';

export const usePrideWithinOneMonth = () => {
  const {
    data: prideListWithinOneMonth,
    isLoading: isLoadingWithinOneMonth,
    mutate,
  } = useSWR('prideWithinOneMonth', fetchPrideWithinOneMonth);

  const onClickThumbsUpButtonFunction = async (uid: string, userPhoto: string) => {
    await patchPrideThumbsup(uid, userPhoto);
    mutate();
  };
  return {
    prideListWithinOneMonth,
    isLoadingWithinOneMonth,
    onClickThumbsUpButtonFunction,
  };
};

export const usePrideWithinOneMonthRankingTop3 = () => {
  const {
    data: prideListWithinOneMonthRankingTop3,
    isLoading: isLoadingWithinOneMonthRankingTop3,
  } = useSWR('prideRankingTop3', fetchPrideWithinOneMonthRankingTop3);

  return { prideListWithinOneMonthRankingTop3, isLoadingWithinOneMonthRankingTop3 };
};

export const usePridePastOneMonthAgo = () => {
  const { data: prideListPastOneMonthAgo, isLoading: isLoadingPastOneMonthAgo } = useSWR(
    'pridePastOneMonthAgo',
    fetchPridePastOneMonthAgo
  );
  return { prideListPastOneMonthAgo, isLoadingPastOneMonthAgo };
};
