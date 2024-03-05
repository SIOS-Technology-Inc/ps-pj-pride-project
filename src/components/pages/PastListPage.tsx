import { usePridePastOneMonthAgo } from '@/hooks/usePride';

import { UserPrideList } from '@/components/object/UserPrideList/UserPrideList';
import { LoadingComponent } from '@/utilities/LoadingComponent';

import { Title } from '../common/Title/Title';

export const PastListPage = () => {
  const { prideListPastOneMonthAgo, isLoadingPastOneMonthAgo } = usePridePastOneMonthAgo();
  if (!prideListPastOneMonthAgo || isLoadingPastOneMonthAgo) return <LoadingComponent />;
  return (
    <>
      <Title label="過去の情報" />
      <div className="relative flex w-full flex-row items-start gap-4">
        <div className="flex w-full flex-col gap-2">
          <UserPrideList prides={prideListPastOneMonthAgo.prides} />
        </div>
      </div>
    </>
  );
};
