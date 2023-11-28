import { Outlet } from 'react-router-dom';

import { RouterAuthenticatedCheck } from '@/router/RouterAuthenticatedCheck';
import { ErrorBoundaryComponent } from '@/utilities/ErrorBoundary';
import { SWRConfigComponent } from '@/utilities/SwrConfig';

import { FooterComponent, HeaderComponent } from '../modules/CommonComponent';

export const SenryuLayout = () => {
  return (
    <>
      <section className="flex h-full min-h-screen w-full flex-col items-center font-zen">
        <RouterAuthenticatedCheck>
          <HeaderComponent />
          <main className="my-10 flex w-full max-w-5xl grow flex-col items-center gap-12 ">
            <ErrorBoundaryComponent>
              <SWRConfigComponent>
                <Outlet />
              </SWRConfigComponent>
            </ErrorBoundaryComponent>
          </main>
          <FooterComponent />
        </RouterAuthenticatedCheck>
      </section>
    </>
  );
};
