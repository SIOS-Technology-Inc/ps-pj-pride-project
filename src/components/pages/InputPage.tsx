import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';
import { useFirestorePrideContent } from '@/hooks/useFirestorePrideContent';
import { InputFormPrideContentType, PrideContentType } from '@/types/contentsType';

import { TitleComponent } from '../modules/TitleComponent';
import { InputBoardComponent } from '../modules/inputComponent/InputBoardComponent';

export const InputPage = () => {
  const date = new Date();
  const month = date.getMonth() + 1;

  const { createPride } = useFirestorePrideContent();
  const { user, uid } = useFirebaseAuth();

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
  };

  return (
    <>
      <TitleComponent label={month + '月の自慢を書こう'} />
      <InputBoardComponent initializeData={InitializeData} onSubmitParentFunction={onSubmit} />
    </>
  );
};
