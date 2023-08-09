import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

type LabelProps = {
  label: string;
  validation: string;
};

type InputItemComponentProps<T extends FieldValues> = UseControllerProps<T> & LabelProps;

export const InputItemComponent = <T extends FieldValues>(props: InputItemComponentProps<T>) => {
  const { label, validation, name, control, rules } = props;
  const { field } = useController<T>({ name, control, rules });
  return (
    <>
      <div className="flex w-full flex-col">
        <div className="flex flex-row justify-between text-lg text-gray">
          <span>{label}</span>
          <span>{validation}</span>
        </div>
        <input type="text" {...field} className="border border-gray py-1 px-2 text-lg" />
      </div>
    </>
  );
};
export const TextAreaItemComponent = <T extends FieldValues>(props: InputItemComponentProps<T>) => {
  const { label, validation, name, control, rules } = props;
  const { field } = useController<T>({ name, control, rules });
  return (
    <>
      <div className="flex w-full flex-col">
        <div className="flex flex-row justify-between text-lg text-gray">
          <span>{label}</span>
          <span>{validation}</span>
        </div>
        <textarea {...field} className="resize-none border border-gray py-1 px-2 text-lg" />
      </div>
    </>
  );
};

// https://dev.to/texmeijin/component-design-idea-using-react-hook-form-v7-ie0
