import useFetchHKNewsList from '@/services/useFetchHKNewsList';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { newsList } = useFetchHKNewsList();
  return (
    <div className={`${inter.className} container p-24`}>
      <h1 className="text-center text-5xl">Blog List</h1>
      <ul className={`${inter.className} mt-20`}>
        <li className="list-disc mb-4">
          <Link href="/csr" className="text-blue-500">
            CSR
          </Link>
        </li>
        <li className="list-disc mb-4">
          <Link href="/ssr" className="text-blue-500">
            SSR
          </Link>
        </li>
        <li className="list-disc mb-4">
          <Link href="/ssg" className="text-blue-500">
            SSG
          </Link>
        </li>
        <li className="list-disc mb-4">
          <Link href="https://nextjs-blog-patterns-rsc.vercel.app/" className="text-blue-500">
            RSC
          </Link>
        </li>
        <li className="list-disc mb-4">
          <Link
            href="https://nextjs-blog-patterns-static-export.vercel.app/"
            className="text-blue-500"
          >
            Static Export
          </Link>
        </li>
      </ul>
    </div>
  );
}
