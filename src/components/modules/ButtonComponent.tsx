import { FiThumbsUp } from 'react-icons/fi';

type ButtonComponentProps = {
  label: string;
  onClick?: () => void;
};
export const ButtonComponent = (props: ButtonComponentProps) => {
  const { label, onClick } = props;
  return (
    <>
      <button
        type={onClick ? 'button' : 'submit'}
        className="flex items-center justify-center border-2 border-gray py-3 px-8 text-lg"
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
};

type ThumbsUpButtonType = {
  onClick: () => void;
};
export const ThumbsUpButton = (props: ThumbsUpButtonType) => {
  const { onClick } = props;
  return (
    <>
      <button
        className="flex flex-row items-center gap-1 rounded-lg bg-[#DBDBDB] p-2 text-gray transition-transform hover:-translate-x-1 hover:-translate-y-1"
        onClick={onClick}
      >
        <span>いいね！</span>
        <FiThumbsUp />
      </button>
    </>
  );
};
