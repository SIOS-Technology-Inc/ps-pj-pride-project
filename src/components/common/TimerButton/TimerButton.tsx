import { ButtonDesignStyle } from '@/constants/ButtonDesignStyle';

type TimerButtonProps = {
  label: string;
  onClick: () => void;
  color: keyof typeof ButtonDesignStyle;
  disabled?: boolean;
};

export const TimerButton = (props: TimerButtonProps) => {
  const { label, onClick, color, disabled } = props;
  return (
    <button
      className={
        ButtonDesignStyle[color] +
        ' inline-flex items-center justify-center min-w-[100px] h-12 rounded-md font-bold ' +
        (disabled ? ' cursor-not-allowed opacity-50' : ' cursor-pointer')
      }
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
