import Link from 'next/link';
import fetchHKNewsList from '@/services/fetchHKNewsList';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const revalidate = 60;

export default async function Home() {
  const newsList = await fetchHKNewsList();
  return (
    <div className={`${inter.className} container p-24`}>
      <h1 className="text-center text-5xl">Blog List</h1>
      <Link
        href={'https://nextjs-blog-patterns-src-project.vercel.app/'}
        className="text-blue-500 mt-8 block"
      >
        ← Back To Top
      </Link>
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
