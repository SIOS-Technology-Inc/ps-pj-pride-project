import { Suspense, useEffect } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import axios from 'axios';
import { useRecoilValue } from 'recoil';

import { testState } from '@/provider/firebaseStore';
import OfficailSampleErrorBoundary from '@/utilities/Errorboundary';

export const ErrorBoundaryPage = () => {
  // Suspenseでエラーをキャッチするには難しい部分がある
  // Suspense前提で組む場合は良いけども、あまりよくはないかもしれない
  // デフォルトの設定部分で追加してしまうと全てのAxiosエラーをキャッチしてしまうので使い勝手が悪い
  // recoilで取得する分には問題なくキャッチできる
  // SWRで取得するとエラーはキャッチできる
  const ErrorOccuredUserAxiosSuspenceComponet = () => {
    // const data = axios.get('https://localteset.com/yesyes');
    // recoilで取得していればReact側でキャッチされる
    const data = useRecoilValue(testState);
    console.log(data);

    return <>Axios data suspence</>;
  };

  return (
    <>
      {/* network errorをキャッチしたい設定をするとうまくいかないでござる */}
      <main className="flex flex-col gap-10">
        <div>
          <h1>offical sample</h1>
          <OfficailSampleErrorBoundary>
            <ErrorOccuredUseAxiosComponent />
          </OfficailSampleErrorBoundary>
          <OfficailSampleErrorBoundary>
            <ErrorOccurredComponent />
          </OfficailSampleErrorBoundary>
        </div>

        <div>
          <h1>error boundary</h1>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<>loading</>}>
              <ErrorOccuredUserAxiosSuspenceComponet />
            </Suspense>
          </ErrorBoundary>
          <div>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<>loading</>}>
                <ErrorOccuredUseAxiosComponent />
              </Suspense>
            </ErrorBoundary>
          </div>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <ErrorOccurredComponent />
          </ErrorBoundary>
        </div>

        <div>
          <h1>error boundary axios</h1>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            {/* axiosのエラーは取得できない確認用 */}
            <ErrorOccuredUseAxiosComponent />
          </ErrorBoundary>
          <h1>error boudary axios swr</h1>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<>loading</>}>
              <ErrorOccuredUserAxiosSuspenceComponet />
            </Suspense>
          </ErrorBoundary>
        </div>
      </main>
    </>
  );
};

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <>
      <pre>react-error-boundary {error.message}</pre>
      <button type="button" onClick={resetErrorBoundary}>
        reset button
      </button>
    </>
  );
};
const ErrorOccurredComponent = () => {
  throw new Error('エラーが起きました。');
};

const ErrorOccuredUseAxiosComponent = () => {
  useEffect(() => {
    axios.get('https://localteset.com/yesyes');
  }, []);

  return <>Axios Data</>;
};
