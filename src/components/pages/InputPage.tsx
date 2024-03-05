import { useState } from 'react';

import { useAuthenticated } from '@/hooks/useAuth';
import { usePrideContent } from '@/hooks/usePrideContent';
import { useFetchThisMonthOwnPrideContentList } from '@/hooks/useReadPrideContent';

import { FormPride } from '@/components/modules/FormPride/FormPride';
import { EditFormPride } from '@/components/object/EditFormPride/FormModalPride';
import { UserPrideList } from '@/components/object/UserPrideList/UserPrideList';
import { LoadingComponent } from '@/utilities/LoadingComponent';

import { Title } from '../common/Title/Title';

import type { PrideContentFirestoreDataType, PrideContentType } from '@/types/contentsType';

export const InputPage = () => {
  const date = new Date();
  const month = date.getMonth() + 1;

  const { uid } = useAuthenticated();
  const { createPride, deletePride, updatePride } = usePrideContent();
  const initPrideContent: PrideContentType = {
    memo: '',
    thumbsUsers: [],
    title: '',
    uid: uid,
    userName: '',
    userPhotoURL: '',
  };

  const [editPride, setEditPride] = useState<PrideContentFirestoreDataType>({
    uid: '',
    pride: initPrideContent,
  });
  const modalState = useState<boolean>(false);
  const [, setIsModal] = modalState;

  const { prideContentOwnList, isLoadingPrideContentOwnList, prideContentOwnListMutate } =
    useFetchThisMonthOwnPrideContentList(uid);

  const onClickSubmit = async (data: PrideContentType) => {
    await createPride(data);
    prideContentOwnListMutate();
  };

  const onClickSubmitEdit = async (data: PrideContentType) => {
    await updatePride(editPride.uid, data);
    setIsModal(false);
    prideContentOwnListMutate();
  };
  const onClickDelete = async () => {
    await deletePride(editPride.uid);
    setIsModal(false);
    prideContentOwnListMutate();
  };

  const openEditForm = (targetData: PrideContentFirestoreDataType) => {
    setEditPride(targetData);
    setIsModal(true);
  };

  if (isLoadingPrideContentOwnList || !prideContentOwnList) return <LoadingComponent />;

  return (
    <>
      <Title label={month + '月の自慢を書こう'} />
      <div className="flex w-full items-start gap-3">
        <FormPride prideContent={initPrideContent} onClickSubmit={onClickSubmit} />
        <UserPrideList prides={prideContentOwnList} onClickOwnerPride={openEditForm} />
      </div>
      <EditFormPride
        onClickDelete={onClickDelete}
        onClickEdit={onClickSubmitEdit}
        prideContent={editPride.pride}
        openFlagState={modalState}
      />
    </>
  );
};
