import { useState } from 'react';

import { BsCardList, BsList } from 'react-icons/bs';

import { useFirebaseAuth } from '@/hooks/useAuth';
import { usePrideContent } from '@/hooks/usePrideContent';
import { useFetchThisMonthPrideList } from '@/hooks/useReadPrideContent';

import { LoadingComponent } from '@/utilities/LoadingComponent';

import { Title } from '../common/Title/Title';
import { UserLandscapeCard } from '../modules/UserLandscapeCard/UserLandscapeCard';

export const ThumbsUpPage = () => {
  const date = new Date();
  const month = date.getMonth() + 1;

  const { user, uid } = useFirebaseAuth();
  const { pushLikeForPride } = usePrideContent();
  const { prideContentList, isLoadingPrideContent, prideContentMutate } =
    useFetchThisMonthPrideList();

  const onClickThumbsUpButton = async (uid: string) => {
    await pushLikeForPride(uid, user.photoURL);
    prideContentMutate();
  };

  const viewCss = {
    simple: { simple: '', detail: 'opacity-40' },
    detail: { simple: 'opacity-40', detail: '' },
  } as const satisfies Record<string, { simple: string; detail: string }>;

  const [viewType, setViewType] = useState<keyof typeof viewCss>('detail');

  if (isLoadingPrideContent || !prideContentList) return <LoadingComponent />;

  const ViewCardComponent = () => {
    return (
      <>
        <div className="flex w-full flex-col gap-10">
          {prideContentList.map((content) => (
            <UserLandscapeCard
              key={content.uid}
              prideContent={content.pride}
              onClick={() => onClickThumbsUpButton(content.uid)}
              ownerFlag={
                content.pride.thumbsUsers.includes(user.photoURL) || uid == content.pride.uid
              }
              design={viewType}
            />
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <Title label={month + '月分褒めたたえよう'} />
      <div className="flex w-full flex-row justify-end gap-5 ">
        <BsCardList
          className={'h-10 w-10 hover:cursor-pointer ' + viewCss[viewType].detail}
          onClick={() => setViewType('detail')}
        />
        <BsList
          className={'h-10 w-10 hover:cursor-pointer ' + viewCss[viewType].simple}
          onClick={() => setViewType('simple')}
        />
      </div>
      <ViewCardComponent />
    </>
  );
};
