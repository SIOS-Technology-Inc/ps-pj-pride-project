import { UserCard } from '@/components/modules/UserCard/UserCard';
import { PrideContentFirestoreDataType } from '@/types/contentsType';

type UserPrideListProps = {
  prides: PrideContentFirestoreDataType[];
  onClickOwnerPride: (targetData: PrideContentFirestoreDataType) => void;
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
      {prides.map((content) => (
        <UserCard
          prideContent={content.pride}
          onClickOwnerEdit={() => onClickOwnerPride(content)}
        />
      ))}
    </div>
  );
};
