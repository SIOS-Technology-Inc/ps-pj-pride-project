import { useState } from 'react';

import { useFetchTargetMonthPrideList } from '@/hooks/useReadPrideContent';

import { TitleComponent } from 'modules/TitleComponent';

import { LoadingComponent } from '@/utilities/LoadingComponent';

import { PastViewLandscapeCardComponent } from '../modules/ViewComponent/ViewCardComponent';

export const PastListPage = () => {
  const nowDate = new Date();

  const [targetId, setTargetId] = useState<string>(
    nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-pride'
  );

  const { prideContentTargetList, isLoadingPrideContentTargetList } =
    useFetchTargetMonthPrideList(targetId);

  const prideMonthList = [0, 1, 2].map(
    (value) => nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1 - value) + '-pride'
  );

  const onClickPrideMonth = (monthString: string) => {
    setTargetId(monthString);
    window.scrollTo(0, 0);
  };

  const PastPrideContentList = () => {
    if (isLoadingPrideContentTargetList || !prideContentTargetList) return <LoadingComponent />;
    if (prideContentTargetList.length == 0)
      return (
        <div className="flex h-56 w-full items-center justify-center rounded-md border border-gray/70 text-2xl">
          情報がなっしぶる
        </div>
      );
    return (
      <>
        {prideContentTargetList.map((content) => (
          <PastViewLandscapeCardComponent key={content.uid} prideContent={content.pride} />
        ))}
      </>
    );
  };

  return (
    <>
      <TitleComponent label="過去の情報" />
      <div className="relative flex w-full flex-row items-start gap-4">
        <div className="sticky top-0 flex w-72 flex-col rounded-lg border border-gray/70 p-6">
          {prideMonthList.map((value) => (
            <span
              key={value}
              className={'hover:cursor-pointer ' + (targetId == value ? '' : ' opacity-40')}
              onClick={() => onClickPrideMonth(value)}
            >
              {value}
            </span>
          ))}
        </div>
        <div className="flex w-full flex-col gap-2">
          <PastPrideContentList />
        </div>
      </div>
    </>
  );
};
