import { useAuthenticated } from '@/hooks/useAuth';
import { usePrideWithinOneMonth } from '@/hooks/usePride';

import { ThumbsUpList } from '@/components/object/ThumbsUpList/ThumbsUpList';
import { LoadingComponent } from '@/utilities/LoadingComponent';

import { Title } from '../common/Title/Title';

export const ThumbsUpPage = () => {
  const date = new Date();
  const month = date.getMonth() + 1;

  const { user, uid: userID } = useAuthenticated();
  const { prideListWithinOneMonth, isLoadingWithinOneMonth, onClickThumbsUpButtonFunction } =
    usePrideWithinOneMonth();

  const onClickThumbsUpButton = (uid: string) => {
    onClickThumbsUpButtonFunction(uid, user.photoURL);
  };
  if (!prideListWithinOneMonth || isLoadingWithinOneMonth) return <LoadingComponent />;

  return (
    <>
      <Title label={month + '月分褒めたたえよう'} />
      <ThumbsUpList
        onClickThumbsUpButton={onClickThumbsUpButton}
        prides={prideListWithinOneMonth.prides}
        userID={userID}
        photoURL={user.photoURL}
      />
    </>
  );
};
