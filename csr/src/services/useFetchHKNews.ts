import { useEffect, useState } from 'react';

export default function useFetchHKNews() {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    (async function () {
      const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
      const ids = await res.json();
      const news = await Promise.all(
        ids.slice(0, 10).map(async (id: number) => {
          const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
          return res.json();
        }),
      );
      setNews(news);
    })();
  }, []);

  return {
    news,
  };
}
