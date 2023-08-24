import { useMemo, useState } from 'react';

import { BsCardList, BsList } from 'react-icons/bs';

import { useDIPrideContent } from '@/hooks/api/useDIPrideContent';
import { useFetchThisMonthPrideList } from '@/hooks/api/useReadPrideContent';
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';
import { LoadingComponent } from '@/utilities/LoadingComponent';

import { TitleComponent } from '../modules/TitleComponent';
import {
  ViewCardComponent,
  ViewLandscapeCardComponent,
} from '../modules/ViewComponent/ViewCardComponent';

export const ThumbsUpPage = () => {
  const date = new Date();
  const month = date.getMonth() + 1;

  const { user } = useFirebaseAuth();
  const { pushLikeForPride } = useDIPrideContent();
  const { prideContentList, isLoadingPrideContent, prideContentMutate } =
    useFetchThisMonthPrideList();

  const onClickThumbsUpButton = async (uid: string) => {
    console.log(uid);
    await pushLikeForPride(uid, user.photoURL);
    prideContentMutate();
  };

  const [viewType, setViewType] = useState<'card' | 'list'>('card');
  const viewCss: { card: string; list: string } = useMemo(() => {
    if (viewType == 'card') return { card: 'opacity-40', list: '' };
    if (viewType == 'list') return { card: '', list: 'opacity-40' };
    return { card: '', list: '' };
  }, [viewType]);

  if (isLoadingPrideContent || !prideContentList) return <LoadingComponent />;

  return (
    <>
      <TitleComponent label={month + '月分褒めたたえよう'} />
      <div className="flex w-full flex-row justify-end gap-5 ">
        <BsCardList
          className={'h-10 w-10 hover:cursor-pointer ' + viewCss.card}
          onClick={() => setViewType('card')}
        />
        <BsList
          className={'h-10 w-10 hover:cursor-pointer ' + viewCss.list}
          onClick={() => setViewType('list')}
        />
      </div>
      {viewType == 'card' ? (
        <div className="flex w-full flex-row flex-wrap justify-between gap-y-10">
          {prideContentList.map((content) => (
            <ViewCardComponent
              key={content.uid}
              prideContent={content.pride}
              onClick={() => onClickThumbsUpButton(content.uid)}
            />
          ))}
        </div>
      ) : (
        <div className="flex w-full flex-col gap-10">
          {prideContentList.map((content) => (
            <ViewLandscapeCardComponent
              key={content.uid}
              prideContent={content.pride}
              onClick={() => onClickThumbsUpButton(content.uid)}
            />
          ))}
        </div>
      )}
    </>
  );
};