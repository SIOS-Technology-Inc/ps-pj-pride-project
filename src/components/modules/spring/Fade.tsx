import { useState } from 'react';

import { animated, useSpring } from '@react-spring/web';

export const Fade = () => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  const [visible, setVisible] = useState(false);
  const fadeStyles = useSpring({ opacity: visible ? 1 : 0 });
  return (
    <div className="h-96 w-96">
      <animated.div style={fade} className="m-4 rounded bg-blue-200 p-4 text-lg">
        これはフェードインアニメーションとTailwindスタイリングが適用されたコンポーネントです。
      </animated.div>
      <animated.div style={fadeStyles}>I fade in and out</animated.div>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
    </div>
  );
};
