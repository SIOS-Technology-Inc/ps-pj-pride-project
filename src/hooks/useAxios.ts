import { AxiosResponse } from 'axios';

import { testType } from '@/types/type';
import { axiosClient } from '@/utilities/AxiosClientComponent';

export const useAxios = () => {
  const addUser = (data: testType) => {
    return axiosClient.post('/test', data);
  };
  const getUsers = (url: string) => {
    return axiosClient
      .get(url)
      .then((res: AxiosResponse<{ tetDataBase: testType[] }>) => res.data);
  };
  const getUser = (url: string) => {
    return axiosClient
      .get(url)
      .then((res: AxiosResponse<{ testData: testType }>) => res.data);
  };

  return { addUser, getUsers, getUser };
};
