import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';
import Logo from 'src/assets/logo.svg';
import FooterLogoFox1 from 'src/assets/fox1.png';
import FooterLogoFox2 from 'src/assets/fox2.png';

import { FiLogOut } from 'react-icons/fi';

export const HeaderComponent = () => {
  const { singOutAction, user } = useFirebaseAuth();
  return (
    <>
      <header className="w-full flex flex-row justify-between items-end px-[30px] border-b-2 border-gray py-3">
        <img src={Logo} alt="logo" />
        <div className="flex flex-row items-center gap-2 ">
          <img src={user.photoURL} alt="" className="w-10 h-10 object-contain rounded-full" />
          <span className="text-lg font-bold">{user.displayName}でログイン中</span>
          <FiLogOut
            className="h-8 w-auto hover:cursor-pointer rounded-full hover:bg-gray p-2 transition-colors hover:text-white"
            onClick={singOutAction}
          />
        </div>
      </header>
    </>
  );
};

export const FooterComponent = () => {
  return (
    <>
      <footer className="w-full flex flex-row h-36 bg-gray justify-end px-[30px]">
        <img src={FooterLogoFox1} className="w-32 object-contain" alt="" />
        <img src={FooterLogoFox2} className="w-32 object-contain" alt="" />
      </footer>
    </>
  );
};
