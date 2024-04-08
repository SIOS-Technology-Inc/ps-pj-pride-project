import { useState } from 'react';

type IconButtonProps = {
  disable?: boolean;
  onClick: () => void;
  label: string;
  children: React.ReactNode;
};

export const IconButton = (props: IconButtonProps) => {
  const { onClick, disable, children, label } = props;
  const [firstClick, setFirstClick] = useState<boolean>(false);

  const onClickThumbsUpButton = async () => {
    setFirstClick(true);
    await onClick();
    setFirstClick(false);
  };
  return (
    <>
      <button
        className={
          'flex flex-row items-center gap-1 rounded-lg p-2 transition-all ' +
          (disable
            ? ' bg-[#3d9ceb] p-2 text-white'
            : ' bg-[#DBDBDB] p-2 text-gray hover:-translate-x-1 hover:-translate-y-1')
        }
        onClick={onClickThumbsUpButton}
        disabled={firstClick || disable}
      >
        <span>{label}</span>
        {children}
      </button>
    </>
  );
};
