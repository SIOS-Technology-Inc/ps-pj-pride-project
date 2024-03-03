import { useState } from 'react';

import { useFirebaseAuth } from '@/hooks/useAuth';
import { usePrideContent } from '@/hooks/usePrideContent';
import { useFetchThisMonthOwnPrideContentList } from '@/hooks/useReadPrideContent';

import { FormLandscapePride } from '@/components/modules/FormLandscapePride/FormLandscapePride';
import { FormPride } from '@/components/modules/FormPride/FormPride';
import { UserCard } from '@/components/modules/UserCard/UserCard';
import { LoadingComponent } from '@/utilities/LoadingComponent';

import { Title } from '../common/Title/Title';

import type { PrideContentFirestoreDataType, PrideContentType } from '@/types/contentsType';

export const InputPage = () => {
  const date = new Date();
  const month = date.getMonth() + 1;

  const { uid } = useFirebaseAuth();
  const { createPride, deletePride, updatePride } = usePrideContent();

  const [editPride, setEditPride] = useState<PrideContentFirestoreDataType>({
    uid: '',
    pride: {
      memo: '',
      thumbsUsers: [],
      title: '',
      uid: uid,
      userName: '',
      userPhotoURL: '',
    },
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
        <FormPride
          prideContent={{
            memo: '',
            thumbsUsers: [],
            title: '',
            uid: uid,
            userName: '',
            userPhotoURL: '',
          }}
          onClickSubmit={onClickSubmit}
        />
        <div className="flex w-full flex-col gap-10">
          {prideContentOwnList.length == 0 && (
            <div className="flex h-56 w-full items-center justify-center rounded-md border border-gray/70 text-2xl">
              あなたの入力を待っています♡
            </div>
          )}
          {prideContentOwnList.map((content) => (
            <UserCard prideContent={content.pride} onClickOwnerEdit={() => openEditForm(content)} />
          ))}
        </div>
      </div>
      <FormLandscapePride
        onClickDelete={() => deletePride(editPride.uid)}
        onClickEdit={onClickSubmitEdit}
        prideContent={editPride.pride}
        openFlagState={modalState}
      />
    </>
  );
};
