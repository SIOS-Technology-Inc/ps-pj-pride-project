import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

type FormInputTextProps<T extends FieldValues> = UseControllerProps<T> & {
  label: string;
  validation: string;
};

export const FormInputText = <T extends FieldValues>(props: FormInputTextProps<T>) => {
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
        <input type="text" {...field} className="border border-gray py-1 px-2 text-lg" />
        <span className="h-4 w-full text-right text-xs text-red-600">
          {error ? error.message : ''}
        </span>
      </div>
    </>
  );
};
