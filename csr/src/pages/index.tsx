import useFetchHKNews from '@/services/useFetchHKNews';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { news } = useFetchHKNews();
  return (
    <ul className={`p-24 ${inter.className}`}>
      {news.map((item) => (
        <li key={item.id} className="list-disc mb-4">
          <Link href={`/news/${item.id}`} className="text-blue-500">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
