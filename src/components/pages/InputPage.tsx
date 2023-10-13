import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';
import { usePrideContent } from '@/hooks/usePrideContent';
import { useFetchThisMonthOwnPrideContentList } from '@/hooks/useReadPrideContent';

import { ButtonComponent } from 'modules/ButtonComponent';
import { TitleComponent } from 'modules/TitleComponent';
import { OwnViewLandscapeCardComponent } from 'modules/ViewComponent/ViewCardComponent';
import {
  InputItemComponent,
  TextAreaItemComponent,
} from 'modules/inputComponent/InputItemComponent';
import { TabMenuContent } from 'modules/tabContent/TabMenuContent';

import { LoadingComponent } from '@/utilities/LoadingComponent';

import type { InputFormPrideContentType, PrideContentType } from '@/types/contentsType';

export const InputPage = () => {
  const date = new Date();
  const month = date.getMonth() + 1;

  const [isNewContent, setIsNewContent] = useState<boolean>(true);
  const [editContentUid, setEditContentUid] = useState<string>('');
  const initializePrideContent: PrideContentType = {
    memo: '',
    thumbsUsers: [],
    title: '',
    uid: '',
    userName: '',
    userPhotoURL: '',
  };
  const [editData, setEditData] = useState<PrideContentType>(initializePrideContent);

  const { user, uid } = useFirebaseAuth();
  const { createPride, deletePride, updatePride } = usePrideContent();

  const { prideContentOwnList, isLoadingPrideContentOwnList, prideContentOwnListMutate } =
    useFetchThisMonthOwnPrideContentList(uid);

  const { handleSubmit, control, reset, setValue } = useForm<InputFormPrideContentType>({
    defaultValues: {
      memo: '',
      title: '',
    },
  });

  const onClickMenuNewContent = () => {
    setIsNewContent(true);
    reset();
  };

  const onClickEdit = async (uid: string, prideContent: PrideContentType) => {
    setIsNewContent(false);

    setEditContentUid(uid);
    setEditData(prideContent);
    setValue('memo', prideContent.memo);
    setValue('title', prideContent.title);
  };

  const onClickDelete = async (uid: string) => {
    deletePride(uid);
    prideContentOwnListMutate();
  };

  const onSubmit: SubmitHandler<InputFormPrideContentType> = async (
    data: InputFormPrideContentType
  ) => {
    if (isNewContent) {
      const submitData: PrideContentType = {
        ...data,
        uid: uid,
        userName: user.displayName,
        userPhotoURL: user.photoURL,
        thumbsUsers: [],
      };
      await createPride(submitData);
    } else {
      const submitData: PrideContentType = {
        ...editData,
        ...data,
      };
      await updatePride(editContentUid, submitData);
    }
    await prideContentOwnListMutate();
    setEditData(initializePrideContent);
    setIsNewContent(true);
    reset();
  };

  const OwnPrideContentList = () => {
    if (isLoadingPrideContentOwnList || !prideContentOwnList) return <LoadingComponent />;
    if (prideContentOwnList.length == 0)
      return (
        <div className="flex h-56 w-full items-center justify-center rounded-md text-2xl shadow-lg">
          あなたの入力を待っています♡
        </div>
      );
    return (
      <>
        {prideContentOwnList.map((content) => (
          <OwnViewLandscapeCardComponent
            key={content.uid}
            prideContent={content.pride}
            onClickDelete={() => onClickDelete(content.uid)}
            onClickEdit={() => onClickEdit(content.uid, content.pride)}
          />
        ))}
      </>
    );
  };

  return (
    <>
      <TitleComponent label={month + '月の自慢を書こう'} />
      <div className="flex w-full items-start gap-3">
        <div className="sticky top-3 flex w-full max-w-sm flex-col gap-5 rounded p-4 shadow-2xl">
          <TabMenuContent isNewContent={isNewContent} onClickNewContent={onClickMenuNewContent} />
          <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-5">
            <InputItemComponent
              name={'title'}
              control={control}
              rules={{
                required: { value: true, message: 'アピールは書いてね♡' },
                maxLength: { value: 20, message: '文字数は20文字以内です。' },
              }}
              label="アピールポイント"
              validation="20文字以内"
            />
            <TextAreaItemComponent
              name={'memo'}
              control={control}
              rules={{
                maxLength: { value: 40, message: '文字数は40文字以内です。' },
              }}
              label="アピール内容"
              validation="40文字以内"
            />

            <ButtonComponent label="投稿" />
          </form>
        </div>
        <div className="flex w-full flex-col gap-10">
          <OwnPrideContentList />
        </div>
      </div>
    </>
  );
};
