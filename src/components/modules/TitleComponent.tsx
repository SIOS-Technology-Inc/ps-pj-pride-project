type TitleComponentProps = {
  label: string;
};
export const TitleComponent = (props: TitleComponentProps) => {
  const { label } = props;
  return (
    <>
      <h1 className="text-4xl">{label}</h1>
    </>
  );
};
