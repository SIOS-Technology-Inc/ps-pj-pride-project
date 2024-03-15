import { PrideList } from '@/types/contentPride.type';
import { InputFormPrideContentType } from '@/types/contentsType';
import { axiosClient } from '@/utilities/AxiosConfig';

export const fetchPrides = async () => {
  const res = await axiosClient.get<PrideList>('/api/users/prides');
  return res.data;
};
export const createPride = async (data: InputFormPrideContentType) => {
  await axiosClient.post('/api/users/prides', data);
};
export const updatePride = async (uid: string, data: InputFormPrideContentType) => {
  await axiosClient.put(`/api/users/prides/${uid}`, data);
};
export const deletePride = async (uid: string) => {
  await axiosClient.delete(`/api/users/prides/${uid}`);
};
