import { Suspense } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { Outlet, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { LinkPage } from '@/components/layout/LinksPage';
import { AzureADPage } from '@/components/pages/AADB2C/AzureADPage';
import { MyPage as MypageAADB2C } from '@/components/pages/AADB2C/MyPage';
import { AxiosClientPage } from '@/components/pages/AxiosClientPage';
import { CatPage } from '@/components/pages/CatPage';
import { ErrorBoundaryPage } from '@/components/pages/ErrorBoundaryPage';
import { ErrorBoundaryPageVer2 } from '@/components/pages/ErrorBoundaryPageVer2';
import { FirebasePage } from '@/components/pages/FirebasePage/FirebasePage';
import { MyPage as MyPageFirebase } from '@/components/pages/FirebasePage/MyPage';
import { FirestorePage } from '@/components/pages/FirestorePage';
import { MicroCMSPage } from '@/components/pages/MicroCMSPage';
import { PopupPage } from '@/components/pages/PopupPage';
import { StoragePage } from '@/components/pages/StoragePage';
import { SwrPage } from '@/components/pages/SwrPage';
import { Test } from '@/components/pages/Test';
import { AxiosErrorHandlingTestComponent } from '@/utilities/AxiosClientTestComponent';

import {
  RouterAuthenticatedCheck as RouterAuthenticatedCheckAADB2C,
  RouterHasAuthenticated as RouterHasAuthenticatedAADB2C,
} from './RouterAuthenticateConfigAADB2C';
import {
  RouterAuthenticatedCheck as RouterAuthenticatedCheckFirebase,
  RouterHasAuthenticated as RouterHasAuthenticatedFirebase,
} from './RouterAuthenticateConfigFirebase';

export const RouterConfig = () => {
  const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
    return (
      <>
        <pre>react-error-boundary {error.message}</pre>
        <button type="button" onClick={resetErrorBoundary}>
          reset button
        </button>
      </>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LinkPage />}>
          <Route index element={<>とりま動いたから良しとしようや</>} />
          <Route path="/storage" element={<StoragePage />} />
          <Route path="/errorBoundary" element={<ErrorBoundaryPage />} />
          <Route
            path="/firebase"
            element={<RouterAuthenticatedCheckFirebase component={<Outlet />} />}
          >
            <Route index element={<FirebasePage />} />
            <Route
              path="mypage"
              element={<RouterHasAuthenticatedFirebase component={<MyPageFirebase />} />}
            />
          </Route>
          <Route path="swr" element={<SwrPage />} />
          <Route path="/azure" element={<RouterAuthenticatedCheckAADB2C component={<Outlet />} />}>
            <Route index element={<AzureADPage />} />
            <Route
              path="mypage"
              element={<RouterHasAuthenticatedAADB2C component={<MypageAADB2C />} />}
            />
          </Route>
          <Route path="axios" element={<AxiosClientPage />} />
          <Route path="microCMS" element={<MicroCMSPage />} />
          <Route path="popup" element={<PopupPage />} />
          <Route path="cat" element={<CatPage />} />
          <Route path="firestore" element={<FirestorePage />} />
          <Route
            path="test"
            element={
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <AxiosErrorHandlingTestComponent>
                  <Suspense fallback={<>チェック中</>}>
                    <Test />
                  </Suspense>
                </AxiosErrorHandlingTestComponent>
              </ErrorBoundary>
            }
          />
          <Route path="error" element={<ErrorBoundaryPageVer2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
