import { TopLayout } from '@/components/layout/TopLayout';
import { Outlet, Route, Routes } from 'react-router-dom';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<TopLayout />}>
        <Route index element={<main>自慢を書くところ</main>} />
        <Route path="thumbs-up" element={<main>褒褒めるところ</main>} />
      </Route>
    </Routes>
  );
};
