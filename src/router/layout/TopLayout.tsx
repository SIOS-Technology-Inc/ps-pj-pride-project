import { useMemo } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import EvaluationLinkImage from 'src/assets/evaluation-link.png';
import InputLinkImage from 'src/assets/input-link.png';
import PastLinkImage from 'src/assets/past-link.png';
import TopLinkImage from 'src/assets/top-link.png';

import { useAuthenticated } from '@/hooks/useAuth';

import { Footer } from '@/components/common/Footer/Footer';
import { Header } from '@/components/common/Header/Header';
import { MenuItem } from '@/components/common/MenuItem/MenuItem';
import { Menu } from '@/components/modules/Menu/Menu';
import { AxiosConfig } from '@/utilities/AxiosConfig';
import { ErrorBoundaryComponent } from '@/utilities/ErrorBoundary';
import { SWRConfigComponent } from '@/utilities/SwrConfig';

export const TopLayout = () => {
  const { user } = useAuthenticated();
  const location = useLocation();
  const pathName = useMemo(() => location.pathname, [location]);
  const navigate = useNavigate();

  return (
    <>
      <section className="flex h-full min-h-screen w-full flex-col items-center font-zen">
        <Header user={user} />
        <main className="my-10 flex w-full max-w-5xl grow flex-col items-center gap-12 ">
          <Menu>
            <MenuItem
              path={() => navigate('/')}
              text="top"
              active={pathName == '/'}
              image={TopLinkImage}
              imageOnly
            />
            <MenuItem
              path={() => navigate('/input')}
              text="input"
              active={pathName == '/input'}
              image={InputLinkImage}
              imageOnly
            />
            <MenuItem
              path={() => navigate('/thumbs-up')}
              text="thumbs-up"
              active={pathName == '/thumbs-up'}
              image={EvaluationLinkImage}
              imageOnly
            />
            <MenuItem
              path={() => navigate('/past')}
              text="past"
              active={pathName == '/past'}
              image={PastLinkImage}
              imageOnly
            />
          </Menu>
          <ErrorBoundaryComponent>
            <AxiosConfig>
              <SWRConfigComponent>
                <Outlet />
              </SWRConfigComponent>
            </AxiosConfig>
          </ErrorBoundaryComponent>
        </main>
        <Footer />
      </section>
    </>
  );
};
