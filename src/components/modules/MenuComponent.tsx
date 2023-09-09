import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import EvaluationLinkImage from 'src/assets/evaluation-link.png';
import InputLinkImage from 'src/assets/input-link.png';
import PastLinkImage from 'src/assets/past-link.png';
import TopLinkImage from 'src/assets/top-link.png';

export const MenuComponent = () => {
  const location = useLocation();
  const pathName = useMemo(() => location.pathname, [location]);

  return (
    <>
      <div className="flex w-full flex-row justify-around">
        <Link to={'/'} className={pathName == '/' ? '' : 'opacity-40'}>
          <img src={TopLinkImage} alt="" className="w-32 object-contain hover:cursor-pointer" />
        </Link>
        <Link to={'/input'} className={pathName == '/input' ? '' : 'opacity-40'}>
          <img src={InputLinkImage} alt="" className="w-32 object-contain hover:cursor-pointer" />
        </Link>
        <Link to={'/thumbs-up'} className={pathName == '/thumbs-up' ? '' : 'opacity-40'}>
          <img
            src={EvaluationLinkImage}
            className="w-32 object-contain hover:cursor-pointer"
            alt=""
          />
        </Link>
        <Link to={'/past'} className={pathName == '/past' ? '' : 'opacity-40'}>
          <img src={PastLinkImage} className="w-32 object-contain hover:cursor-pointer" alt="" />
        </Link>
      </div>
    </>
  );
};
