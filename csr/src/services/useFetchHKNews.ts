import { useEffect, useState } from 'react';

export default function useFetchHKNews(id: string) {
  const [news, setNews] = useState<any>(null);

  useEffect(() => {
    (async function () {
      if (!id) return;
      const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
      const data = await res.json();
      console.log({id,res,data});
      setNews(data);
    })();
  }, [id]);

  return {
    news,
  };
}
