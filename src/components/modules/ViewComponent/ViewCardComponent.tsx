import { ThumbsUpButton } from '../ButtonComponent';

import { ViewMultiLineImgListContent, ViewOneLineContent } from './ViewContentComponent';

type ViewCardComponentProps = {
  userName: string;
  userPhotoURL: string;
  title: string;
  serviceName: string;
  customerName: string;
  memo: string;
  thumbsUsers: string[];
};

export const ViewCardComponent = (props: ViewCardComponentProps) => {
  const { userName, customerName, serviceName, thumbsUsers, title, memo, userPhotoURL } = props;
  return (
    <>
      <div className="flex w-full max-w-sm flex-col gap-5 rounded-lg p-3 shadow-lg">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2 ">
            <img src={userPhotoURL} alt="" className="h-10 w-10 rounded-full object-contain" />
            <span className="text-lg ">{userName}</span>
          </div>
          <ThumbsUpButton
            onClick={() => {
              null;
            }}
          />
        </div>
        <h2 className="text-2xl">{title}</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <ViewOneLineContent label="対象サービス" content={serviceName} />
            <ViewOneLineContent label="顧客名・社内検証等" content={customerName} />
          </div>
          <span className="text-lg">{memo}</span>
          <ViewMultiLineImgListContent label="いいね！" contents={thumbsUsers} />
        </div>
      </div>
    </>
  );
};
