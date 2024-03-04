import { Outlet, Route, Routes } from 'react-router-dom';

import { InputPage } from '@/components/pages/InputPage';
import { NotFoundPage } from '@/components/pages/NotFountPage';
import { PastListPage } from '@/components/pages/PastListPage';
import { ThumbsUpPage } from '@/components/pages/ThumbsUpPage';
import { TopPage } from '@/components/pages/TopPage';
import { TopLayout } from '@/router/layout/TopLayout';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="/" element={<TopLayout />}>
          <Route index element={<TopPage />} />
          <Route path="input" element={<InputPage />} />
          <Route path="thumbs-up" element={<ThumbsUpPage />} />
          <Route path="past" element={<PastListPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
