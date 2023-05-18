import React, { ErrorInfo } from 'react';

export default class ErrorBoundaryVersion2 extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; errorMessage: string }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error: Error) {
    // ここでエラーを受け取る
    // ここでStateの変更を行って処理を振り分けたりする。
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // ログに通知したりする部分
    console.error(error, errorInfo);
  }

  render() {
    const btnClick = () => {
      window.location.reload();
    };
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <h1>
          Something went wrong.{this.state.errorMessage}
          <button onClick={btnClick}>onClick</button>
        </h1>
      );
    }
    return this.props.children;
  }
}
