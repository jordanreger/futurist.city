import { Head } from "$fresh/runtime.ts";
import { UnknownPageProps } from "$fresh/server.ts";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <title>NOT FOUND | FUTURIST CITY</title>
        <link rel="preload" href="/index.css" as="style"></link>
        <link rel="stylesheet" media="all" href="/index.css" type="text/css"></link>
      </Head>
      <body>
        <main>
          <h1 id="districts-h1"><a href="/x" class="enter-button">⟵ Back</a><br/>NOT FOUND</h1>
        </main>
      </body>
    </>
  );
}