import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <title>CYBERPUNK IS NOW</title>
        <link rel="preload" href="/cyberpunk.css" as="style"></link>
        <link rel="stylesheet" media="all" href="/cyberpunk.css" type="text/css"></link>
      </Head>
      <body>
        <header>
          <ul>
            <li className="title">CYBERPUNK_IS_NOW</li>
          </ul>
        </header>
        <main>
        </main>
        <footer>
          <div className="copyright"><a href="/">FUTURIST.CITY</a></div>
        </footer>
      </body>
    </>
  );
}
