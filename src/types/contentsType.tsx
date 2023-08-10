export type PrideContentType = {
  userName: string;
  userPhotoURL: string;
  title: string;
  serviceName: string;
  customerName: string;
  thumbsUsers: string[];
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
