import { useAuthenticated } from '@/hooks/useAuth';
import { usePrideContent } from '@/hooks/usePrideContent';
import { useFetchThisMonthPrideList } from '@/hooks/useReadPrideContent';

import { ThumbsUpList } from '@/components/object/ThumbsUpList/ThumbsUpList';
import { LoadingComponent } from '@/utilities/LoadingComponent';

import { Title } from '../common/Title/Title';

export const ThumbsUpPage = () => {
  const date = new Date();
  const month = date.getMonth() + 1;

  const { user, uid } = useAuthenticated();
  const { pushLikeForPride } = usePrideContent();
  const { prideContentList, isLoadingPrideContent, prideContentMutate } =
    useFetchThisMonthPrideList();

  const onClickThumbsUpButton = async (uid: string) => {
    await pushLikeForPride(uid, user.photoURL);
    prideContentMutate();
  };

  if (isLoadingPrideContent || !prideContentList) return <LoadingComponent />;

  return (
    <>
      <Title label={month + '月分褒めたたえよう'} />
      <ThumbsUpList
        onClickThumbsUpButton={onClickThumbsUpButton}
        prides={prideContentList}
        userID={uid}
        photoURL={user.photoURL}
      />
    </>
  );
};
