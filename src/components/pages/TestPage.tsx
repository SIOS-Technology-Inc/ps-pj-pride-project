import { BarChart } from '../modules/spring/BarChart';
import { Cross } from '../modules/spring/Cross';
import { CursorFollower } from '../modules/spring/CursorFollower';
import { Fade } from '../modules/spring/Fade';

export const TestPage = () => {
  return (
    <main className="flex flex-row gap-10">
      <BarChart votesA={120} votesB={150} />
      <Cross />
      <Fade />
      <CursorFollower />
    </main>
  );
};
