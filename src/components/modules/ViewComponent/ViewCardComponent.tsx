import { useRef } from 'react';

import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';

import { ThumbsUpButton } from 'modules/ButtonComponent';

import {
  ViewMultiLineContent,
  ViewMultiLineImgListContent,
  ViewOneLineContent,
} from './ViewContentComponent';

import type { PrideContentType } from '@/types/contentsType';

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

type ViewRankingCardComponentProps = {
  prideContent: PrideContentType;
  rank: number;
};
export const ViewRankingCardComponent = (props: ViewRankingCardComponentProps) => {
  const { prideContent, rank } = props;
  const { userName, customerName, serviceName, thumbsUsers, title, userPhotoURL } = prideContent;

  return (
    <>
      <div className="flex w-full max-w-sm flex-col">
        <span className="flex w-full items-center justify-center text-2xl">TOP.{rank + 1}</span>
        <div className="flex w-full  flex-col gap-5 rounded-lg p-3 shadow-lg">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-2 ">
              <img src={userPhotoURL} alt="" className="h-10 w-10 rounded-full object-contain" />
              <span className="text-lg ">{userName}</span>
            </div>
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
      </div>
    </>
  );
};

type OwnViewLandscapeCardComponentProps = {
  prideContent: PrideContentType;
  onClickEdit: () => void;
  onClickDelete: () => void;
};
export const OwnViewLandscapeCardComponent = (props: OwnViewLandscapeCardComponentProps) => {
  const { prideContent, onClickDelete, onClickEdit } = props;
  const { userName, customerName, serviceName, thumbsUsers, title, userPhotoURL } = prideContent;
  const firstClick = useRef<boolean>(false);

  const onClickCommonFunction = async (onClick: () => void) => {
    if (firstClick.current) return;
    firstClick.current = true;
    await onClick();
    firstClick.current = false;
  };

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
        </div>
        <div className="flex w-full flex-row gap-2">
          <ViewMultiLineContent label="対象サービス" content={serviceName} />
          <ViewMultiLineContent label="顧客名・社内検証等" content={customerName} />
        </div>
        <ViewMultiLineImgListContent label="いいね！" contents={thumbsUsers} />

        <div className="flex justify-end gap-5">
          <button
            className="flex flex-row items-center gap-1 rounded-lg bg-[#DBDBDB] p-2 text-gray transition-transform hover:-translate-x-1 hover:-translate-y-1"
            onClick={() => onClickCommonFunction(onClickEdit)}
            disabled={firstClick.current}
          >
            <span>編集</span>

            <AiFillEdit />
          </button>
          <button
            className="flex flex-row items-center gap-1 rounded-lg bg-[#DBDBDB] p-2 text-gray transition-transform hover:-translate-x-1 hover:-translate-y-1"
            onClick={() => onClickCommonFunction(onClickDelete)}
            disabled={firstClick.current}
          >
            <span>削除</span>

            <AiFillDelete />
          </button>
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
