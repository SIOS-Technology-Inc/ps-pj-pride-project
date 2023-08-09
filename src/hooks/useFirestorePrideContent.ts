import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
  addDoc,
  collection,
  getDocs,
} from 'firebase/firestore';

import { db } from '@/auth/authFirebase';
import { PrideContentType } from '@/types/contentsType';

export const useFirestorePrideContent = () => {
  const today = new Date();
  const collectionName = today.getFullYear() + '-' + (today.getMonth() + 1) + 'pride';

  type PrideContentFirestoreDataType = {
    uid?: string;
    pride: PrideContentType;
  };

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
          sentence: data.sentence,
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
    await addDoc(collRef, { pride: content });
  };
  const readThisMonthPrideList = async (): Promise<PrideContentFirestoreDataType[]> => {
    const collRef = collection(db, collectionName).withConverter(prideDataConverter);
    const snapshot = await getDocs(collRef);
    return snapshot.docs.map((doc) => doc.data());
  };

  return { createPride, readThisMonthPrideList };
};
