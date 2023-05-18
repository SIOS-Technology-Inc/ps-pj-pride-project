import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  FirestoreDataConverter,
  getDocs,
  QueryDocumentSnapshot,
  serverTimestamp,
  setDoc,
  SnapshotOptions,
} from 'firebase/firestore';

import { db } from '@/auth/authFirebase';
import { todoType } from '@/types/firestoreType';

export const useFireStore = () => {
  const todoConverter: FirestoreDataConverter<todoType> = {
    fromFirestore(
      snapshot: QueryDocumentSnapshot,
      options: SnapshotOptions
    ): todoType {
      const data = snapshot.data(options);
      return {
        uid: snapshot.id,
        done: data.done,
        text: data.text,
        timestamp: data.timestamp.toDate(),
      };
    },
    toFirestore(todo: todoType): DocumentData {
      return {
        text: todo.text,
        done: todo.done,
        timestamp: todo.timestamp ? todo.timestamp : serverTimestamp(),
      };
    },
  };
  const getTodo = async (): Promise<todoType[]> => {
    const collRef = collection(db, 'todo').withConverter(todoConverter);
    const snapshot = await getDocs(collRef);
    const result = snapshot.docs.map((doc) => doc.data());
    return result;
  };
  const addTodo = async (todo: todoType): Promise<void> => {
    const collRef = collection(db, 'todo').withConverter(todoConverter);
    await addDoc(collRef, todo);
  };
  const editTodo = async (todo: todoType): Promise<void> => {
    const collRef = collection(db, 'todo');
    const docRef = doc(collRef, todo.uid);
    await setDoc(docRef, todo);
  };
  const deleteTodo = async (uid: string): Promise<void> => {
    const collRef = collection(db, 'todo');
    const docRef = doc(collRef, uid);
    await deleteDoc(docRef);
  };

  return { getTodo, addTodo, editTodo, deleteTodo };
};
