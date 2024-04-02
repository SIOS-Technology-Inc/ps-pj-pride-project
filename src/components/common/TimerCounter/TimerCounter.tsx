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

  const textBlackStyle = ' text-black';
  const textRedStyle = ' text-red-500';

  const textColor = isTimeOver ? textRedStyle : textBlackStyle;

  return (
    <h1 className={'flex grow items-center justify-center font-dela text-9xl ' + textColor}>
      {minutes}:{seconds}
    </h1>
  );
};
