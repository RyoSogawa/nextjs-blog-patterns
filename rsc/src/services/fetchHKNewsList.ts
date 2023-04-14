export default async function fetchHKNewsList() {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
  const ids = await res.json();
  return await Promise.all(
    ids.slice(0, 10).map(async (id: number) => {
      const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
      return res.json();
    }),
  );
}
