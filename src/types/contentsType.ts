export type PrideContentType = {
  uid: string;
  userName: string;
  userPhotoURL: string;
  title: string;
  serviceName: string;
  customerName: string;
  thumbsUsers: string[];
  createdAt?: Date;
};

export type InputFormPrideContentType = {
  title: string;
  serviceName: string;
  customerName: string;
};

export type PrideContentFirestoreDataType = {
  uid: string;
  pride: PrideContentType;
};
