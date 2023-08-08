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
        className="flex items-center justify-center border-2 border-gray text-lg py-3 px-8"
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
};
