export type PrideContentType = {
  userName: string;
  userPhotoURL: string;
  title: string;
  serviceName: string;
  customerName: string;
  sentence: string;
  thumbsUsers: string[];
};

export type InputFormPrideContentType = {
  title: string;
  serviceName: string;
  customerName: string;
  sentence: string;
};

export type PrideContentFirestoreDataType = {
  uid: string;
  pride: PrideContentType;
};
