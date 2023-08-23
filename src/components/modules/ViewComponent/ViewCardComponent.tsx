import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';
import { PrideContentType } from '@/types/contentsType';

import { ThumbsUpButton } from '../ButtonComponent';

import {
  ViewMultiLineContent,
  ViewMultiLineImgListContent,
  ViewOneLineContent,
} from './ViewContentComponent';

type ViewCardComponentProps = {
  prideContent: PrideContentType;
  onClick: () => void;
};

export const ViewCardComponent = (props: ViewCardComponentProps) => {
  const { prideContent, onClick } = props;
  const { userName, customerName, serviceName, thumbsUsers, title, userPhotoURL, uid } =
    prideContent;

  const { uid: userId } = useFirebaseAuth();

  return (
    <>
      <div className="flex w-full max-w-sm flex-col gap-5 rounded-lg p-3 shadow-lg">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2 ">
            <img src={userPhotoURL} alt="" className="h-10 w-10 rounded-full object-contain" />
            <span className="text-lg ">{userName}</span>
          </div>
          <ThumbsUpButton onClick={() => onClick()} disable={uid == userId} />
        </div>
        <h2 className="text-2xl">{title}</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <ViewOneLineContent label="対象サービス" content={serviceName} />
            <ViewOneLineContent label="顧客名・社内検証等" content={customerName} />
          </div>
          <ViewMultiLineImgListContent label="いいね！" contents={thumbsUsers} />
        </div>
      </div>
    </>
  );
};

export const ViewLandscapeCardComponent = (props: ViewCardComponentProps) => {
  const { prideContent, onClick } = props;
  const { userName, thumbsUsers, title, userPhotoURL, serviceName, customerName } = prideContent;

  const { user } = useFirebaseAuth();

  return (
    <>
      <div className="flex w-full flex-col gap-5 rounded-lg p-3 shadow-lg">
        <div className="flex flex-row">
          <div className="flex grow flex-row gap-4">
            <div className="flex flex-row items-center gap-2">
              <img src={userPhotoURL} alt="" className="h-10 w-10 rounded-full object-contain" />
              <span className="text-lg">{userName}</span>
            </div>
            <h2 className="grow text-2xl">{title}</h2>
          </div>
          <ThumbsUpButton onClick={() => onClick()} disable={thumbsUsers.includes(user.photoURL)} />
        </div>
        <div className="flex w-full flex-row gap-2">
          <ViewMultiLineContent label="対象サービス" content={serviceName} />
          <ViewMultiLineContent label="顧客名・社内検証等" content={customerName} />
        </div>
        <ViewMultiLineImgListContent label="いいね！" contents={thumbsUsers} />
      </div>
    </>
  );
};
