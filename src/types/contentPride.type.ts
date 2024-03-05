export type PrideContentType = {
  uid: string;
  userID: string;
  title: string;
  memo: string;
  userName: string;
  userPhotoURL: string;
  thumbsupUsers: string[];
  thumbsupCount: number;
  createdAt: Date;
};

export type PrideList = {
  prides: PrideContentType[];
};
