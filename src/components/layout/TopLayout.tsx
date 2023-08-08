import { Outlet } from 'react-router-dom';
import { FooterComponent, HeaderComponent } from '../modules/CommonComponent';

export const TopLayout = () => {
  return (
    <>
      <section className="flex flex-col w-full h-full  font-zen min-h-screen">
        <HeaderComponent />
        <main className="flex-col px-[30px] items-center flex flex-grow mt-2 gap-3">
          <div className="flex flex-row justify-around w-full">link達を書くところ</div>
          <Outlet />
        </main>
        <FooterComponent />
      </section>
    </>
  );
};
