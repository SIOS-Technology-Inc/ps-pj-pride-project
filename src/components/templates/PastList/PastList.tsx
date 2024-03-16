import { UserCard } from '@/components/modules/UserCard/UserCard';
import { PrideContentType } from '@/types/contentPride.type';

type PastListProps = {
  prides: PrideContentType[];
};

export const PastList = (props: PastListProps) => {
  const { prides } = props;
  return (
    <div className="flex w-full flex-col gap-10">
      {prides.length == 0 && (
        <div className="flex h-56 w-full items-center justify-center rounded-md border border-gray/70 text-2xl">
          まだ過去の自慢プロジェクトがありません。
        </div>
      )}
      {prides.map((content) => (
        <UserCard key={content.uid} prideContent={content} />
      ))}
    </div>
  );
};
