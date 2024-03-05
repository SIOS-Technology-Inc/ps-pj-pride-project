import { useNavigate } from 'react-router-dom';

import NotFoundImage from 'src/assets/404.png';

import { Button } from '@/components/common/Button/Button';

import { Title } from '../common/Title/Title';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Title label="404 Not Found !" />
      <img src={NotFoundImage} className="h-64 w-64 object-contain" alt="" />
      <div className="flex flex-col gap-2 text-lg">
        <span>デバックありがとうございます！</span>
        <Button label="トップページに戻る" color="blue" onClick={() => navigate('/')}></Button>
      </div>
    </>
  );
};
