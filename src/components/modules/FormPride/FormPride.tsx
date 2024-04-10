import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/common/Button/Button';
import { FormInputText } from '@/components/common/FormInputText/FormInputText';
import { FormInputTextArea } from '@/components/common/FormInputTextArea/FormInputTextArea';
import { PrideContentType } from '@/types/contentPride.type';
import { InputFormPrideContentType } from '@/types/contentsType';
import { LoadingComponent } from '@/utilities/LoadingComponent';

type FormPrideProps = {
  prideContent: PrideContentType;
  onClickSubmit: (data: InputFormPrideContentType) => void;
};

export const FormPride = (props: FormPrideProps) => {
  const { prideContent, onClickSubmit } = props;
  const { handleSubmit, control, reset } = useForm<InputFormPrideContentType>({
    defaultValues: prideContent,
  });
  const [isSaving, setIsSaving] = useState<boolean>(false);

  useEffect(() => {
    reset(prideContent);
    setIsSaving(false);
  }, [prideContent, reset]);

  const onSubmit: SubmitHandler<InputFormPrideContentType> = async (
    data: InputFormPrideContentType
  ) => {
    setIsSaving(true);
    onClickSubmit(data).then(() => {
      reset();
      setIsSaving(false);
    });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sticky top-3 flex w-full max-w-sm flex-col gap-5 rounded border border-gray/70 p-4"
      >
        <FormInputText
          name={'title'}
          control={control}
          rules={{
            required: { value: true, message: 'アピールは書いてね♡' },
            maxLength: { value: 20, message: '文字数は20文字以内です。' },
          }}
          label="アピールポイント"
          validation="20文字以内"
        />
        <FormInputTextArea
          name={'memo'}
          control={control}
          rules={{
            maxLength: { value: 280, message: '文字数は280文字以内です。' },
          }}
          label="アピール内容"
          validation="280文字以内"
        />

        {isSaving ? (
          <LoadingComponent />
        ) : (
          <Button color="default" label="投稿" />
        )}
      </form>
    </>
  );
};
