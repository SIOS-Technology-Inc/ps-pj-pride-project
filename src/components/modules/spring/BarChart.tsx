import { animated, useSpring } from '@react-spring/web';

// プロパティの型を定義
interface BarChartProps {
  votesA: number;
  votesB: number;
}

export const BarChart = (props: BarChartProps) => {
  const { votesA, votesB } = props;
  // 最大票数を基準に棒グラフの高さを計算
  const totalVote = votesA + votesB;
  const heightA = (votesA / totalVote) * 100;
  const heightB = (votesB / totalVote) * 100;

  console.log(heightA, heightB);

  // React Springを使用してアニメーションを適用
  const propsA = useSpring({ from: { height: '0%' }, height: `${heightA}%` });
  const propsB = useSpring({ to: { height: `${heightB}%` }, from: { height: '0%' } });

  return (
    <>
      <div className="flex h-96 w-96 flex-row items-end justify-around">
        <animated.div className={'w-10 bg-blue-400'} style={propsA} />
        <animated.div className={'w-10 bg-red-400'} style={propsB} />
      </div>
    </>
  );
};
