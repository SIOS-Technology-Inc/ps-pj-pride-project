import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/common/Button/Button';
import { FormInputText } from '@/components/common/FormInputText/FormInputText';

type FormTukkomiProps = {
  tukkomi: string;
  onClickSubmit: (text: string) => void;
};

export const FormTukkomi = (props: FormTukkomiProps) => {
  const { tukkomi, onClickSubmit } = props;
  const { handleSubmit, control } = useForm<{ text: string }>({
    defaultValues: {
      text: tukkomi,
    },
  });
  const onSubmit: SubmitHandler<{ text: string }> = async (data: { text: string }) => {
    onClickSubmit(data.text);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="sticky top-3 flex w-full flex-col gap-5 rounded p-4 shadow"
    >
      <FormInputText
        name={'text'}
        control={control}
        rules={{
          required: { value: true, message: 'ジャンジャンつっこもう' },
          maxLength: { value: 40, message: '文字数は40文字以内です。' },
        }}
        label="ツッコミ記入欄"
        validation="40文字以内"
      />
      <Button color="default" label="投稿" />
    </form>
  );
};
