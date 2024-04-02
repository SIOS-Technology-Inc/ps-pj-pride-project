import { Outlet } from 'react-router-dom';

import { AxiosConfig } from '@/utilities/AxiosConfig';
import { ErrorBoundaryComponent } from '@/utilities/ErrorBoundary';
import { SWRConfigComponent } from '@/utilities/SwrConfig';

export const TimerLayout = () => {
  return (
    <section className=" flex h-full min-h-screen w-full flex-col items-center font-zen">
      <main className=" my-10 flex w-full max-w-5xl grow flex-col items-center gap-12">
        <ErrorBoundaryComponent>
          <AxiosConfig>
            <SWRConfigComponent>
              <Outlet />
            </SWRConfigComponent>
          </AxiosConfig>
        </ErrorBoundaryComponent>
      </main>
    </section>
  );
};
