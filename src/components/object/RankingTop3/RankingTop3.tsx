import { UserRankingCard } from '@/components/modules/UserRankingCard/UserRankingCard';
import { PrideContentFirestoreDataType } from '@/types/contentsType';

type RankingTop3Props = {
  prides: PrideContentFirestoreDataType[];
};

export const RankingTop3 = (props: RankingTop3Props) => {
  const { prides } = props;
  return (
    <>
      <div className="flex w-full flex-row justify-between gap-3 gap-y-10">
        {prides.map((content, index) => (
          <UserRankingCard key={content.uid} prideContent={content.pride} rank={index} />
        ))}
      </div>
    </>
  );
};
