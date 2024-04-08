import Logo from 'src/assets/logo.svg';

import { firebaseAuthType } from '@/types/firebaseAuthType';

type HeaderProps = {
  user: firebaseAuthType;
};

export const Header = (props: HeaderProps) => {
  const { user } = props;
  return (
    <>
      <header className="flex w-full flex-row items-end justify-between border-b-2 border-gray px-[30px] py-3">
        <img src={Logo} alt="logo" />
        <div className="flex flex-row items-center gap-2 ">
          <img src={user.photoURL} alt="" className="h-10 w-10 rounded-full object-contain" />
          <span className="text-lg font-bold">{user.displayName}でログイン中</span>
        </div>
      </header>
    </>
  );
};
