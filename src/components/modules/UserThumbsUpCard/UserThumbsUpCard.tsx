import { CardContent } from '@/components/common/CardContent/CardContent';
import { CardImagesListContent } from '@/components/common/CardImagesListContent/CardImagesListContent';
import { ThumbsUpButton } from '@/components/common/ThumbsUpButton/ThumbsUpButton';
import { PrideContentType } from '@/types/contentPride.type';

type UserThumbsUpCardProps = {
  prideContent: PrideContentType;
  onClick: () => void;
  ownerFlag: boolean;
};

export const UserThumbsUpCard = (props: UserThumbsUpCardProps) => {
  const { prideContent, onClick, ownerFlag } = props;
  const { userName, memo, thumbsupUsers, title, userPhotoURL } = prideContent;
  return (
    <>
      <div className="flex w-full max-w-sm flex-col gap-5 rounded-lg border border-gray/70 p-3">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2 ">
            <img src={userPhotoURL} alt="" className="h-10 w-10 rounded-full object-contain" />
            <span className="text-lg ">{userName}</span>
          </div>
          <ThumbsUpButton onClick={() => onClick()} disable={ownerFlag} />
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
    </>
  );
};
