import { useState } from 'react';

export const SimpleSessionStorageComponet = () => {
  const [storageValue, setStorageValue] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');

  const getSessionStorageValue = () => {
    const temp = sessionStorage.getItem('simple');
    if (temp != null) {
      setStorageValue(temp);
      setInputValue(temp);
    }
  };
  const setSessionStorageValue = () => {
    sessionStorage.setItem('simple', inputValue);
    setStorageValue(inputValue);
  };
  const resetSessionStorageValue = () => {
    sessionStorage.setItem('simple', '');
    setStorageValue('');
    setInputValue('');
  };
  return (
    <>
      <section className="flex flex-col gap-5">
        <div className="flex flex-row gap-1">
          <span className="input-title">読み込み</span>
          <span className="input-text">{storageValue}</span>
          <button onClick={getSessionStorageValue}>
            sessionStorageから取得
          </button>
        </div>
        <div className="flex flex-row gap-1">
          <span className="input-title">書き込み</span>
          <input
            className="input-text"
            type="text"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
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
    </>
  );
};
