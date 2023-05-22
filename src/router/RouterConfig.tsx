import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<>index</>} />
      </Route>
    </Routes>
  );
};
