import { usePridePastOneMonthAgo } from '@/hooks/usePride';

import { PastList } from '@/components/templates/PastList/PastList';
import { LoadingComponent } from '@/utilities/LoadingComponent';

import { Title } from '../common/Title/Title';

export const PastListPage = () => {
  const { prideListPastOneMonthAgo, isLoadingPastOneMonthAgo } = usePridePastOneMonthAgo();
  if (!prideListPastOneMonthAgo || isLoadingPastOneMonthAgo) return <LoadingComponent />;
  return (
    <>
      <Title label="過去の情報" />
      <PastList prides={prideListPastOneMonthAgo.prides} />
    </>
  );
};
