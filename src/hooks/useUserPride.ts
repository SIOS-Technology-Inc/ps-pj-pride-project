import useSWR from 'swr';

import { createPride, deletePride, fetchPrides, updatePride } from '@/api/usersPride';
import { InputFormPrideContentType } from '@/types/contentsType';

export const useUserPride = () => {
  const {
    data: ownPrideList,
    isLoading: isLoadingOwnPrideList,
    mutate: userDataRefresh,
  } = useSWR('ownPride', fetchPrides);

  const createPrideFunction = async (data: InputFormPrideContentType) => {
    await createPride(data);
    // 視覚表現のためにuserDataRefresh()も非同期処理を待機する。
    // https://github.com/SIOS-Technology-Inc/ps-pj-pride-project/issues/9
    await userDataRefresh();
  };
  const updatePrideFunction = async (uid: string, data: InputFormPrideContentType) => {
    await updatePride(uid, data);
    userDataRefresh();
  };
  const deletePrideFunction = async (uid: string) => {
    await deletePride(uid);
    userDataRefresh();
  };

  return {
    ownPrideList,
    isLoadingOwnPrideList,
    createPrideFunction,
    updatePrideFunction,
    deletePrideFunction,
  };
};
