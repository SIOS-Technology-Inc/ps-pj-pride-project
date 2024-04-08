import { ThumbsUpButton } from '@/components/common/ThumbsUpButton/ThumbsUpButton';
import { PrideContentType } from '@/types/contentPride.type';

type PrideThumbsUpSimpleCardProps = {
  prideContent: PrideContentType;
  onClick?: () => void;
  ownerFlag?: boolean;
  activeFlag?: boolean;
};

export const PrideThumbsUpSimpleCard = (props: PrideThumbsUpSimpleCardProps) => {
  const { onClick, ownerFlag, prideContent, activeFlag } = props;
  const { userName, thumbsupUsers, title, userPhotoURL } = prideContent;

  return (
    <>
      <div className={'flex w-full flex-col gap-5 rounded-lg p-3 '}>
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
            {onClick && (
              <ThumbsUpButton
                onClick={() => onClick()}
                disable={ownerFlag}
                activeFlag={activeFlag}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
