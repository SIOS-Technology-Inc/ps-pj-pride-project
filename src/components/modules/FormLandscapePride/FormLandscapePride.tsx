import { useEffect } from 'react';

import { RxCross1 } from 'react-icons/rx';

import { Button } from '@/components/common/Button/Button';
import { FormPride } from '@/components/modules/FormPride/FormPride';
import { PrideContentType } from '@/types/contentsType';

type FormLandscapePrideProps = {
  prideContent: PrideContentType;
  onClickEdit: (data: PrideContentType) => void;
  onClickDelete: () => void;
  openFlagState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};

export const FormLandscapePride = (props: FormLandscapePrideProps) => {
  const { prideContent, onClickEdit, onClickDelete, openFlagState } = props;
  const [openFlag, setOpenFlag] = openFlagState;

  useEffect(() => {
    // 背景画面固定用関数
    const registerBackgroundFixed = () => {
      const body = document.body;
      const scrollWidth = window.innerWidth - body.clientWidth;
      body.style.marginRight = `${scrollWidth}px`;
      body.style.overflowY = 'hidden';
    };
    // 背景画面固定解除用関数
    const unRegisterBackgroundFixed = () => {
      const body = document.body;
      body.style.overflowY = '';
      body.style.marginRight = '';
    };
    if (openFlag) registerBackgroundFixed();

    return () => {
      unRegisterBackgroundFixed();
    };
  }, [openFlag]);

  const onClickBackground = () => {
    setOpenFlag(false);
  };

  const onClickCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };
  return (
    <>
      <div
        className={
          'fixed flex flex-col items-center justify-center overflow-hidden bg-gray/70 transition-all ' +
          (openFlag ? ' top-0 left-0 h-screen w-screen ' : ' top-1/2 left-1/2 h-0 w-0 ')
        }
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
      </div>
    </>
  );
};
