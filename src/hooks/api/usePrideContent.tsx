import { useFirestorePrideContent } from '../useFirestorePrideContent';

export const usePrideContent = () => {
  const {
    createPride,
    updatePride,
    deletePride,
    pushLikeForPride,
    readThisMonthOwnPrideContentList,
    readThisMonthPrideList,
    readThisMonthRankingTop3,
    readMonthPrideList,
    readTargetMonthPrideList,
  } = useFirestorePrideContent();

  return {
    createPride,
    updatePride,
    deletePride,
    pushLikeForPride,
    readThisMonthOwnPrideContentList,
    readThisMonthPrideList,
    readThisMonthRankingTop3,
    readMonthPrideList,
    readTargetMonthPrideList,
  };
};
