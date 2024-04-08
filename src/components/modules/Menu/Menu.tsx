import { Children } from 'react';

type MenuProps = {
  children: React.ReactNode;
};

export const Menu = (props: MenuProps) => {
  const { children } = props;
  return (
    <>
      <div className="flex w-full flex-row justify-around">
        {Children.map(children, (child) => child)}
      </div>
    </>
  );
};
