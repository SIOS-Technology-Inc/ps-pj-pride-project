import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

type LabelProps = {
  label: string;
  validation: string;
};

type InputItemComponentProps<T extends FieldValues> = UseControllerProps<T> & LabelProps;

export const InputItemComponent = <T extends FieldValues>(props: InputItemComponentProps<T>) => {
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
export const TextAreaItemComponent = <T extends FieldValues>(props: InputItemComponentProps<T>) => {
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
        <textarea
          {...field}
          className="h-24 resize-none border border-gray py-1 px-2 text-lg"
          maxLength={40}
        />
        <span className="h-4 w-full text-xs text-red-600">{error ? error.message : ''}</span>
      </div>
    </>
  );
};

// https://dev.to/texmeijin/component-design-idea-using-react-hook-form-v7-ie0
// https://zenn.dev/manalink_dev/articles/manalink-react-hook-form-v7
