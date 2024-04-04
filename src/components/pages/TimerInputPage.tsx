import { useEffect, useState } from 'react';

import { onValue } from 'firebase/database';

import { useRealtimeDatabase } from '@/hooks/useRealtimeDatabase';

import { Button } from '@/components/common/Button/Button';
import { FormTukkomi } from '@/components/modules/FormTukkomi/FormTukkomi';

export const TimerInputPage = () => {
  const { textRef, saveTextData, effectRef, saveEffectData } = useRealtimeDatabase();
  const [text, setText] = useState<string>('');
  const [effect, setEffect] = useState<number>(0);

  const onClickSubmit = (text: string) => {
    saveTextData(text);
  };

  const onClickEffectSubmit = (number: number) => {
    saveEffectData(number);
  };

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
      console.log(data);
      if (typeof data != 'number') return;
      setEffect(data);
    });
    return onChange;
  }, [effectRef]);

  return (
    <>
      <div>現在のツッコミ：{text}</div>
      <FormTukkomi tukkomi={text} onClickSubmit={onClickSubmit} />
      <div>現在のエフェクト:{effect}</div>
      <div className="flex flex-row">
        <Button color="fillRed" label="reset" onClick={() => onClickEffectSubmit(0)} />
        <Button color="fillRed" label="reset" onClick={() => onClickEffectSubmit(1)} />
        <Button color="fillRed" label="reset" onClick={() => onClickEffectSubmit(2)} />
        <Button color="fillRed" label="reset" onClick={() => onClickEffectSubmit(3)} />
      </div>
    </>
  );
};
