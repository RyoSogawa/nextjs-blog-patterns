import useFetchHKNews from '@/services/useFetchHKNews';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

export default function News() {
  const router = useRouter();
  const { news } = useFetchHKNews(router?.query?.id as string);
  return (
    <div className={`${inter.className} container p-24`}>
      <h1 className="text-center text-5xl">Blog Single</h1>
      <Link href={'/csr'} className="text-blue-500 mt-8 block">
        ← Back To List
      </Link>
      {news && <pre className="mt-20">{JSON.stringify(news, null, 2)}</pre>}
    </div>
  );
}
