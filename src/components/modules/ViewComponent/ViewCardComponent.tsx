import { useRef } from 'react';

import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';

import { ThumbsUpButton } from 'modules/ButtonComponent';

import { ViewMultiLineImgListContent, ViewOnlyContent } from './ViewContentComponent';

import type { PrideContentType } from '@/types/contentsType';

type ViewCardComponentProps = {
  prideContent: PrideContentType;
  onClick: () => void;
};

type OwnViewLandscapeCardComponentProps = {
  prideContent: PrideContentType;
  onClickEdit: () => void;
  onClickDelete: () => void;
};
type PastViewLandscapeCardComponentProps = {
  prideContent: PrideContentType;
};

type ViewRankingCardComponentProps = {
  prideContent: PrideContentType;
  rank: number;
};

export const ViewRankingCardComponent = (props: ViewRankingCardComponentProps) => {
  const { prideContent, rank } = props;
  const { userName, memo, thumbsUsers, title, userPhotoURL } = prideContent;

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
            {memo != '' ? (
              <div className="flex flex-col gap-2">
                <ViewOnlyContent content={memo} />
              </div>
            ) : (
              <></>
            )}
            <ViewMultiLineImgListContent label="いいね！" contents={thumbsUsers} />
          </div>
        </div>
      </div>
    </>
  );
};

export const OwnViewLandscapeCardComponent = (props: OwnViewLandscapeCardComponentProps) => {
  const { prideContent, onClickDelete, onClickEdit } = props;
  const { userName, memo, thumbsUsers, title, userPhotoURL } = prideContent;
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
        {memo != '' ? (
          <div className="flex w-full flex-row gap-2">
            <ViewOnlyContent content={memo} />
          </div>
        ) : (
          <></>
        )}
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
export const PastViewLandscapeCardComponent = (props: PastViewLandscapeCardComponentProps) => {
  const { prideContent } = props;
  const { userName, memo, thumbsUsers, title, userPhotoURL } = prideContent;

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
        {memo != '' ? (
          <div className="flex w-full flex-row gap-2">
            <ViewOnlyContent content={memo} />
          </div>
        ) : (
          <></>
        )}
        <ViewMultiLineImgListContent label="いいね！" contents={thumbsUsers} />
      </div>
    </>
  );
};

export const ViewCardComponent = (props: ViewCardComponentProps) => {
  const { prideContent, onClick } = props;
  const { userName, memo, thumbsUsers, title, userPhotoURL, uid: contentOwnerUid } = prideContent;

  const { uid, user } = useFirebaseAuth();

  return (
    <>
      <div className="flex w-full max-w-sm flex-col gap-5 rounded-lg p-3 shadow-lg">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2 ">
            <img src={userPhotoURL} alt="" className="h-10 w-10 rounded-full object-contain" />
            <span className="text-lg ">{userName}</span>
          </div>
          <ThumbsUpButton
            onClick={() => onClick()}
            disable={uid == contentOwnerUid || thumbsUsers.includes(user.photoURL)}
          />
        </div>
        <h2 className="text-2xl">{title}</h2>
        <div className="flex flex-col gap-4">
          {memo != '' ? (
            <div className="flex flex-col gap-2">
              <ViewOnlyContent content={memo} />
            </div>
          ) : (
            <></>
          )}
          <ViewMultiLineImgListContent label="いいね！" contents={thumbsUsers} />
        </div>
      </div>
    </>
  );
};

export const ViewLandscapeDetailCardComponent = (props: ViewCardComponentProps) => {
  const { prideContent, onClick } = props;
  const { userName, thumbsUsers, title, userPhotoURL, memo, uid: contentOwnerUid } = prideContent;

  const { uid, user } = useFirebaseAuth();

  return (
    <>
      <div className="flex w-full flex-col gap-5 rounded-lg p-3 shadow-lg">
        <div className="flex flex-row justify-between">
          <div className="flex grow flex-row gap-4">
            <div className="flex flex-row items-center gap-2">
              <img src={userPhotoURL} alt="" className="h-10 w-10 rounded-full object-contain" />
              <span className="text-lg">{userName}</span>
            </div>
            <h2 className="grow text-2xl">{title}</h2>
          </div>
          <div className="flex flex-row items-center gap-4">
            <span className="text-lg">{thumbsUsers.length}</span>
            <ThumbsUpButton
              onClick={() => onClick()}
              disable={uid == contentOwnerUid || thumbsUsers.includes(user.photoURL)}
            />
          </div>
        </div>
        {memo != '' ? (
          <div className="flex w-full flex-row gap-2">
            <ViewOnlyContent content={memo} />
          </div>
        ) : (
          <></>
        )}
        <ViewMultiLineImgListContent label="いいね！" contents={thumbsUsers} />
      </div>
    </>
  );
};

export const ViewLandscapeSimpleCardComponent = (props: ViewCardComponentProps) => {
  const { prideContent, onClick } = props;
  const { userName, thumbsUsers, title, userPhotoURL, uid: contentOwnerUid } = prideContent;

  const { uid, user } = useFirebaseAuth();

  return (
    <>
      <div className="flex w-full flex-col gap-5 rounded-lg p-3 shadow-sm">
        <div className="flex flex-row justify-between">
          <div className="flex grow flex-row gap-4">
            <div className="flex flex-row items-center gap-2">
              <img src={userPhotoURL} alt="" className="h-10 w-10 rounded-full object-contain" />
              <span className="text-lg">{userName}</span>
            </div>
            <h2 className="grow text-2xl">{title}</h2>
          </div>
          <div className="flex flex-row items-center gap-4">
            <span className="text-lg">{thumbsUsers.length}</span>
            <ThumbsUpButton
              onClick={() => onClick()}
              disable={uid == contentOwnerUid || thumbsUsers.includes(user.photoURL)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
