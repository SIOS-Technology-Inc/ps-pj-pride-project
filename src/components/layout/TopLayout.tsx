import { Outlet } from 'react-router-dom';

import { FooterComponent, HeaderComponent } from '../modules/CommonComponent';
import { MenuComponent } from '../modules/MenuComponent';

export const TopLayout = () => {
  return (
    <>
      <section className="flex h-full min-h-screen w-full flex-col items-center font-zen">
        <HeaderComponent />
        <main className="my-10 flex w-full max-w-4xl grow flex-col items-center gap-3 ">
          <MenuComponent />
          <Outlet />
        </main>
        <FooterComponent />
      </section>
    </>
  );
};
