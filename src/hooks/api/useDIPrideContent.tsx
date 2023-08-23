import { useFirestorePrideContent } from '../useFirestorePrideContent';

export const useDIPrideContent = () => {
  const {
    createPride,
    pushLikeForPride,
    readThisMonthOwnPrideContentList,
    readThisMonthPrideList,
    readThisMonthRankingTop3,
  } = useFirestorePrideContent();

  return {
    createPride,
    pushLikeForPride,
    readThisMonthOwnPrideContentList,
    readThisMonthPrideList,
    readThisMonthRankingTop3,
  };
};
