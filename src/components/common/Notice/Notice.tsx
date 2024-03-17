import { FiInfo } from 'react-icons/fi';

type NoticeProps = {
  children: React.ReactNode;
};

export const Notice = (props: NoticeProps) => {
  const { children } = props;
  return (
    <>
      <div className="flex w-full flex-row items-center gap-2 rounded-md bg-blue-200 p-4 text-base text-gray">
        <FiInfo className="h-8 w-8 shrink-0" />
        <span className="break-words">{children}</span>
      </div>
    </>
  );
};
