import { Outlet } from 'react-router-dom';

import { useFirebaseAuth } from '@/hooks/useAuth';

import { HasAuthenticationRouter } from '@/router/HasAuthenticationRouter';
import { ErrorBoundaryComponent } from '@/utilities/ErrorBoundary';
import { SWRConfigComponent } from '@/utilities/SwrConfig';

import { Footer } from '../../components/common/Footer/Footer';
import { Header } from '../../components/common/Header/Header';

export const SenryuLayout = () => {
  const { user } = useFirebaseAuth();
  return (
    <>
      <section className="flex h-full min-h-screen w-full flex-col items-center font-zen">
        <HasAuthenticationRouter>
          <Header user={user} />
          <main className="my-10 flex w-full max-w-5xl grow flex-col items-center gap-12 ">
            <ErrorBoundaryComponent>
              <SWRConfigComponent>
                <Outlet />
              </SWRConfigComponent>
            </ErrorBoundaryComponent>
          </main>
          <Footer />
        </HasAuthenticationRouter>
      </section>
    </>
  );
};
