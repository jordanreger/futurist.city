import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <title>FUTURIST CITY PUBLIC TRANSIT</title>
        <link rel="preload" href="/index.css" as="style"></link>
        <link rel="stylesheet" media="all" href="/index.css" type="text/css"></link>
      </Head>
      <body>
        <main>
          <h1 class="title">FUTURIST<br/>CITY<br/>PUBLIC<br/>TRANSIT</h1>
          <p>We welcome you to the greatest city ever made.</p>
          <br/>
          <a href="/x" class="enter-button">Enter ⟶</a>
        </main>
      </body>
    </>
  );
}
