import { Head } from "$fresh/runtime.ts";

export default function Districts() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <title>DISTRICTS | FCPT</title>
        <link rel="preload" href="/index.css" as="style"></link>
        <link rel="stylesheet" media="all" href="/index.css" type="text/css"></link>
      </Head>
      <body>
        <main>
          <h1 id="districts-h1"><a href="/" class="enter-button">⟵ Back</a><br/>DISTRICTS</h1>
          <p>Visit one of the many sprawling districts that make up Futurist City.</p>
          <br/>
          <ul>
            <li>// <a href="/districts/city-center">CITY CENTER</a></li>
          </ul>
        </main>
      </body>
    </>
  );
}
