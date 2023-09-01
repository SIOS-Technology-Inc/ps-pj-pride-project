import FooterLogoFox1 from 'src/assets/fox1.png';
import FooterLogoFox2 from 'src/assets/fox2.png';
import Logo from 'src/assets/logo.svg';

import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';

export const HeaderComponent = () => {
  const { user } = useFirebaseAuth();
  return (
    <>
      <header className="flex w-full flex-row items-end justify-between border-b-2 border-gray px-[30px] py-3">
        <img src={Logo} alt="logo" />
        <div className="flex flex-row items-center gap-2 ">
          <img src={user.photoURL} alt="" className="h-10 w-10 rounded-full object-contain" />
          <span className="text-lg font-bold">{user.displayName}でログイン中</span>
          {/* <FiLogOut
            className="h-8 w-auto rounded-full p-2 transition-colors hover:cursor-pointer hover:bg-gray hover:text-white"
            onClick={singOutAction}
          /> */}
        </div>
      </header>
    </>
  );
};

export const FooterComponent = () => {
  return (
    <>
      <footer className="flex h-36 w-full flex-row justify-end bg-gray px-[30px]">
        <img src={FooterLogoFox1} className="w-32 object-contain" alt="" />
        <img src={FooterLogoFox2} className="w-32 object-contain" alt="" />
      </footer>
    </>
  );
};
