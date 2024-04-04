import { useRef, useState } from 'react';

import { TimerButton } from '@/components/common/TimerButton/TimerButton';
import { TimerCounter } from '@/components/common/TimerCounter/TimerCounter';

export const Timer = () => {
  const [timer, setTimer] = useState(10 * 60);
  const [defaultValue, setDefaultValue] = useState(10 * 60);
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
    setTimer(defaultValue);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
  const setTimerValue = (value: number) => {
    setTimer(value);
    setDefaultValue(value);
  };
  return (
    <>
      <TimerCounter time={timer} />
      <div className="absolute bottom-0 left-0 flex w-full flex-row justify-between p-5">
        <div className="flex flex-row gap-3">
          <TimerButton color="fillBlue" label="start" onClick={startTimer} />
          <TimerButton color="fillRed" label="pause" onClick={stopTimer} disabled={!isRunning} />
          <TimerButton color="fillRed" label="reset" onClick={resetTimer} />
        </div>
        <div className="flex flex-row gap-3">
          <TimerButton color="blue" label="10" onClick={() => setTimerValue(10 * 60)} />
          <TimerButton color="blue" label="20" onClick={() => setTimerValue(20 * 60)} />
        </div>
      </div>
    </>
  );
};
