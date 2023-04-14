import useFetchHKNewsList from '@/services/useFetchHKNewsList';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { newsList } = useFetchHKNewsList();
  return (
    <ul className={`p-24 ${inter.className}`}>
      {newsList.map((news) => (
        <li key={news.id} className="list-disc mb-4">
          <Link href={`/news/${news.id}`} className="text-blue-500">
            {news.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
