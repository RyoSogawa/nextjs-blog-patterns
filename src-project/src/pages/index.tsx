import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
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
      </ul>
    </div>
  );
}
