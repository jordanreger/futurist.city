import { Head } from "$fresh/runtime.ts";
import { UnknownPageProps } from "$fresh/server.ts";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <title>404 &#8212; deno-react</title>
        <link rel="preload" href="/index.css" as="style"></link>
        <link rel="stylesheet" media="all" href="/index.css" type="text/css"></link>
      </Head>
      <body>
      <header>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/projects">PROJECTS</a></li>
            <li><a href="https://github.com/jordanreger/futurist.city">SOURCE <span className="arrow">↗️</span></a></li>
          </ul>
        </header>
        <main>
          <article>
            <div className="tag">404</div>
            <div className="body">
              oops! there's no page here... <a href="/">go home</a>!
            </div>
          </article>
        </main>
      </body>
    </>
  );
}