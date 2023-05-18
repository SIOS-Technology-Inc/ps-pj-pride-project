import { axiosTestClient } from '@/utilities/AxiosClientTestComponent';

export const Test = () => {
  throw axiosTestClient.get('test');
};
