import Linkify from "linkify-react";
type CardContentProps = {
  content: string;
  label?: string;
  horizontal?: boolean;
};

export const CardContent = (props: CardContentProps) => {
  const { content, label, horizontal } = props;
  const options = {
    className: 'break-all text-black',
    tagName: 'li',
  }
  if (horizontal) {
    return (
      <>
        <ul className="flex grow flex-row justify-between text-lg">
          {label && <li className="text-gray">{label}</li>}{' '}
          <Linkify options={options}>{content}</Linkify>
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
