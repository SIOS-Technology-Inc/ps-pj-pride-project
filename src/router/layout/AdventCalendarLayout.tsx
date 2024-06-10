import { Outlet } from 'react-router-dom';

import { ErrorBoundaryComponent } from '@/utilities/ErrorBoundary';

export const AdventCalendarLayout = () => {
  return (
    <section className=" flex h-full min-h-screen w-full flex-col items-center font-zen">
      <main className=" my-10 flex w-full max-w-5xl grow flex-col items-center gap-12">
        <ErrorBoundaryComponent>
          <Outlet />
        </ErrorBoundaryComponent>
      </main>
    </section>
  );
};
