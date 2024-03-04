import { animated, useSpring } from '@react-spring/web';
import { RxCross1 } from 'react-icons/rx';

import { Button } from '@/components/common/Button/Button';
import { FormPride } from '@/components/modules/FormPride/FormPride';
import { PrideContentType } from '@/types/contentsType';

type EditFormPrideProps = {
  prideContent: PrideContentType;
  onClickEdit: (data: PrideContentType) => void;
  onClickDelete: () => void;
  openFlagState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};

export const EditFormPride = (props: EditFormPrideProps) => {
  const { prideContent, onClickEdit, onClickDelete, openFlagState } = props;
  const [openFlag, setOpenFlag] = openFlagState;

  const onClickBackground = () => {
    setOpenFlag(false);
  };

  const onClickCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };
  const { top } = useSpring({
    from: { top: '-100vh' },
    to: { top: openFlag ? '0' : '-100vh' },
  });
  return (
    <>
      <animated.div
        className={
          'fixed left-0 flex h-screen w-full flex-col items-center  justify-center overflow-hidden bg-gray/70'
        }
        style={{ top: top }}
        onClick={onClickBackground}
      >
        <div className="relative flex w-3/4 max-w-3xl items-center rounded-xl bg-white p-8">
          {/* バツボタン */}
          <div className="absolute right-0 -top-10 h-10 w-10 hover:cursor-pointer">
            <RxCross1 className="h-full w-full" />
          </div>
          <div
            id="policy"
            className="inline-flex h-full w-full flex-col items-center gap-4 "
            onClick={onClickCard}
          >
            <FormPride prideContent={prideContent} onClickSubmit={onClickEdit} />
            <div className=" flex w-full max-w-sm">
              <Button label="削除" color="blue" onClick={onClickDelete} />
            </div>
          </div>
        </div>
      </animated.div>
    </>
  );
};
