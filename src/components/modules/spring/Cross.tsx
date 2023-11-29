import { animated, useChain, useSpringRef, useTrail } from '@react-spring/web';

export const Cross = () => {
  const STROKE_WIDTH = 0.5;
  const OFFSET = STROKE_WIDTH / 2;
  const MAX_WIDTH = 100 + OFFSET * 2;
  const MAX_HEIGHT = 100 + OFFSET * 2;

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
      <div className={'flex h-96 w-96 bg-black p-10'}>
        <svg viewBox={`0 0 ${MAX_WIDTH} ${MAX_HEIGHT}`}>
          <g>
            {gridSprings.map(({ x2 }, index) => (
              <animated.line
                x1={0}
                y1={index * 10 + OFFSET}
                x2={x2}
                y2={index * 10 + OFFSET}
                key={index}
                className={'stroke-white stroke-1'}
              />
            ))}
            {gridSprings.map(({ y2 }, index) => (
              <animated.line
                x1={index * 10 + OFFSET}
                y1={0}
                x2={index * 10 + OFFSET}
                y2={y2}
                key={index}
                className={'stroke-white stroke-1'}
              />
            ))}
          </g>
        </svg>
      </div>
    </>
  );
};
