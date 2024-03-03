type TitleProps = { label: string };

export const Title = (props: TitleProps) => {
  const { label } = props;
  return (
    <>
      <h1 className="text-4xl">{label}</h1>
    </>
  );
};
