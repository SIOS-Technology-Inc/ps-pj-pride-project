import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import NotFoundImage from 'src/assets/404.png';

import { TitleComponent } from '@/components/modules/TitleComponent';

type Props = {
  children: React.ReactNode;
};
export const ErrorBoundaryComponent = (props: Props) => {
  const { children } = props;

  return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
};

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  console.error(error);
  return (
    <>
      <TitleComponent label="API Error" />
      <img src={NotFoundImage} className="h-64 w-64 object-contain" alt="" />
      <div className="flex flex-col gap-2 text-lg">
        <p>
          データの扱い部分で失敗したようです。問い合わせは
          <span className="text-red-500">ry-tanaka@sios.com</span>にお願いします。Slackは
          <span className="text-red-500">@ry-tanaka</span>です。
        </p>
      </div>
      <button className="rounded-md bg-red-500 py-2 px-10 text-white" onClick={resetErrorBoundary}>
        リトライ
      </button>
    </>
  );
};
