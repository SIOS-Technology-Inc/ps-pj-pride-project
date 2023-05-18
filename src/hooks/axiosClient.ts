import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

export const axiosClient = axios.create({
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'https://localhost:4242',
});

axiosClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (config.headers !== undefined) {
    // console.log("request", config);
  }
  console.log(config);

  return config;
});

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(response);
    return response;
  },
  (error: AxiosError) => {
    console.error(error);
    return Promise.reject(error);
  }
);
