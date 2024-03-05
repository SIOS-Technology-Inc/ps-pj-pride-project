import { useState } from 'react';

import { UserLandscapeCard } from '@/components/modules/UserLandscapeCard/UserLandscapeCard';
import { ViewTypeTab } from '@/components/modules/ViewTypeTab/ViewTypeTab';
import { ViewTabStyle } from '@/constants/ViewTabStyle';
import { PrideContentType } from '@/types/contentPride.type';

type ThumbsUpListProps = {
  prides: PrideContentType[];
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
            prideContent={content}
            onClick={() => onClickThumbsUpButton(content.uid)}
            ownerFlag={content.thumbsupUsers.includes(photoURL) || userID == content.userID}
            design={viewType}
          />
        ))}
      </div>
    </>
  );
};
