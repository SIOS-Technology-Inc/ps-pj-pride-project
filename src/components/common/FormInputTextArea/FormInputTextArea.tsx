import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

type FormInputTextAreaProps<T extends FieldValues> = UseControllerProps<T> & {
  label: string;
  validation: string;
};
export const FormInputTextArea = <T extends FieldValues>(props: FormInputTextAreaProps<T>) => {
  const { label, validation, name, control, rules } = props;
  const { field, fieldState } = useController<T>({ name, control, rules });
  const { error } = fieldState;

  return (
    <>
      <div className="flex w-full flex-col">
        <div className="flex flex-row justify-between text-lg text-gray">
          <span>{label}</span>
          <span>
            {field.value.length}/{validation}
          </span>
        </div>
        <textarea {...field} className="h-64 resize-none border border-gray py-1 px-2 text-lg" />
        <span className="h-4 w-full text-xs text-red-600">{error ? error.message : ''}</span>
      </div>
    </>
  );
};
