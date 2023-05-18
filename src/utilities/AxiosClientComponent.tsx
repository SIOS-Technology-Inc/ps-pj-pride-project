import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios, { AxiosError, AxiosResponse } from 'axios';

export const axiosClient = axios.create({
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'https://localhost:4242',
});

type Props = {
  children: React.ReactNode;
};

export const AxiosErrorHandlingComponent = (props: Props) => {
  const { children } = props;
  const [serverError, setServerError] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const responseInterceptor = axiosClient.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        if (!error.response) {
          setServerError(true);
        } else {
          if (error.response.status >= 500) setServerError(true);
        }
        return Promise.reject(error);
      }
    );

    // クリーンアップ
    return () => {
      axiosClient.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  if (serverError)
    return (
      <>
        server error
        <button onClick={() => navigate(0)}>retry</button>
      </>
    );
  return <>{children}</>;
};
