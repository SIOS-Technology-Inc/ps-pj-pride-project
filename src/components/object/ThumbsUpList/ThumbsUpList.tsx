import { useState } from 'react';

import { UserLandscapeCard } from '@/components/modules/UserLandscapeCard/UserLandscapeCard';
import { ViewTypeTab } from '@/components/modules/ViewTypeTab/ViewTypeTab';
import { ViewTabStyle } from '@/constants/ViewTabStyle';
import { PrideContentFirestoreDataType } from '@/types/contentsType';

type ThumbsUpListProps = {
  prides: PrideContentFirestoreDataType[];
  onClickThumbsUpButton: (uid: string) => void;
  userID: string;
  photoURL: string;
};

export const ThumbsUpList = (props: ThumbsUpListProps) => {
  const { prides, onClickThumbsUpButton, userID, photoURL } = props;
  const [viewType, setViewType] = useState<keyof typeof ViewTabStyle>('detail');
  const onClickViewType = (value: keyof typeof ViewTabStyle) => {
    setViewType(value);
  };
  return (
    <>
      <ViewTypeTab select={viewType} onClick={onClickViewType} />
      <div className="flex w-full flex-col gap-10">
        {prides.map((content) => (
          <UserLandscapeCard
            key={content.uid}
            prideContent={content.pride}
            onClick={() => onClickThumbsUpButton(content.uid)}
            ownerFlag={content.pride.thumbsUsers.includes(photoURL) || userID == content.pride.uid}
            design={viewType}
          />
        ))}
      </div>
    </>
  );
};
