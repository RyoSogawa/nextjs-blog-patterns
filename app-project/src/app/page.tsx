import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const revalidate = 60;

export default async function Home() {
  return (
    <div className={`${inter.className} container p-24`}>
      <h1 className="text-center text-5xl">Blog List</h1>
      <ul className={`${inter.className} mt-20`}>
        <li className="list-disc mb-4">
          <Link href="/rsc" className="text-blue-500">
            RSC
          </Link>
        </li>
        <li className="list-disc mb-4">
          <Link href="/static-export" className="text-blue-500">
            Static Export
          </Link>
        </li>
      </ul>
    </div>
  );
}
