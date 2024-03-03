import { ButtonDesignStyle } from '@/constants/ButtonDesignStyle';

type ButtonProps = {
  label: string;
  color: keyof typeof ButtonDesignStyle;
  onClick?: () => void;
};

export const Button = ({ label, color = 'default', onClick }: ButtonProps) => {
  return (
    <>
      <button
        type={onClick ? 'button' : 'submit'}
        className={
          'flex grow items-center justify-center border-2 py-3 px-8 text-lg ' +
          ButtonDesignStyle[color]
        }
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
};
