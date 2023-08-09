import { Outlet } from 'react-router-dom';

import { FooterComponent, HeaderComponent } from '../modules/CommonComponent';
import { MenuComponent } from '../modules/MenuComponent';

export const TopLayout = () => {
  return (
    <>
      <section className="flex h-full min-h-screen w-full flex-col items-center font-zen">
        <HeaderComponent />
        <main className="mt-2 flex w-full max-w-3xl grow flex-col items-center gap-3 px-[30px]">
          <MenuComponent />
          <Outlet />
        </main>
        <FooterComponent />
      </section>
    </>
  );
};
