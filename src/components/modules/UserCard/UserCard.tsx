import { FiEdit } from 'react-icons/fi';

import { CardContent } from '@/components/common/CardContent/CardContent';
import { CardImagesListContent } from '@/components/common/CardImagesListContent/CardImagesListContent';
import { IconButton } from '@/components/common/IconButton/IconButton';
import { PrideContentType } from '@/types/contentPride.type';

type UserCardProps = {
  prideContent: PrideContentType;
  onClickOwnerEdit?: () => void;
};

export const UserCard = (props: UserCardProps) => {
  const { prideContent, onClickOwnerEdit: ownerEditClick } = props;
  const { userName, memo, thumbsupUsers, title, userPhotoURL } = prideContent;
  return (
    <>
      <div className="flex w-full flex-col gap-5 rounded-lg border border-gray/70 p-3">
        {ownerEditClick && (
          <div className="flex items-center justify-end">
            <IconButton label="編集" onClick={ownerEditClick}>
              <FiEdit />
            </IconButton>
          </div>
        )}
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
        <CardImagesListContent label="いいね！" contents={thumbsupUsers} />
      </div>
    </>
  );
};
