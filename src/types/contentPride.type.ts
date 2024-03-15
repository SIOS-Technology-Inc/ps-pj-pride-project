export type PrideContentType = {
  uid: string;
  title: string;
  memo: string;
  thumbsupUsers: string[];
  thumbsupCount: number;
  createdAt: Date;
  userID: string;
  userName: string;
  userPhotoURL: string;
};

export type PrideList = {
  prides: PrideContentType[];
};
