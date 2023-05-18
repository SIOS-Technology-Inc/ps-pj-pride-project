import { useState } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import useSWR, { KeyedMutator } from 'swr';

import { useFireStore } from '@/hooks/useFireStore';
import { todoType } from '@/types/firestoreType';
import { SWRConfigComponent } from '@/utilities/SWRConfigComponent';

export const FirestorePage = () => {
  const { getTodo, addTodo, editTodo, deleteTodo } = useFireStore();
  const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
    return (
      <>
        <pre>react-error-boundary {error.message}</pre>
        <button type="button" onClick={resetErrorBoundary}>
          reset button
        </button>
      </>
    );
  };
  const ViewComponent = () => {
    const { data, isLoading, isValidating, mutate } = useSWR('/todo', getTodo);
    const [text, setText] = useState<string>('');

    const EditCompoent = (props: {
      todo: todoType;
      mutate: KeyedMutator<todoType[]>;
    }) => {
      const { todo, mutate } = props;
      const [edit, setEdit] = useState<string>(todo.text);

      const handleOnEdit = async (e: React.SyntheticEvent): Promise<void> => {
        e.preventDefault();
        await editTodo({ ...todo, text: edit });
        mutate();
      };

      return (
        <>
          <form onSubmit={(e) => handleOnEdit(e)}>
            {todo.uid}:
            <input
              type="text"
              value={edit}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEdit(e.target.value)
              }
            />
            :{todo.done}:{todo.timestamp?.toLocaleString()}
            <button className="bg-gray-600" type="submit">
              編集
            </button>
            <button
              type="button"
              onClick={() => {
                handleOnDelete(todo.uid);
              }}
            >
              削除
            </button>
          </form>
        </>
      );
    };
    const handleOnSubmit = async (e: React.SyntheticEvent): Promise<void> => {
      e.preventDefault();
      await addTodo({
        uid: '',
        done: true,
        text: text,
      });
      setText('');
      mutate();
    };
    const handleOnDelete = async (uid: string): Promise<void> => {
      await deleteTodo(uid);
      mutate();
    };

    if (isLoading || isValidating) return <>取得中◎</>;
    return (
      <>
        <section>
          {data?.map((value) => (
            // <div key={value.uid}>
            //   {value.uid}:{value.text}:{value.done}:
            //   {value.timestamp.toLocaleString()}
            // </div>
            <EditCompoent key={value.uid} todo={value} mutate={mutate} />
          ))}
        </section>
        <form onSubmit={(e) => handleOnSubmit(e)}>
          <input
            type="text"
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
          />
          <button type="submit">送信</button>
        </form>
      </>
    );
  };

  return (
    <section>
      <div>firestore page 作るぞ～</div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <SWRConfigComponent>
          <ViewComponent />
        </SWRConfigComponent>
      </ErrorBoundary>
    </section>
  );
};
