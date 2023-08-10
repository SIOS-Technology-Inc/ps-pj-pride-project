import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';
import { useFirestorePrideContent } from '@/hooks/useFirestorePrideContent';
import { LoadingComponent } from '@/utilities/LoadingComponent';

import { TitleComponent } from '../modules/TitleComponent';
import { ViewCardComponent } from '../modules/ViewComponent/ViewCardComponent';

export const ThumbsUpPage = () => {
  const date = new Date();
  const month = date.getMonth() + 1;

  const { user } = useFirebaseAuth();
  const { prideContentList, isLoadingPrideContent, prideContentMutate, pushLikeForPride } =
    useFirestorePrideContent();

  const onClickThumbsUpButton = async (uid: string) => {
    console.log(uid);
    await pushLikeForPride(uid, user.photoURL);
    prideContentMutate();
  };

  if (isLoadingPrideContent || !prideContentList) return <LoadingComponent />;

  return (
    <>
      <TitleComponent label={month + '月分褒めたたえよう'} />
      <div className="flex w-full flex-row flex-wrap justify-between gap-y-10">
        {prideContentList.map((content) => (
          <ViewCardComponent
            key={content.uid}
            prideContent={content.pride}
            onClick={() => onClickThumbsUpButton(content.uid)}
          />
        ))}
      </div>
    </>
  );
};
