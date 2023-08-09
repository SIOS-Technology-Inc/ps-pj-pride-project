import { TopLayout } from '@/components/layout/TopLayout';
import { InputPage } from '@/components/pages/InputPage';
import { Outlet, Route, Routes } from 'react-router-dom';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<TopLayout />}>
        <Route index element={<InputPage />} />
        <Route path="thumbs-up" element={<main>褒褒めるところ</main>} />
      </Route>
    </Routes>
  );
};
