import { PrideContentType } from '@/types/contentsType';

import { TitleComponent } from '../modules/TitleComponent';
import { ViewCardComponent } from '../modules/ViewComponent/ViewCardComponent';

export const ThumbsUpPage = () => {
  const date = new Date();
  const month = date.getMonth() + 1;

  const prideContent: PrideContentType = {
    title: 'アピール文アピール文アピール文アピール文',
    customerName: '対象サービス対象',
    sentence:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    serviceName: '対象サービス対象',
    thumbsUsers: [],
    userName: '田中龍之介',
    userPhotoURL: '',
  };

  return (
    <>
      <TitleComponent label={month + '月分褒めたたえよう'} />
      <div className="flex w-full flex-row flex-wrap justify-between gap-y-10">
        <ViewCardComponent
          prideContent={prideContent}
          onClick={(number: number) => {
            number;
          }}
          uid="xxxx"
        />
      </div>
    </>
  );
};
