import useFetchHKNews from '@/services/useFetchHKNews';
import { useRouter } from 'next/router';

export default function News() {
  const router = useRouter();
  const { news } = useFetchHKNews(router?.query?.id as string);
  return (
    <div className={`container p-24`}>
      <h1 className="text-center text-5xl">Blog Single</h1>
      <a href={'/csr'} className="text-blue-500 mt-8 block">
        ← Back To List
      </a>
      {news && <pre className="mt-20">{JSON.stringify(news, null, 2)}</pre>}
    </div>
  );
}
