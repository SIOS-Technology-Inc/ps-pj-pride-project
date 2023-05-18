import { BlogType } from '@/types/microCMSType';

import { client } from './initializeMicroCMS';

export const useMicroCMS = () => {
  const getBlogs = async () => {
    const result = await client.get({
      endpoint: 'blogs',
    });
    const contents: BlogType[] = result.contents;
    console.log(contents);

    return contents;
  };
  const getSummaryBlogs = async () => {
    const result = await client.get({
      endpoint: 'summary-blogs',
    });

    return result;
  };
  return { getBlogs, getSummaryBlogs };
};
