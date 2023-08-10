import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import useSWR from 'swr';

import { db } from '@/auth/authFirebase';
import { PrideContentFirestoreDataType, PrideContentType } from '@/types/contentsType';

export const useFirestorePrideContent = () => {
  const today = new Date();
  const collectionName = today.getFullYear() + '-' + (today.getMonth() + 1) + '-pride';

  const prideDataConverter: FirestoreDataConverter<PrideContentFirestoreDataType> = {
    toFirestore(content: PrideContentFirestoreDataType): DocumentData {
      return content.pride;
    },
    fromFirestore(
      snapshot: QueryDocumentSnapshot,
      options: SnapshotOptions
    ): PrideContentFirestoreDataType {
      const data = snapshot.data(options);
      return {
        uid: snapshot.id,
        pride: {
          title: data.title,
          customerName: data.customerName,
          serviceName: data.serviceName,
          thumbsUsers: data.thumbsUsers,
          userName: data.userName,
          userPhotoURL: data.userPhotoURL,
        },
      };
    },
  };
  const createPride = async (content: PrideContentType): Promise<void> => {
    const collRef = collection(db, collectionName).withConverter(prideDataConverter);
    await addDoc(collRef, { uid: '自動生成されるのでダミーで入れてます', pride: content });
  };
  const readThisMonthPrideList = async (): Promise<PrideContentFirestoreDataType[]> => {
    const collRef = collection(db, collectionName).withConverter(prideDataConverter);
    const snapshot = await getDocs(collRef);
    return snapshot.docs.map((doc) => doc.data());
  };
  const pushLikeForPride = async (uid: string, photoURL: string): Promise<void> => {
    const docRef = doc(db, collectionName, uid).withConverter(prideDataConverter);
    const snapshot = await getDoc(docRef);

    const data = snapshot.data();
    console.log(data);

    if (!data) return;
    const thumbsUsers = data.pride.thumbsUsers;
    const registerThumbsUser = Array.from(new Set([...thumbsUsers, photoURL]));
    console.log(registerThumbsUser);

    const updateDocRef = doc(db, collectionName, uid);
    await updateDoc(updateDocRef, {
      thumbsUsers: registerThumbsUser,
    });
  };

  const {
    data: prideContentList,
    mutate: prideContentMutate,
    isLoading: isLoadingPrideContent,
  } = useSWR('prideContent', () => readThisMonthPrideList());

  return {
    createPride,
    prideContentList,
    prideContentMutate,
    isLoadingPrideContent,
    pushLikeForPride,
  };
};
