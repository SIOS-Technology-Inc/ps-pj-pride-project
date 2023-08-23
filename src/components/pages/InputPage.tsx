import { useDIPrideContent } from '@/hooks/api/useDIPrideContent';
import {
  useFetchThisMonthOwnPrideContentList,
  useFetchThisMonthRankingTop3,
} from '@/hooks/api/useReadPrideContent';
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';
import { InputFormPrideContentType, PrideContentType } from '@/types/contentsType';
import { LoadingComponent } from '@/utilities/LoadingComponent';

import { TitleComponent } from '../modules/TitleComponent';
import { InputBoardComponent } from '../modules/inputComponent/InputBoardComponent';

export const InputPage = () => {
  const date = new Date();
  const month = date.getMonth() + 1;

  const { user, uid } = useFirebaseAuth();
  const { createPride } = useDIPrideContent();

  const { prideContentRankingList, isLoadingPrideContentRanking } = useFetchThisMonthRankingTop3();
  const { prideContentOwnList, isLoadingPrideContentOwnList, prideContentOwnListMutate } =
    useFetchThisMonthOwnPrideContentList(uid);

  const InitializeData: InputFormPrideContentType = {
    customerName: '',
    serviceName: '',
    title: '',
  };
  const onSubmit = (content: InputFormPrideContentType) => {
    const submitData: PrideContentType = {
      ...content,
      uid: uid,
      userName: user.displayName,
      userPhotoURL: user.photoURL,
      thumbsUsers: [],
    };
    createPride(submitData);
    prideContentOwnListMutate();
  };

  if (isLoadingPrideContentRanking || isLoadingPrideContentOwnList) return <LoadingComponent />;
  console.log(prideContentRankingList);
  console.log(prideContentOwnList);
  return (
    <>
      <TitleComponent label={month + '月の自慢を書こう'} />
      <InputBoardComponent initializeData={InitializeData} onSubmitParentFunction={onSubmit} />
    </>
  );
};
