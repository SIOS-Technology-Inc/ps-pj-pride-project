import { SubmitHandler, useForm } from 'react-hook-form';

import { ButtonComponent } from '../ButtonComponent';

import { InputItemComponent, TextAreaItemComponent } from './InputItemComponent';

type FormValuesProps = {
  title: string;
  serviceName: string;
  customerName: string;
  memo: string;
};

export const InputBoardComponent = () => {
  const { handleSubmit, control } = useForm<FormValuesProps>({
    defaultValues: {
      title: '',
      serviceName: '',
      customerName: '',
      memo: '',
    },
  });

  const onSubmit: SubmitHandler<FormValuesProps> = (data: FormValuesProps) => {
    console.log(data);
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
          label="アピールポイント"
          validation="20文字以内"
        />
        <InputItemComponent
          name={'serviceName'}
          control={control}
          label="対象サービス"
          validation="10文字以内"
        />
        <InputItemComponent
          name={'customerName'}
          control={control}
          label="顧客名・社内検証等"
          validation="10文字以内"
        />
        <TextAreaItemComponent
          name={'memo'}
          control={control}
          label="チャレンジ内容"
          validation="50文字以内"
        />
        <ButtonComponent label="投稿" />
      </form>
    </>
  );
};
