import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import EvaluationLinkImage from 'src/assets/evaluation-link.png';
import InputLinkImage from 'src/assets/input-link.png';

export const MenuComponent = () => {
  const location = useLocation();
  const pathName = useMemo(() => location.pathname, [location]);

  return (
    <>
      <div className="flex w-full flex-row justify-around">
        <Link to={'/'} className={pathName == '/' ? '' : 'opacity-40'}>
          <img src={InputLinkImage} alt="" className="w-32 object-contain hover:cursor-pointer" />
        </Link>
        <Link to={'/thumbs-up'} className={pathName == '/thumbs-up' ? '' : 'opacity-40'}>
          <img
            src={EvaluationLinkImage}
            className="w-32 object-contain hover:cursor-pointer"
            alt=""
          />
        </Link>
      </div>
    </>
  );
};
