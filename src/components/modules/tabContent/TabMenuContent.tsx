import { AiOutlineEdit, AiOutlineFile } from 'react-icons/ai';

const NewContentMenuItem = (props: { active: boolean; onClick: () => void }) => {
  const { active, onClick } = props;

  return (
    <>
      <button
        className={
          'flex gap-3 text-lg text-gray items-center py-2 ' + (active ? ' ' : ' opacity-30')
        }
        onClick={onClick}
      >
        <AiOutlineFile className="h-5 w-5" />
        <span>新規作成</span>
      </button>
    </>
  );
};
const EditContentMenuItem = (props: { active: boolean }) => {
  const { active } = props;
  return (
    <>
      <button
        className={
          'flex gap-3 text-lg text-gray items-center py-2 ' + (active ? ' ' : ' opacity-30')
        }
        disabled={true}
      >
        <AiOutlineEdit className="h-5 w-5" />
        <span>更新</span>
      </button>
    </>
  );
};

type TabMenuContentProps = {
  isNewContent: boolean;
  onClickNewContent: () => void;
};

export const TabMenuContent = (props: TabMenuContentProps) => {
  const { isNewContent, onClickNewContent } = props;
  return (
    <>
      <div className="flex w-full gap-4 border-b border-gray">
        <NewContentMenuItem active={isNewContent} onClick={onClickNewContent} />
        <EditContentMenuItem active={!isNewContent} />
      </div>
    </>
  );
};
