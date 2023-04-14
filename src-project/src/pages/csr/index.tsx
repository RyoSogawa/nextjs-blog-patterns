import useFetchHKNewsList from '@/services/useFetchHKNewsList';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { newsList } = useFetchHKNewsList();
  return (
    <div className={`${inter.className} container p-24`}>
      <h1 className="text-center text-5xl">Blog List</h1>
      <Link href={'/'} className="text-blue-500 mt-8 block">
        ← Back To Top
      </Link>
      <ul className={`${inter.className} mt-20`}>
        {newsList.map((news) => (
          <li key={news.id} className="list-disc mb-4">
            <Link href={`/csr/news/${news.id}`} className="text-blue-500">
              {news.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}