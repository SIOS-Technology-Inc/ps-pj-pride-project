import { useEffect, useState } from 'react';

import { onValue } from 'firebase/database';

import { useRealtimeDatabase } from '@/hooks/useRealtimeDatabase';

import { Timer } from '@/components/modules/Timer/Timer';

export const TimerPage = () => {
  const { textRef, effectRef } = useRealtimeDatabase();
  const [text, setText] = useState<string>('');
  const [effect, setEffect] = useState<number>(0);

  useEffect(() => {
    const onChange = onValue(textRef, (snapshot) => {
      const data = snapshot.val();
      if (typeof data != 'string') return;
      setText(data);
    });
    return onChange;
  }, [textRef]);

  useEffect(() => {
    const onChange = onValue(effectRef, (snapshot) => {
      const data = snapshot.val();
      if (typeof data != 'number') return;
      setEffect(data);
    });
    return onChange;
  }, [effectRef]);

  return (
    <>
      <h1 className="absolute bottom-28 left-1/2 -translate-x-1/2 text-4xl">
        {text}:{effect}
      </h1>
      <Timer />
    </>
  );
};
