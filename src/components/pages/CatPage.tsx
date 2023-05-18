import { useCallback } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import axios from 'axios';
import useSWR from 'swr';

import { SWRConfigComponent } from '@/utilities/SWRConfigComponent';

export const CatPage = () => {
  type CatAPIResult = {
    id: string;
    url: string;
  };

  const getCatImageUrl = useCallback(async () => {
    const result = await axios.get<CatAPIResult[]>(
      'https://api.thecatapi.com/v1/images/search'
    );
    return result.data;
  }, []);

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
    const { data, isLoading, isValidating, mutate } = useSWR(
      '/cat',
      getCatImageUrl
    );

    if (isLoading || isValidating) return <>取得中◎</>;
    return (
      <section>
        {data?.map((value) => (
          <img
            className="inline-flex text-clip font-sans"
            key={value.id}
            src={value.url}
            alt=""
          />
        ))}
        <button onClick={() => mutate()}>on load</button>
      </section>
    );
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <SWRConfigComponent>
        <ViewComponent />
      </SWRConfigComponent>
    </ErrorBoundary>
  );
};
