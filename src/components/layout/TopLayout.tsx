import { Outlet } from 'react-router-dom';
import { FooterComponent, HeaderComponent } from '../modules/CommonComponent';
import { MenuComponent } from '../modules/MenuComponent';

export const TopLayout = () => {
  return (
    <>
      <section className="flex flex-col w-full h-full font-zen min-h-screen items-center">
        <HeaderComponent />
        <main className="w-full max-w-3xl flex-col px-[30px] items-center flex flex-grow mt-2 gap-3">
          <MenuComponent />
          <Outlet />
        </main>
        <FooterComponent />
      </section>
    </>
  );
};
