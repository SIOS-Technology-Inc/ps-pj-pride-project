import React from 'react';
import { useErrorBoundary } from 'react-error-boundary';

import { SWRConfig } from 'swr';

type Props = {
  children: React.ReactNode;
};

export const SWRConfigComponent = (props: Props) => {
  const { children } = props;
  const { showBoundary } = useErrorBoundary();
  return (
    <SWRConfig
      value={{
        onError(err) {
          showBoundary(err);
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};
