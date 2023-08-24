import { Route, Routes } from 'react-router-dom';

import { TopLayout } from '@/components/layout/TopLayout';
import { InputPage } from '@/components/pages/InputPage';
import { ThumbsUpPage } from '@/components/pages/ThumbsUpPage';
import { TopPage } from '@/components/pages/TopPage';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<TopLayout />}>
        <Route index element={<TopPage />} />
        <Route path="input" element={<InputPage />} />
        <Route path="thumbs-up" element={<ThumbsUpPage />} />
      </Route>
    </Routes>
  );
};
