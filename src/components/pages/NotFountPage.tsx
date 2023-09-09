import NotFoundImage from 'src/assets/404.png';

import { TitleComponent } from '../modules/TitleComponent';
export const NotFoundPage = () => {
  return (
    <>
      <TitleComponent label="404 Not Found !" />
      <img src={NotFoundImage} className="h-64 w-64 object-contain" alt="" />
      <div className="flex flex-col gap-2 text-lg">
        <span>デバックありがとうございます！</span>
        <span>上のナビバーから遷移してね♡</span>
      </div>
    </>
  );
};
