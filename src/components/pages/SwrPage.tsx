import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import useSWR from 'swr';

import { useAxios } from '@/hooks/useAxios';
import { SWRConfigComponent } from '@/utilities/SWRConfigComponent';

export const SwrPage = () => {
  const { getUsers, getUser } = useAxios();
  // const getFetcher = (url: string) => axios.get(url).then((res) => res.data);

  // SWRでやればエラーもこちらで定義しているものにできる
  const TestUsersComponent = () => {
    const { data, isLoading, isValidating, mutate } = useSWR('/test', getUsers);
    console.log(data);
    if (isLoading) return <>loading</>;
    if (isValidating) return <>validating</>;
    return (
      <div>
        data
        <button onClick={() => mutate()}>更新</button>
      </div>
    );
  };
  const TestUserComponent = ({ id }: { id: number }) => {
    const { data, isLoading, isValidating } = useSWR('/test/' + id, getUser);
    console.log(data);
    if (isLoading) return <>loading</>;
    if (isValidating) return <>validating</>;

    return (
      <div>
        dataload:
        {data?.testData.id}:{data?.testData.text}:{data?.testData.done}
      </div>
    );
  };

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <SWRConfigComponent>
          <TestUsersComponent />
          <TestUserComponent id={1} />
        </SWRConfigComponent>
      </ErrorBoundary>
    </>
  );
};
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
