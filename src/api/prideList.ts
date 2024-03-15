import { PrideList } from '@/types/contentPride.type';
import { axiosClient } from '@/utilities/AxiosConfig';

export const fetchPrideWithinOneMonth = async () => {
  const res = await axiosClient.get<PrideList>('/api/prides');
  return res.data;
};
export const fetchPrideWithinOneMonthRankingTop3 = async () => {
  const res = await axiosClient.get<PrideList>('/api/prides/ranking');
  return res.data;
};
export const fetchPridePastOneMonthAgo = async () => {
  const res = await axiosClient.get<PrideList>('/api/prides/past');
  return res.data;
};
export const patchPrideThumbsup = async (uid: string) => {
  await axiosClient.patch(`/api/prides/${uid}`);
};
