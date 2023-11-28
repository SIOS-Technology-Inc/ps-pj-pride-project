import { Outlet, Route, Routes } from 'react-router-dom';

import { SenryuLayout } from '@/components/layout/SenryuLayout';
import { TopLayout } from '@/components/layout/TopLayout';
import { InputPage } from '@/components/pages/InputPage';
import { NotFoundPage } from '@/components/pages/NotFountPage';
import { PastListPage } from '@/components/pages/PastListPage';
import { SenryuInput } from '@/components/pages/Senryu/SenryuInput';
import { SenryuTop } from '@/components/pages/Senryu/SenryuTop';
import { ThumbsUpPage } from '@/components/pages/ThumbsUpPage';
import { TopPage } from '@/components/pages/TopPage';

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
        <Route path="senryu" element={<SenryuLayout />}>
          <Route index element={<SenryuTop />} />
          <Route path="input" element={<SenryuInput />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
