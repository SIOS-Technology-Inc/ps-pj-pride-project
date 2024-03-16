import { UserCard } from '@/components/modules/UserCard/UserCard';
import { PrideContentType } from '@/types/contentPride.type';

type UserPrideListProps = {
  prides: PrideContentType[];
  onClickOwnerPride?: (targetData: PrideContentType) => void;
};

export const UserPrideList = (props: UserPrideListProps) => {
  const { prides, onClickOwnerPride } = props;
  return (
    <div className="flex w-full flex-col gap-10">
      {prides.length == 0 && (
        <div className="flex h-56 w-full items-center justify-center rounded-md border border-gray/70 text-2xl">
          あなたの入力を待っています♡
        </div>
      )}
      {onClickOwnerPride
        ? prides.map((content) => (
            <UserCard
              key={content.uid}
              prideContent={content}
              onClickOwnerEdit={() => onClickOwnerPride(content)}
            />
          ))
        : prides.map((content) => <UserCard key={content.uid} prideContent={content} />)}
    </div>
  );
};
