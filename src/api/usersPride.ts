import { PrideList } from '@/types/contentPride.type';
import { InputFormPrideContentType } from '@/types/contentsType';
import { axiosClient } from '@/utilities/AxiosConfig';

export const fetchPrides = async () => {
  const res = await axiosClient.get<PrideList>('/api/pride-user/me');
  return res.data;
};
export const createPride = async (data: InputFormPrideContentType) => {
  await axiosClient.post('/api/pride-user', data);
};
export const updatePride = async (uid: string, data: InputFormPrideContentType) => {
  await axiosClient.put(`/api/pride-user/${uid}`, data);
};
export const deletePride = async (uid: string) => {
  await axiosClient.delete(`/api/pride-user/${uid}`);
};
