import { useEffect, useState } from 'react';

import {
  useFetchMonthPrideList,
  useFetchTargetMonthPrideList,
} from '@/hooks/api/useReadPrideContent';

import { TitleComponent } from 'modules/TitleComponent';

import { LoadingComponent } from '@/utilities/LoadingComponent';

import { PastViewLandscapeCardComponent } from '../modules/ViewComponent/ViewCardComponent';

export const PastListPage = () => {
  const [targetId, setTargetId] = useState<string>('');
  const { prideMonthList, isLoadingPrideMonthList } = useFetchMonthPrideList();

  const { prideContentTargetList, isLoadingPrideContentTargetList } =
    useFetchTargetMonthPrideList(targetId);

  useEffect(() => {
    if (!prideMonthList || prideMonthList.length == 0) return;
    setTargetId(prideMonthList[0]);
  }, [prideMonthList]);

  const onClickPrideMonth = (monthString: string) => {
    setTargetId(monthString);
    window.scrollTo(0, 0);
  };

  if (isLoadingPrideMonthList || !prideMonthList) return <LoadingComponent />;

  return (
    <>
      <TitleComponent label="過去の情報" />
      <div className="relative flex w-full flex-row items-start gap-4">
        <div className="sticky top-0 flex w-72 flex-col rounded-lg p-6 shadow-lg">
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
          {isLoadingPrideContentTargetList || !prideContentTargetList ? (
            <LoadingComponent />
          ) : (
            prideContentTargetList.map((content) => (
              <PastViewLandscapeCardComponent key={content.uid} prideContent={content.pride} />
            ))
          )}
        </div>
      </div>
    </>
  );
};
