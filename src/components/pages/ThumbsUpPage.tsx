import { TitleComponent } from '../modules/TitleComponent';
import { ViewCardComponent } from '../modules/ViewComponent/ViewCardComponent';

export const ThumbsUpPage = () => {
  const date = new Date();
  const month = date.getMonth() + 1;

  return (
    <>
      <TitleComponent label={month + '月分褒めたたえよう'} />
      <div className="flex w-full flex-row flex-wrap justify-between gap-y-10">
        <ViewCardComponent
          title="アピール文アピール文アピール文アピール文"
          customerName="対象サービス対象"
          memo="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          serviceName="対象サービス対象"
          thumbsUsers={[]}
          userName="田中龍之介"
          userPhotoURL=""
        />
      </div>
    </>
  );
};
