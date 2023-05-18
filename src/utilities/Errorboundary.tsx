import React, { ErrorInfo } from 'react';

import { isAxiosError } from 'axios';

export default class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; errorMessage: string }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    // ここでStateの変更を行って処理を振り分けたりする。Axiosの処理回りは可能でしょうか？
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
    // ログに通知したりする部分
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  componentDidMount() {
    window.addEventListener('unhandledrejection', this.onUnhandledRejection);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.onUnhandledRejection);
  }

  onUnhandledRejection = (event: PromiseRejectionEvent) => {
    event.promise.catch((error) => {
      if (isAxiosError(error)) {
        this.setState({ hasError: true, errorMessage: 'Axios Error' });
      } else {
        this.setState(ErrorBoundary.getDerivedStateFromError(error));
      }
    });
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.{this.state.errorMessage}</h1>;
    }
    return this.props.children;
  }
}
