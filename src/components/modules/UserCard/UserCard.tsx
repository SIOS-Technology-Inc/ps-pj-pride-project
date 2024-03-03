import { CardContent } from '@/components/common/CardContent/CardContent';
import { CardImagesListContent } from '@/components/common/CardImagesListContent/CardImagesListContent';
import { PrideContentType } from '@/types/contentsType';

type UserCardProps = {
  prideContent: PrideContentType;
  onClickOwnerEdit?: () => void;
};

export const UserCard = (props: UserCardProps) => {
  const { prideContent, onClickOwnerEdit: ownerEditClick } = props;
  const { userName, memo, thumbsUsers, title, userPhotoURL } = prideContent;
  return (
    <>
      <div className="flex w-full flex-col gap-5 rounded-lg border border-gray/70 p-3">
        {ownerEditClick && <span onClick={ownerEditClick}>edit</span>}
        <div className="flex flex-row">
          <div className="flex grow flex-row gap-4">
            <div className="flex flex-row items-center gap-2">
              <img src={userPhotoURL} alt="" className="h-10 w-10 rounded-full object-contain" />
              <span className="text-lg">{userName}</span>
            </div>
            <h2 className="grow text-2xl">{title}</h2>
          </div>
        </div>
        {memo != '' ? (
          <div className="flex w-full flex-row gap-2">
            <CardContent content={memo} />
          </div>
        ) : (
          <></>
        )}
        <CardImagesListContent label="いいね！" contents={thumbsUsers} />
      </div>
    </>
  );
};
