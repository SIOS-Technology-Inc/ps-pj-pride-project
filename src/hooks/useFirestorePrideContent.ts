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
  limit,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';

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
          uid: data.uid,
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
  const readThisMonthRankingTop3 = async (): Promise<PrideContentFirestoreDataType[]> => {
    const collRef = collection(db, collectionName).withConverter(prideDataConverter);
    const queryRef = query(collRef, orderBy('thumbsUsers', 'desc'), limit(3));
    const snapshot = await getDocs(queryRef);
    return snapshot.docs.map((doc) => doc.data());
  };

  const readThisMonthOwnPrideContentList = async (
    uid: string
  ): Promise<PrideContentFirestoreDataType[]> => {
    const collRef = collection(db, collectionName).withConverter(prideDataConverter);
    const queryRef = query(collRef, where('uid', '==', uid));
    const snapshot = await getDocs(queryRef);

    return snapshot.docs.map((doc) => doc.data());
  };

  const pushLikeForPride = async (uid: string, photoURL: string): Promise<void> => {
    const docRef = doc(db, collectionName, uid).withConverter(prideDataConverter);
    const snapshot = await getDoc(docRef);

    const data = snapshot.data();

    if (!data) return;
    const thumbsUsers = data.pride.thumbsUsers;
    const registerThumbsUser = Array.from(new Set([...thumbsUsers, photoURL]));

    const updateDocRef = doc(db, collectionName, uid);
    await updateDoc(updateDocRef, {
      thumbsUsers: registerThumbsUser,
    });
  };

  return {
    createPride,
    readThisMonthPrideList,
    pushLikeForPride,
    readThisMonthRankingTop3,
    readThisMonthOwnPrideContentList,
  };
};
