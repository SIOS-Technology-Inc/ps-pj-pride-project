import { useState } from 'react';

import { useAuthenticated } from '@/hooks/useAuth';
import { useUserPride } from '@/hooks/useUserPride';

import { FormPride } from '@/components/modules/FormPride/FormPride';
import { EditFormPride } from '@/components/object/EditFormPride/FormModalPride';
import { UserPrideList } from '@/components/object/UserPrideList/UserPrideList';
import { PrideContentType } from '@/types/contentPride.type';
import { InputFormPrideContentType } from '@/types/contentsType';
import { LoadingComponent } from '@/utilities/LoadingComponent';

import { Title } from '../common/Title/Title';

export const InputPage = () => {
  const date = new Date();
  const month = date.getMonth() + 1;

  const { uid } = useAuthenticated();

  const initPrideContent: PrideContentType = {
    uid: '',
    userID: uid,
    title: '',
    memo: '',
    userName: '',
    userPhotoURL: '',
    thumbsupUsers: [],
    thumbsupCount: 0,
    createdAt: new Date(),
  };

  const [editPride, setEditPride] = useState<PrideContentType>(initPrideContent);
  const modalState = useState<boolean>(false);
  const [, setIsModal] = modalState;

  const {
    createPrideFunction,
    deletePrideFunction,
    isLoadingOwnPrideList,
    ownPrideList,
    updatePrideFunction,
  } = useUserPride();

  const onClickSubmit = async (data: InputFormPrideContentType) => {
    await createPrideFunction(data);
  };

  const onClickSubmitEdit = async (data: InputFormPrideContentType) => {
    updatePrideFunction(editPride.uid, data);
    setIsModal(false);
  };
  const onClickDelete = async () => {
    deletePrideFunction(editPride.uid);
    setIsModal(false);
  };

  const openEditForm = (targetData: PrideContentType) => {
    setEditPride(targetData);
    setIsModal(true);
  };

  if (!ownPrideList || isLoadingOwnPrideList) return <LoadingComponent />;

  return (
    <>
      <Title label={month + '月の自慢を書こう'} />
      <div className="flex w-full items-start gap-3">
        <FormPride prideContent={initPrideContent} onClickSubmit={onClickSubmit} />
        <UserPrideList prides={ownPrideList.prides} onClickOwnerPride={openEditForm} />
      </div>
      <EditFormPride
        onClickDelete={onClickDelete}
        onClickEdit={onClickSubmitEdit}
        prideContent={editPride}
        openFlagState={modalState}
      />
    </>
  );
};
