import { Title } from '@/components/common/Title/Title';
import { PrideRankingCard } from '@/components/modules/PrideRankingCard/PrideRankingCard';
import { PrideContentType } from '@/types/contentPride.type';

type RankingTop3Props = {
  prides: PrideContentType[];
};

export const RankingTop3 = (props: RankingTop3Props) => {
  const { prides } = props;
  return (
    <>
      <div className="flex w-full flex-col items-center gap-2">
        <Title label="先月ランキング" />
        <div className="flex w-full flex-row justify-between gap-3 gap-y-10">
          {prides.length === 0 && (
            <div className="flex w-full items-center justify-center p-10">まだ投稿がありません</div>
          )}
          {prides.map((content, index) => (
            <PrideRankingCard key={content.uid} prideContent={content} rank={index} />
          ))}
        </div>
      </div>
    </>
  );
};
