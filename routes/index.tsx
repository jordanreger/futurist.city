import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <title>FUTURIST</title>
        <link rel="preload" href="/index.css" as="style"></link>
        <link rel="stylesheet" media="all" href="/index.css" type="text/css"></link>
      </Head>
      <body>
        <header>
          <ul>
            <li><a href="/" className="active">HOME</a></li>
            <li><a href="/projects">PROJECTS</a></li>
            <li><a href="https://github.com/jordanreger/futurist.city">SOURCE <span className="arrow">↗️</span></a></li>
          </ul>
        </header>
        <main>
          <article className="gradient">
            <div className="title">Futurist</div>
            <div className="description">building software that's best for the future</div>
          </article>
          <article>
            <div className="tag">ABOUT</div>
            <div className="body">
              Futurist.city is a group of projects developed by <a href="https://2jr.co">Jordan Reger</a>.
              Stay tuned for more...
            </div>
          </article>
        </main>
        <footer>
          <div className="copyright"><a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a></div>
        </footer>
      </body>
    </>
  );
}
