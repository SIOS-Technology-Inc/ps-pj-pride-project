import { Route, Routes } from 'react-router-dom';

import { ImagePage } from '@/components/pages/ImagePage';
import { InputPage } from '@/components/pages/InputPage';
import { NotFoundPage } from '@/components/pages/NotFountPage';
import { PastListPage } from '@/components/pages/PastListPage';
import { ThumbsUpPage } from '@/components/pages/ThumbsUpPage';
import { TimerInputPage } from '@/components/pages/TimerInputPage';
import { TimerPage } from '@/components/pages/TimerPage';
import { TopPage } from '@/components/pages/TopPage';
import { HasAuthenticationRouter } from '@/router/HasAuthenticationRouter';
import { TimerLayout } from '@/router/layout/TimerLayout';
import { TopLayout } from '@/router/layout/TopLayout';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HasAuthenticationRouter />}>
        <Route path="/" element={<TopLayout />}>
          <Route index element={<TopPage />} />
          <Route path="input" element={<InputPage />} />
          <Route path="thumbs-up" element={<ThumbsUpPage />} />
          <Route path="past" element={<PastListPage />} />
        </Route>
        <Route path="/timer" element={<TimerLayout />}>
          <Route index element={<TimerPage />} />
          <Route path="input" element={<TimerInputPage />} />
        </Route>
        <Route path="/image" element={<ImagePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
