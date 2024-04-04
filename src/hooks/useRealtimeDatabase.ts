import { useMemo } from 'react';

import { ref, set } from 'firebase/database';

import { database } from '@/auth/authFirebase';

export const useRealtimeDatabase = () => {
  const textRef = useMemo(() => ref(database, '/text'), []);
  const saveTextData = (text: string) => {
    set(textRef, text);
  };
  const effectRef = useMemo(() => ref(database, '/effect'), []);
  const saveEffectData = (number: number) => {
    set(effectRef, number);
  };

  return { textRef, saveTextData, effectRef, saveEffectData };
};
