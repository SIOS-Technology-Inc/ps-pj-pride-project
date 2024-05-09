import { usePrideWithinOneMonthRankingTop3 } from '@/hooks/usePride';

import { Notice } from '@/components/common/Notice/Notice';
import { RankingTop3 } from '@/components/templates/RankingTop3/RankingTop3';
import { LoadingComponent } from '@/utilities/LoadingComponent';

export const TopPage = () => {
  const { prideListWithinOneMonthRankingTop3, isLoadingWithinOneMonthRankingTop3 } =
    usePrideWithinOneMonthRankingTop3();
  if (!prideListWithinOneMonthRankingTop3 || isLoadingWithinOneMonthRankingTop3)
    return <LoadingComponent />;
  return (
    <>
      <Notice>
        <>
          ソースの修正を行いしました。バグなどがあった場合は、
          <a
            href="https://github.com/SIOS-Technology-Inc/ps-pj-pride-project/issues"
            className="border-b border-gray"
            target="_blank"
          >
            issue
          </a>
          に起票かSlackにて@ry-tanakaへDMをお願いします。
          <a
            href="https://sios-technology-inc.github.io/ps-pj-pride-project/?path=/docs/common-button--docs"
            className="border-b border-gray"
            target="_blank"
          >
            デザインはこちら
          </a>
          、
          <a
            href="https://blue-ground-0332b1a00.3.azurestaticapps.net/api"
            className="border-b border-gray"
            target="_blank"
          >
            API仕様書はこちら
          </a>
          で見ることができます。
        </>
      </Notice>
      <RankingTop3 prides={prideListWithinOneMonthRankingTop3.prides} />
    </>
  );
};
