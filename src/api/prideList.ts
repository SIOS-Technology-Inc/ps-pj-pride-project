import { PrideList } from '@/types/contentPride.type';
import { axiosClient } from '@/utilities/AxiosConfig';

export const fetchPrideWithinOneMonth = async () => {
  const res = await axiosClient.get<PrideList>('/api/pride');
  return res.data;
};
export const fetchPrideWithinOneMonthRankingTop3 = async () => {
  const res = await axiosClient.get<PrideList>('/api/pride/ranking');
  return res.data;
};
export const fetchPridePastOneMonthAgo = async () => {
  const res = await axiosClient.get<PrideList>('/api/pride/past');
  return res.data;
};
export const patchPrideThumbsup = async (userID: string, uid: string, userPhoto: string) => {
  const patchData = {
    ref: `users/${userID}/prides/${uid}`,
    userPhoto: userPhoto,
  };
  await axiosClient.patch(`/api/pride/thumbsup/`, patchData);
};
