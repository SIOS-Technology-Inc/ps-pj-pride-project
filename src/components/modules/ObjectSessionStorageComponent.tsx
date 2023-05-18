import { useState } from 'react';

type ObjectType = {
  text: string;
  task: boolean;
};

export const ObjectSessionStorageComponent = () => {
  const [storageValue, setStorageValue] = useState<ObjectType>({
    text: '',
    task: false,
  });
  const [inputValue, setInputValue] = useState<ObjectType>({
    text: '',
    task: false,
  });

  const getSessionStorageValue = () => {
    const temp = sessionStorage.getItem('object');
    if (temp != null) {
      const objectData = JSON.parse(temp) as ObjectType;

      setInputValue(objectData);
      setStorageValue(objectData);
    }
  };
  const setSessionStorageValue = () => {
    const temp = JSON.stringify(inputValue);
    sessionStorage.setItem('object', temp);

    setStorageValue(inputValue);
  };
  const resetSessionStorageValue = () => {
    sessionStorage.setItem('object', '');
    setInputValue({ text: '', task: false });
    setStorageValue({ text: '', task: false });
  };
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-row gap-1">
        <span className="input-title">読み込み</span>
        <span className="input-text">text:{storageValue.text}</span>
        <span className="input-text">
          task:{storageValue.task ? 'true' : 'false'}
        </span>
        <button onClick={getSessionStorageValue}>sessionStorageから取得</button>
      </div>
      <div className="flex flex-row gap-1">
        <span className="input-title">書き込み</span>
        <input
          className="input-text"
          type="text"
          value={inputValue.text}
          onChange={(event) => {
            setInputValue({ ...inputValue, text: event.target.value });
          }}
        />
        <input
          type="checkbox"
          className="input-text"
          checked={inputValue.task}
          onClick={() => {
            setInputValue({ ...inputValue, task: !inputValue.task });
          }}
        />
        <button
          value={'sessionStorageに書き込み'}
          placeholder="書き込んでね"
          onClick={setSessionStorageValue}
        >
          sessionStorageに書き込み
        </button>
      </div>
      <div className="flex items-center justify-start">
        <span className="input-title">消去</span>
        <button onClick={resetSessionStorageValue}>
          sessionStorageリセット
        </button>
      </div>
    </section>
  );
};
