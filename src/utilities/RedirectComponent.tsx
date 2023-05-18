import { Navigate, useLocation } from 'react-router-dom';

export const RedirectComponent = ({ redirect }: { redirect: string }) => {
  return (
    <>
      <Navigate to={redirect} state={{ from: useLocation() }} replace={false} />
    </>
  );
};
