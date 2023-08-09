import { TitleComponent } from '../modules/TitleComponent';
import { InputBoardComponent } from '../modules/inputComponent/InputBoardComponent';

export const InputPage = () => {
  const date = new Date();
  const month = date.getMonth() + 1;

  return (
    <>
      <TitleComponent label={month + '月の自慢を書こう'} />
      <InputBoardComponent />
    </>
  );
};
