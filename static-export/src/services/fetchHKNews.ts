export default async function fetchHKNews(id: string) {
  if (!id) return;
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  return await res.json();
}
