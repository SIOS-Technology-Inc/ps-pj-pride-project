import { useRef, useState } from 'react';

import { Button } from '@/components/common/Button/Button';
import { TimerCounter } from '@/components/common/TimerCounter/TimerCounter';

type TimerProps = {
  limit?: number;
};

export const Timer = (props: TimerProps) => {
  const {} = props;
  const [timer, setTimer] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    setIsRunning(true);
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTimer((value) => value - 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
  const resetTimer = () => {
    setIsRunning(false);
    setTimer(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <div className="flex w-full flex-row justify-start">
      <TimerCounter time={timer} />
      <div className="flex flex-col gap-3">
        <Button color="blue" label="start" onClick={startTimer} />
        {isRunning && <Button color="default" label="pause" onClick={stopTimer} />}
        <Button color="default" label="reset" onClick={resetTimer} />
      </div>
      <div>
        <Button color="blue" label="10min" />
        <Button color="blue" label="30min" />
      </div>
    </div>
  );
};
