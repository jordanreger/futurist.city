import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta http-equiv="content-language" content="en-us" />

        <title>Projects &#8212; FUTURIST</title>
        <link rel="preload" href="/index.css" as="style"></link>
        <link rel="stylesheet" media="all" href="/index.css" type="text/css"></link>
      </Head>
      <body>
        <header>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/projects" className="active">PROJECTS</a></li>
            <li><a href="https://github.com/jordanreger/futurist.city">SOURCE <span className="arrow">↗️</span></a></li>
          </ul>
        </header>
        <main>
          <article>
            <div className="title">cyberpunk</div>
            <div className="description">a link aggregator for cyberpunk-esque things that happen everyday.</div>
            <hr/>
            <div className="body">
              crate used to be a web framework. it's changing into something more useful.
              <br/>
              <br/>
              visit the <a href="https://crate.land">site</a> or view the <a href="https://github.com/jordanreger/crate">source</a>.
            </div>
          </article>
          <article>
            <div className="tag">COMING SOON</div>
            <div className="body">
              stay tuned for more projects...
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
