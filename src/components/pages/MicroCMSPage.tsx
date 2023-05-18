import parser from 'html-react-parser';
import useSWR from 'swr';

import { useMicroCMS } from '@/hooks/useMicroCMS';

export const MicroCMSPage = () => {
  const { getSummaryBlogs, getBlogs } = useMicroCMS();
  //   const { data, error, isLoading } = useSWR('/summary-blogs', getSummaryBlogs);
  const { data, error, isLoading } = useSWR('/blogs', getBlogs);

  if (isLoading) return <>loading</>;
  return (
    <>
      {data?.map((value) => (
        <div key={value.id}>
          <h1>{value.title}</h1>
          <pre>{value.content}</pre>
          {parser(value.content)}
          {value.category.map((category) => (
            <div key={category.id}>
              {category.color}
              {category.name}
            </div>
          ))}
          <img src={value.image.url} alt="" />
        </div>
      ))}
    </>
  );
};
