import { useEffect, useState } from 'react';

import { onValue } from 'firebase/database';

import { useRealtimeDatabase } from '@/hooks/useRealtimeDatabase';

import { Timer } from '@/components/modules/Timer/Timer';

export const TimerPage = () => {
  const { textRef } = useRealtimeDatabase();
  const [text, setText] = useState<string>('');

  useEffect(() => {
    const onChange = onValue(textRef, (snapshot) => {
      const data = snapshot.val();
      if (typeof data != 'string') return;
      setText(data);
    });
    return onChange;
  }, [textRef]);

  return (
    <>
      <h1 className="absolute bottom-28 left-1/2 -translate-x-1/2 text-4xl">{text}</h1>
      <Timer />
    </>
  );
};
