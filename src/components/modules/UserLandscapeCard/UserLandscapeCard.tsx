import { CardContent } from '@/components/common/CardContent/CardContent';
import { CardImagesListContent } from '@/components/common/CardImagesListContent/CardImagesListContent';
import { ThumbsUpButton } from '@/components/common/ThumbsUpButton/ThumbsUpButton';
import { ViewTabStyle } from '@/constants/ViewTabStyle';
import { PrideContentType } from '@/types/contentPride.type';

type UserLandscapeDetailCardProps = {
  prideContent: PrideContentType;
  onClick: () => void;
  ownerFlag: boolean;
  design: keyof typeof ViewTabStyle;
};

export const UserLandscapeCard = ({
  design = 'detail',
  onClick,
  ownerFlag,
  prideContent,
}: UserLandscapeDetailCardProps) => {
  const { userName, thumbsupUsers, title, userPhotoURL, memo } = prideContent;

  return (
    <>
      <div className="flex w-full flex-col gap-5 rounded-lg border border-gray/70 p-3">
        <div className="flex flex-row justify-between">
          <div className="flex grow flex-row gap-4">
            <div className="flex flex-row items-center gap-2">
              <img src={userPhotoURL} alt="" className="h-10 w-10 rounded-full object-contain" />
              <span className="text-lg">{userName}</span>
            </div>
            <h2 className="grow text-2xl">{title}</h2>
          </div>
          <div className="flex flex-row items-center gap-4">
            <span className="text-lg">{thumbsupUsers.length}</span>
            <ThumbsUpButton onClick={() => onClick()} disable={ownerFlag} />
          </div>
        </div>
        {design === 'simple' ? (
          <></>
        ) : (
          <>
            <div className="flex w-full flex-row gap-2">
              <CardContent content={memo} />
            </div>
            <CardImagesListContent label="いいね！" contents={thumbsupUsers} />
          </>
        )}
      </div>
    </>
  );
};
