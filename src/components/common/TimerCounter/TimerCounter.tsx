import { useMemo } from 'react';

type TimerCounterProps = {
  time: number;
};

export const TimerCounter = (props: TimerCounterProps) => {
  const { time } = props;

  const isTimeOver = useMemo(() => time <= 0, [time]);

  const minutes = useMemo(() => {
    const temp = isTimeOver ? time * -1 : time;
    const minute = Math.floor(temp / 60);
    if (minute < 10) {
      return `0${minute}`;
    } else {
      return `${minute}`;
    }
  }, [time, isTimeOver]);

  const seconds = useMemo(() => {
    const temp = isTimeOver ? time * -1 : time;
    const second = Math.floor(temp % 60);
    if (second < 10) {
      return `0${second}`;
    } else {
      return `${second}`;
    }
  }, [time, isTimeOver]);

  return (
    <h1
      className={
        'flex grow items-center justify-center font-dela text-[240px] ' +
        (isTimeOver ? ' text-red-500' : ' text-black')
      }
    >
      {minutes}:{seconds}
    </h1>
  );
};
