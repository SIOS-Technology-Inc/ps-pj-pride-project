import { useState } from 'react';

import { animated, useChain, useSpring, useSpringRef, useTrail } from '@react-spring/web';

// プロパティの型を定義
interface BarChartProps {
  votesA: number;
  votesB: number;
}

export const BarChart = (props: BarChartProps) => {
  const { votesA, votesB } = props;
  // 最大票数を基準に棒グラフの高さを計算
  const maxVotes = Math.max(votesA, votesB);
  const heightA = (votesA / maxVotes) * 100;
  const heightB = (votesB / maxVotes) * 100;

  console.log(heightA, heightB);

  // React Springを使用してアニメーションを適用
  const propsA = useSpring({ from: { height: 0 }, height: heightA });
  const propsB = useSpring({ to: { height: heightB }, from: { height: 0 } });

  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  const [visible, setVisible] = useState(false);
  const fadeStyles = useSpring({ opacity: visible ? 1 : 0 });

  const STROKE_WIDTH = 0.5;
  const OFFSET = STROKE_WIDTH / 2;
  const MAX_WIDTH = 400 + OFFSET * 2;
  const MAX_HEIGHT = 400 + OFFSET * 2;

  const gridApi = useSpringRef();

  const gridSprings = useTrail(16, {
    ref: gridApi,
    from: {
      x2: 0,
      y2: 0,
    },
    to: {
      x2: MAX_WIDTH,
      y2: MAX_HEIGHT,
    },
  });

  useChain([gridApi], [0, 1], 1500);

  return (
    <>
      <div className="flex h-80 w-full grow flex-row items-end justify-around">
        <div>
          <animated.div style={fadeStyles}>I fade in and out</animated.div>
          <button onClick={() => setVisible(!visible)}>Toggle</button>
        </div>
        <animated.div style={fade} className="m-4 rounded bg-blue-200 p-4 text-lg">
          これはフェードインアニメーションとTailwindスタイリングが適用されたコンポーネントです。
        </animated.div>
        <animated.div className={'h-0 w-10 bg-blue-400'} style={propsA} />
        <animated.div className={'w-10 bg-red-400'} style={propsB} />
      </div>
      <div className={'flex h-auto w-auto '}>
        <svg viewBox={`0 0 ${MAX_WIDTH} ${MAX_HEIGHT}`}>
          <g>
            {gridSprings.map(({ x2 }, index) => (
              <animated.line
                x1={0}
                y1={index * 10 + OFFSET}
                x2={x2}
                y2={index * 10 + OFFSET}
                key={index}
                className={'stroke-blue-500 stroke-1'}
              />
            ))}
            {gridSprings.map(({ y2 }, index) => (
              <animated.line
                x1={index * 10 + OFFSET}
                y1={0}
                x2={index * 10 + OFFSET}
                y2={y2}
                key={index}
                className={'stroke-red-600 stroke-1'}
              />
            ))}
          </g>
        </svg>
      </div>
    </>
  );
};
