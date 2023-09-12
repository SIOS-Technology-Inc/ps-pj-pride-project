export type PrideContentType = {
  uid: string;
  userName: string;
  userPhotoURL: string;
  title: string;
  memo: string;
  thumbsUsers: string[];
  createdAt?: Date;
};

export type InputFormPrideContentType = {
  title: string;
  memo: string;
};

export type PrideContentFirestoreDataType = {
  uid: string;
  pride: PrideContentType;
};
