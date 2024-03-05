import useSWR from 'swr';

import { fetchPrides } from '@/api/usersPride';
import { InputFormPrideContentType } from '@/types/contentsType';

export const useUserPride = () => {
  const {
    data: ownPrideList,
    isLoading: isLoadingOwnPrideList,
    mutate: userDataRefresh,
  } = useSWR('ownPride', fetchPrides);

  const createPride = async (data: InputFormPrideContentType) => {
    await createPride(data);
    userDataRefresh();
  };
  const updatePride = async (uid: string, data: InputFormPrideContentType) => {
    await updatePride(uid, data);
    userDataRefresh();
  };
  const deletePride = async (uid: string) => {
    await deletePride(uid);
    userDataRefresh();
  };

  return { ownPrideList, isLoadingOwnPrideList, createPride, updatePride, deletePride };
};
