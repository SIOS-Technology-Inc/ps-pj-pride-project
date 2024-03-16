/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';

import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { useAuthenticated } from '@/hooks/useAuth';

export const axiosClient = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

type Props = {
  children: React.ReactNode;
};

export const AxiosConfig = (props: Props) => {
  const { children } = props;

  const { showBoundary } = useErrorBoundary();
  const { idToken } = useAuthenticated();
  const [isTokenSet, setIsTokenSet] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const requestInterceptor = axiosClient.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        config.headers['google-certification'] = `${idToken}`;
        console.log(idToken);

        return config;
      },
      (error: AxiosError) => showBoundary(error)
    );
    const responseInterceptor = axiosClient.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        if (error.response && error.config) {
          const status = error.response.status;
          const targetURL = error.config.url;
          // 404の場合は新規登録画面に遷移
          if (targetURL && targetURL.includes('users/me') && status == 404) return navigate('/new');
        }
        showBoundary(error);
        return Promise.reject(error);
      }
    );
    if (idToken) setIsTokenSet(true);

    return () => {
      axiosClient.interceptors.response.eject(responseInterceptor);
      axiosClient.interceptors.request.eject(requestInterceptor);
    };
  }, [idToken, navigate]);

  if (!isTokenSet) return <div>loading</div>;
  return <>{children}</>;
};
