import NotFoundImage from 'src/assets/404.png';

import { Title } from '../common/Title/Title';

export const NotFoundPage = () => {
  return (
    <>
      <Title label="404 Not Found !" />
      <img src={NotFoundImage} className="h-64 w-64 object-contain" alt="" />
      <div className="flex flex-col gap-2 text-lg">
        <span>デバックありがとうございます！</span>
        <span>上のナビバーから遷移してね♡</span>
      </div>
    </>
  );
};
