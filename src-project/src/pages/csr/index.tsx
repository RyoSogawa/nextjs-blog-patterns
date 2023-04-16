import useFetchHKNewsList from '@/services/useFetchHKNewsList';

export default function Home() {
  const { newsList } = useFetchHKNewsList();
  return (
    <div className={`container p-24`}>
      <h1 className="text-center text-5xl">Blog List</h1>
      <a href={'/'} className="text-blue-500 mt-8 block">
        ← Back To Top
      </a>
      <ul className={`mt-20`}>
        {newsList.map((news) => (
          <li key={news.id} className="list-disc mb-4">
            <a href={`/csr/news/${news.id}`} className="text-blue-500">
              {news.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
