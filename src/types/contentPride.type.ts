export type PrideContent = {
  uid: string;
  userID: string;
  title: string;
  memo: string;
  thumbsupUsers: [];
  thumbsupCount: number;
  createdAt: Date;
};

export type PrideList = {
  prides: PrideContent[];
};
