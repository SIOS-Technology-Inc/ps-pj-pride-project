import { useState } from 'react';

import { BsCardList, BsList } from 'react-icons/bs';

import { usePrideContent } from '@/hooks/api/usePrideContent';
import { useFetchThisMonthPrideList } from '@/hooks/api/useReadPrideContent';
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';

import { TitleComponent } from 'modules/TitleComponent';
import {
  ViewLandscapeDetailCardComponent,
  ViewLandscapeSimpleCardComponent,
} from 'modules/ViewComponent/ViewCardComponent';

import { LoadingComponent } from '@/utilities/LoadingComponent';

export const ThumbsUpPage = () => {
  const date = new Date();
  const month = date.getMonth() + 1;

  const { user } = useFirebaseAuth();
  const { pushLikeForPride } = usePrideContent();
  const { prideContentList, isLoadingPrideContent, prideContentMutate } =
    useFetchThisMonthPrideList();

  const onClickThumbsUpButton = async (uid: string) => {
    console.log(uid);
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
    if (viewType == 'detail') {
      return (
        <>
          <div className="flex w-full flex-col gap-10">
            {prideContentList.map((content) => (
              <ViewLandscapeDetailCardComponent
                key={content.uid}
                prideContent={content.pride}
                onClick={() => onClickThumbsUpButton(content.uid)}
              />
            ))}
          </div>
        </>
      );
    }
    if (viewType == 'simple') {
      return (
        <>
          <div className="flex w-full flex-col gap-2">
            {prideContentList.map((content) => (
              <ViewLandscapeSimpleCardComponent
                key={content.uid}
                prideContent={content.pride}
                onClick={() => onClickThumbsUpButton(content.uid)}
              />
            ))}
          </div>
        </>
      );
    }
    return <></>;
  };

  return (
    <>
      <TitleComponent label={month + '月分褒めたたえよう'} />
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
