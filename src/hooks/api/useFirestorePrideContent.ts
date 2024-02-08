import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
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
      if (content.pride.createdAt) {
        return {
          ...content.pride,
          thumbsCount: content.pride.thumbsUsers.length,
          createdAt: content.pride.createdAt.getTime(),
        };
      }
      return {
        ...content.pride,
        thumbsCount: content.pride.thumbsUsers.length,
        createdAt: serverTimestamp(),
      };
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
          memo: data.memo ? data.memo : '',
          thumbsUsers: data.thumbsUsers,
          userName: data.userName,
          userPhotoURL: data.userPhotoURL,
          createdAt: data.createdAt ? new Date(data.createdAt.seconds * 1000) : new Date(),
        },
      };
    },
  };

  const createPride = async (content: PrideContentType): Promise<void> => {
    const collRef = collection(db, collectionName).withConverter(prideDataConverter);
    await addDoc(collRef, { uid: '自動生成されるのでダミーで入れてます', pride: content });
  };

  const updatePride = async (uid: string, content: PrideContentType): Promise<void> => {
    const updateDocRef = doc(db, collectionName, uid).withConverter(prideDataConverter);
    await updateDoc(updateDocRef, {
      ...content,
    });
  };

  const deletePride = async (uid: string): Promise<void> => {
    const updateDocRef = doc(db, collectionName, uid);
    await deleteDoc(updateDocRef);
  };

  const readThisMonthPrideList = async (): Promise<PrideContentFirestoreDataType[]> => {
    const collRef = collection(db, collectionName).withConverter(prideDataConverter);
    const queryRef = query(collRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(queryRef);
    return snapshot.docs.map((doc) => doc.data());
  };

  const readLastMonthRankingTop3 = async (): Promise<PrideContentFirestoreDataType[]> => {
    const targetCollection = () => {
      if (today.getMonth() == 0) return today.getFullYear() - 1 + '-12-pride';
      return today.getFullYear() + '-' + today.getMonth() + '-pride';
    };
    const collectionName = targetCollection();
    const collRef = collection(db, collectionName).withConverter(prideDataConverter);
    const queryRef = query(collRef, orderBy('thumbsCount', 'desc'), limit(3));
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
      thumbsCount: registerThumbsUser.length,
    });
  };

  const readTargetMonthPrideList = async (
    target: string
  ): Promise<PrideContentFirestoreDataType[]> => {
    const collRef = collection(db, target).withConverter(prideDataConverter);
    const queryRef = query(collRef, orderBy('thumbsCount', 'desc'));

    const snapshot = await getDocs(queryRef);

    return snapshot.docs.map((doc) => doc.data());
  };

  return {
    createPride,
    updatePride,
    deletePride,
    readThisMonthPrideList,
    pushLikeForPride,
    readLastMonthRankingTop3,
    readThisMonthOwnPrideContentList,
    readTargetMonthPrideList,
  };
};
