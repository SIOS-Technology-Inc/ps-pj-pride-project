import { Navigate, useLocation } from 'react-router-dom';

const NavigationPage = ({ redirect }: { redirect: string }) => {
  return (
    <>
      <Navigate to={redirect} state={{ from: useLocation() }} replace={false} />
    </>
  );
};
