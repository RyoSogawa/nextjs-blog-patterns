import fetchHKNewsList from '@/services/fetchHKNewsList';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

type IndexPageProps = {
  newsList: any[];
};

export async function getStaticProps() {
  const newsList = await fetchHKNewsList();
  return {
    props: {
      newsList,
    },
  };
}

export default function Home({ newsList }: IndexPageProps) {
  return (
    <div className={`${inter.className} container p-24`}>
      <h1 className="text-center text-5xl">Blog List</h1>
      <ul className={`${inter.className} mt-20`}>
        {newsList.map((news) => (
          <li key={news.id} className="list-disc mb-4">
            <Link href={`/news/${news.id}`} className="text-blue-500">
              {news.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
