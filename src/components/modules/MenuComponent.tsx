import InputLinkImage from 'src/assets/input-link.png';
import EvaluationLinkImage from 'src/assets/evaluation-link.png';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

export const MenuComponent = () => {
  const location = useLocation();
  const pathName = useMemo(() => location.pathname, [location]);

  return (
    <>
      <div className="flex flex-row justify-around w-full">
        <Link to={'/'} className={pathName == '/' ? 'opacity-40' : ''}>
          <img src={InputLinkImage} alt="" className="w-32 object-contain hover:cursor-pointer" />
        </Link>
        <Link to={'/thumbs-up'} className={pathName == '/thumbs-up' ? 'opacity-40' : ''}>
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
