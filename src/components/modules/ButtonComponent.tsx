import { useState } from 'react';

import { FiThumbsUp } from 'react-icons/fi';

type ButtonComponentProps = {
  label: string;
  color: keyof typeof DesignCode;
  onClick?: () => void;
};
const DesignCode = {
  default: ' border-gray text-gray',
  blue: ' border-event text-event',
} as const satisfies Record<string, string>;

export const ButtonComponent = ({ label, color = 'default', onClick }: ButtonComponentProps) => {
  return (
    <>
      <button
        type={onClick ? 'button' : 'submit'}
        className={
          'flex items-center justify-center border-2 py-3 px-8 text-lg ' + DesignCode[color]
        }
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
};

type ThumbsUpButtonType = {
  disable?: boolean;
  onClick: () => void;
};
export const ThumbsUpButton = (props: ThumbsUpButtonType) => {
  const { onClick, disable } = props;
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
        <span>いいね！</span>
        <FiThumbsUp />
      </button>
    </>
  );
};
