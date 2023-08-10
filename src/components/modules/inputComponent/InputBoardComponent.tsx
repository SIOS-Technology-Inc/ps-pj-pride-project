import { SubmitHandler, useForm } from 'react-hook-form';

import { InputFormPrideContentType } from '@/types/contentsType';

import { ButtonComponent } from '../ButtonComponent';

import { InputItemComponent, TextAreaItemComponent } from './InputItemComponent';

type InputBoardComponentProps = {
  initializeData: InputFormPrideContentType;
  onSubmitParentFunction: (content: InputFormPrideContentType) => void;
};

export const InputBoardComponent = (props: InputBoardComponentProps) => {
  const { initializeData, onSubmitParentFunction } = props;
  const { handleSubmit, control, reset } = useForm<InputFormPrideContentType>({
    defaultValues: initializeData,
  });

  const onSubmit: SubmitHandler<InputFormPrideContentType> = (data: InputFormPrideContentType) => {
    onSubmitParentFunction(data);
    reset();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full  max-w-xl flex-col gap-5 rounded p-4 shadow-2xl"
      >
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
            maxLength: { value: 20, message: '文字数は10文字以内です。' },
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
        <TextAreaItemComponent
          name={'sentence'}
          control={control}
          rules={{
            required: { value: true, message: '一言でもよいよ？' },
            maxLength: { value: 20, message: '文字数は50文字以内です。' },
          }}
          label="チャレンジ内容"
          validation="50文字以内"
        />
        <ButtonComponent label="投稿" />
      </form>
    </>
  );
};
