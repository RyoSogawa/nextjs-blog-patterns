import fetchHKNews from '@/services/fetchHKNews';
import fetchHKNewsList from '@/services/fetchHKNewsList';
import { GetStaticPaths, GetStaticPropsContext } from 'next';

type NewsPageProps = {
  news: any;
};

type NewsPagePathParams = {
  id: string;
};

export const getStaticPaths: GetStaticPaths<NewsPagePathParams> = async () => {
  const newsList = await fetchHKNewsList();
  return {
    paths: newsList.map((news) => ({
      params: {
        id: String(news.id),
      },
    })),
    fallback: 'blocking',
  };
};

export async function getStaticProps({ params }: GetStaticPropsContext<NewsPagePathParams>) {
  const id = params?.id;
  const news = await fetchHKNews(String(id));
  return {
    props: { news },
    revalidate: 60,
  };
}

export default function News({ news }: NewsPageProps) {
  return (
    <div className={`container p-24`}>
      <h1 className="text-center text-5xl">Blog Single</h1>
      <a href={'/ssg'} className="text-blue-500 mt-8 block">
        ← Back To List
      </a>
      {news && <pre className="mt-20">{JSON.stringify(news, null, 2)}</pre>}
    </div>
  );
}
