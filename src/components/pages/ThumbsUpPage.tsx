import { TitleComponent } from '../modules/TitleComponent';

export const ThumbsUpPage = () => {
  const date = new Date();
  const month = date.getMonth() + 1;

  return (
    <>
      <TitleComponent label={month + '月分褒めたたえよう'} />
    </>
  );
};
