import { useEffect } from 'react';

import {
  axiosClient,
  AxiosErrorHandlingComponent,
} from '@/utilities/AxiosClientComponent';

export const AxiosClientPage = () => {
  useEffect(() => {
    axiosClient.get('/test');
  }, []);
  const MyPageContent = () => {
    return <>my page content</>;
  };
  return (
    <>
      <AxiosErrorHandlingComponent>
        <MyPageContent />
      </AxiosErrorHandlingComponent>
    </>
  );
};
