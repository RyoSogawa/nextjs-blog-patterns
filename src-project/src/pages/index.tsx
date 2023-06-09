export default function Home() {
  return (
    <div className={`container p-24`}>
      <h1 className="text-center text-5xl">Next.js Blog Patterns</h1>
      <ul className={`mt-20`}>
        <li className="list-disc mb-4">
          <a href="/csr" className="text-blue-500">
            CSR
          </a>
        </li>
        <li className="list-disc mb-4">
          <a href="/ssr" className="text-blue-500">
            SSR
          </a>
        </li>
        <li className="list-disc mb-4">
          <a href="/ssg" className="text-blue-500">
            SSG
          </a>
        </li>
        <li className="list-disc mb-4">
          <a href="https://nextjs-blog-patterns-rsc.vercel.app/" className="text-blue-500">
            RSC
          </a>
        </li>
        <li className="list-disc mb-4">
          <a
            href="https://nextjs-blog-patterns-static-export.vercel.app/"
            className="text-blue-500"
          >
            Static Export
          </a>
        </li>
      </ul>
    </div>
  );
}
