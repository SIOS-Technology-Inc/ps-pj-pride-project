import { useState } from 'react';

import { PrideThumbsUpDetailCard } from '@/components/modules/PrideThumbsUpDetailCard/PrideThumbsUpDetailCard';
import { PrideThumbsUpSimpleCard } from '@/components/modules/PrideThumbsUpSimpleCard/PrideThumbsUpSimpleCard';
import { ViewTypeTab } from '@/components/modules/ViewTypeTab/ViewTypeTab';
import { ViewTabStyle } from '@/constants/ViewTabStyle';
import { PrideContentType } from '@/types/contentPride.type';

type PastListProps = {
  prides: PrideContentType[];
};

export const PastList = (props: PastListProps) => {
  const { prides } = props;
  const [viewType, setViewType] = useState<keyof typeof ViewTabStyle>('detail');
  const onClickViewType = (value: keyof typeof ViewTabStyle) => {
    setViewType(value);
  };
  const groupStyle = {
    simple: 'gap-2',
    detail: 'gap-10',
  } as const satisfies Record<keyof typeof ViewTabStyle, string>;

  return (
    <>
      <ViewTypeTab select={viewType} onClick={onClickViewType} />
      <div className={'flex w-full flex-col ' + groupStyle[viewType]}>
        {prides.length === 0 && <div className="">まだ投稿がありません</div>}
        {viewType === 'simple' ? (
          <>
            {prides.map((content) => (
              <PrideThumbsUpSimpleCard key={content.uid} prideContent={content} />
            ))}
          </>
        ) : (
          <>
            {prides.map((content) => (
              <PrideThumbsUpDetailCard key={content.uid} prideContent={content} />
            ))}
          </>
        )}
      </div>
    </>
  );
};
