import { useEffect, useState } from 'react';

import { animated, useSpring } from '@react-spring/web';

import { useMousePosition } from '@/hooks/useMouse';

export const CursorFollower = () => {
  const { x, y } = useMousePosition();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // React Spring アニメーションの設定
  const springProps = useSpring({
    xy: [position.x, position.y],
    config: { mass: 10, tension: 550, friction: 140 },
  });
  useEffect(() => {
    setPosition({ x: x, y: y });
  }, [x, y]);

  return (
    <div className="absolute top-0 -z-30 h-screen w-screen bg-slate-400">
      <animated.div
        className={'z-50'}
        style={{
          transform: springProps.xy.to((x, y) => `translate3d(${x}px, ${y}px, 0)`),
          width: 50,
          height: 50,
          borderRadius: '50%',
          backgroundColor: 'blue',
          position: 'absolute',
        }}
      />
    </div>
  );
};
