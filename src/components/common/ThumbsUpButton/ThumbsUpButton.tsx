import { useState } from 'react';

import { FiThumbsUp } from 'react-icons/fi';

type ThumbsUpButtonProps = {
  disable?: boolean;
  onClick: () => void;
};

export const ThumbsUpButton = (props: ThumbsUpButtonProps) => {
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
