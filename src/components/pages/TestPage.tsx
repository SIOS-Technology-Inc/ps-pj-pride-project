import { BarChart } from '../modules/BarChart';

export const TestPage = () => {
  return (
    <>
      <h1>Vote Comparison</h1>

      <BarChart votesA={120} votesB={150} />
    </>
  );
};
