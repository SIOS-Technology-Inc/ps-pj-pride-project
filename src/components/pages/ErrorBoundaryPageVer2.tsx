import { ErrorBoundary, FallbackProps, useErrorHandler } from 'react-error-boundary';

import { AxiosError } from 'axios';

import {
  axiosTestClient,
  AxiosErrorHandlingTestComponent,
} from '@/utilities/AxiosClientTestComponent';
import ErrorBoundaryVersion2 from '@/utilities/ErrorboundaryVersion2';

export const ErrorBoundaryPageVer2 = () => {
  return (
    <>
      <ErrorBoundaryVersion2>
        <ErrorPage />
      </ErrorBoundaryVersion2>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={onError}>
        <ErrorPage />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={onError}>
        <AxiosErrorHandlingTestComponent>
          <AxiosErrorPage />
        </AxiosErrorHandlingTestComponent>
      </ErrorBoundary>
    </>
  );
};

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  if (error instanceof AxiosError) {
    return (
      <>
        <pre>
          API react-error-boundary {error.message}
          {error.code}
        </pre>
        <button type="button" onClick={resetErrorBoundary}>
          reset button
        </button>
      </>
    );
  }
  return (
    <>
      <pre>react-error-boundary {error.message}</pre>
      <button type="button" onClick={resetErrorBoundary}>
        reset button
      </button>
    </>
  );
};

const onError = (error: Error, info: { componentStack: string }) => {
  console.error(error, info);
};

const ErrorPage = () => {
  const errorHandler = useErrorHandler();
  const onClick = () => {
    errorHandler(new Error('error'));
  };
  return (
    <>
      <button onClick={onClick}>btn</button>
    </>
  );
};
const AxiosErrorPage = () => {
  const onClick = () => {
    axiosTestClient.get('sss');
  };
  return (
    <>
      <button onClick={onClick}>onClick</button>
    </>
  );
};
