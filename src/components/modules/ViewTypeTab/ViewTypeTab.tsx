import { BsCardList, BsList } from 'react-icons/bs';

import { ViewTabStyle } from '@/constants/ViewTabStyle';

type ViewTypeTabProps = {
  select: keyof typeof ViewTabStyle;
  onClick: (value: keyof typeof ViewTabStyle) => void;
};

export const ViewTypeTab = (props: ViewTypeTabProps) => {
  const { select, onClick } = props;
  return (
    <div className="flex w-full flex-row justify-end gap-5 ">
      <BsCardList
        className={'h-10 w-10 hover:cursor-pointer ' + ViewTabStyle[select].detail}
        onClick={() => onClick('detail')}
      />
      <BsList
        className={'h-10 w-10 hover:cursor-pointer ' + ViewTabStyle[select].simple}
        onClick={() => onClick('simple')}
      />
    </div>
  );
};
