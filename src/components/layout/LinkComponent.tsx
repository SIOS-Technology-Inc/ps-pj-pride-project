import { Link } from 'react-router-dom';

type Props = {
  url: string;
};

export const LinkComponent = (props: Props) => {
  const { url } = props;
  return (
    <>
      <Link
        to={url}
        className="rounded-xl border-2 border-black bg-slate-300/50 py-2 px-8"
      >
        {url}
      </Link>
    </>
  );
};
