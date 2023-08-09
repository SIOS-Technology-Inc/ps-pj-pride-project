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
