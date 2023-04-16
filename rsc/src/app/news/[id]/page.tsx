import fetchHKNews from '@/services/fetchHKNews';
import React from 'react';

export const revalidate = 60;

export default async function News({ params }: { params: { id: string } }) {
  const news = await fetchHKNews(params.id);
  return (
    <div className={`container p-24`}>
      <h1 className="text-center text-5xl">Blog Single</h1>
      <a href={'/'} className="text-blue-500 mt-8 block">
        ← Back To List
      </a>
      {news && <pre className="mt-20">{JSON.stringify(news, null, 2)}</pre>}
    </div>
  );
}
