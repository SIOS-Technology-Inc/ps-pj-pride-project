import { CardContent } from '@/components/common/CardContent/CardContent';
import { CardImagesListContent } from '@/components/common/CardImagesListContent/CardImagesListContent';
import { PrideContentType } from '@/types/contentPride.type';

type UserRankingCardProps = {
  prideContent: PrideContentType;
  rank: number;
};

export const UserRankingCard = (props: UserRankingCardProps) => {
  const { prideContent, rank } = props;
  const { userName, memo, thumbsupUsers, title, userPhotoURL } = prideContent;

  return (
    <>
      <div className="flex w-full max-w-sm flex-col">
        <span className="flex w-full items-center justify-center text-2xl">TOP.{rank + 1}</span>
        <div className="flex w-full  flex-col gap-5 rounded-lg border border-gray/70 p-3 ">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-2 ">
              <img src={userPhotoURL} alt="" className="h-10 w-10 rounded-full object-contain" />
              <span className="text-lg ">{userName}</span>
            </div>
          </div>
          <h2 className="text-2xl">{title}</h2>
          <div className="flex flex-col gap-4">
            {memo != '' ? (
              <div className="flex flex-col gap-2">
                <CardContent content={memo} />
              </div>
            ) : (
              <></>
            )}
            <CardImagesListContent label="いいね！" contents={thumbsupUsers} />
          </div>
        </div>
      </div>
    </>
  );
};
