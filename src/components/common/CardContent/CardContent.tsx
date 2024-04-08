type CardContentProps = {
  content: string;
  label?: string;
  horizontal?: boolean;
};

export const CardContent = (props: CardContentProps) => {
  const { content, label, horizontal } = props;
  if (horizontal) {
    return (
      <>
        <ul className="flex grow flex-row justify-between text-lg">
          {label && <li className="text-gray">{label}</li>}{' '}
          <li className="break-all text-black">{content}</li>
        </ul>
      </>
    );
  }
  return (
    <>
      <ul className="flex grow flex-col gap-1 text-lg">
        {label && <li className="text-gray">{label}</li>}
        <li className="break-all text-black">{content}</li>
      </ul>
    </>
  );
};
