import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useDIPrideContent } from '@/hooks/api/useDIPrideContent';
import { useFetchThisMonthOwnPrideContentList } from '@/hooks/api/useReadPrideContent';
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';

import { ButtonComponent } from 'modules/ButtonComponent';
import { TitleComponent } from 'modules/TitleComponent';
import { OwnViewLandscapeCardComponent } from 'modules/ViewComponent/ViewCardComponent';
import { InputItemComponent } from 'modules/inputComponent/InputItemComponent';
import { TabMenuContent } from 'modules/tabContent/TabMenuContent';

import { LoadingComponent } from '@/utilities/LoadingComponent';

import type { InputFormPrideContentType, PrideContentType } from '@/types/contentsType';

export const InputPage = () => {
  const date = new Date();
  const month = date.getMonth() + 1;

  const [isNewContent, setIsNewContent] = useState<boolean>(true);
  const [editContentUid, setEditContentUid] = useState<string>('');
  const initializePrideContent: PrideContentType = {
    customerName: '',
    serviceName: '',
    thumbsUsers: [],
    title: '',
    uid: '',
    userName: '',
    userPhotoURL: '',
  };
  const [editData, setEditData] = useState<PrideContentType>(initializePrideContent);

  const { user, uid } = useFirebaseAuth();
  const { createPride, deletePride, updatePride } = useDIPrideContent();

  const { prideContentOwnList, isLoadingPrideContentOwnList, prideContentOwnListMutate } =
    useFetchThisMonthOwnPrideContentList(uid);

  const { handleSubmit, control, reset, setValue } = useForm<InputFormPrideContentType>({
    defaultValues: {
      customerName: '',
      serviceName: '',
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
    setValue('customerName', prideContent.customerName);
    setValue('serviceName', prideContent.serviceName);
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

  if (isLoadingPrideContentOwnList || !prideContentOwnList) return <LoadingComponent />;

  return (
    <>
      <TitleComponent label={month + '月の自慢を書こう'} />
      <div className="flex w-full items-start gap-3">
        <div className="flex w-full max-w-sm flex-col gap-5 rounded p-4 shadow-2xl">
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
            <InputItemComponent
              name={'serviceName'}
              control={control}
              rules={{
                required: { value: true, message: 'これは難しい' },
                maxLength: { value: 10, message: '文字数は10文字以内です。' },
              }}
              label="対象サービス"
              validation="10文字以内"
            />
            <InputItemComponent
              name={'customerName'}
              control={control}
              label="顧客名・社内検証等"
              rules={{
                required: { value: true, message: 'これは埋めときましょう' },
                maxLength: { value: 10, message: '文字数は10文字以内です。' },
              }}
              validation="10文字以内"
            />

            <ButtonComponent label="投稿" />
          </form>
        </div>
        <div className="flex w-full flex-col gap-10">
          {prideContentOwnList.map((content) => (
            <OwnViewLandscapeCardComponent
              key={content.uid}
              prideContent={content.pride}
              onClickDelete={() => onClickDelete(content.uid)}
              onClickEdit={() => onClickEdit(content.uid, content.pride)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
