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
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between text-lg text-gray">
          <span>{label}</span>
          <span>{validation}</span>
        </div>
        <input type="text" {...field} className="text-lg py-1 px-2 border border-gray" />
      </div>
    </>
  );
};
export const TextAreaItemComponent = <T extends FieldValues>(props: InputItemComponentProps<T>) => {
  const { label, validation, name, control, rules } = props;
  const { field } = useController<T>({ name, control, rules });
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between text-lg text-gray">
          <span>{label}</span>
          <span>{validation}</span>
        </div>
        <textarea {...field} className="text-lg py-1 px-2 border border-gray resize-none" />
      </div>
    </>
  );
};

// https://dev.to/texmeijin/component-design-idea-using-react-hook-form-v7-ie0
