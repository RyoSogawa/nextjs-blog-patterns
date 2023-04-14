import fetchHKNews from '@/services/fetchHKNews';
import { GetServerSidePropsContext } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

type NewsPageProps = {
  news: any;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;
  const news = await fetchHKNews(id as string);
  return {
    props: { news },
  };
}

export default function News({ news }: NewsPageProps) {
  return (
    <div className={`${inter.className} container p-24`}>
      <h1 className="text-center text-5xl">Blog Single</h1>
      <Link href={'/ssr'} className="text-blue-500 mt-8 block">
        ← Back To List
      </Link>
      {news && <pre className="mt-20">{JSON.stringify(news, null, 2)}</pre>}
    </div>
  );
}
