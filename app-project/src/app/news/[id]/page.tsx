import Link from 'next/link';
import fetchHKNews from '@/services/fetchHKNews';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const revalidate = 60;

export default async function News({ params }: { params: { id: string } }) {
  const news = await fetchHKNews(params.id);
  return (
    <div className={`${inter.className} container p-24`}>
      <h1 className="text-center text-5xl">Blog Single</h1>
      <Link href={'/'} className="text-blue-500 mt-8 block">
        ←To Top
      </Link>
      {news && <pre className="mt-20">{JSON.stringify(news, null, 2)}</pre>}
    </div>
  );
}
