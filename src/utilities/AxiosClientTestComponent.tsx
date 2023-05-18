import { useEffect } from 'react';
import { useErrorHandler } from 'react-error-boundary';

import axios, { AxiosError, AxiosResponse } from 'axios';

export const axiosTestClient = axios.create({
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'https://localhost:4242',
});

type Props = {
  children: React.ReactNode;
};

export const AxiosErrorHandlingTestComponent = (props: Props) => {
  const { children } = props;
  const handler = useErrorHandler();

  useEffect(() => {
    const responseInterceptor = axiosTestClient.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        if (error.code === 'ECONNABORTED') console.log('timeout');
        console.log('com on');

        handler(error);
        return Promise.reject(error);
      }
    );

    // クリーンアップ
    return () => {
      axiosTestClient.interceptors.response.eject(responseInterceptor);
    };
  }, [handler]);

  return <>{children}</>;
};
