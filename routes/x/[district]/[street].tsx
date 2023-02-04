import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";

export const handler: Handlers = {
  async GET(_, ctx) {
    const { district, street } = ctx.params;
    try {
      const file = await fetch(`https://api.futurist.city/${district}/${street}`).then(res => res.text());
      const content = Marked.parse(file).content;
      return ctx.render(content);
    } catch(error) {
      return ctx.render(null);
    }
  }
}

export default function StreetPage(props: PageProps) {
  const street_name = props.params.street.replaceAll("-", " ").toLocaleUpperCase();
  if(!props.data) {
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
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <title>{street_name} | FUTURIST CITY</title>
        <link rel="preload" href="/index.css" as="style"></link>
        <link rel="stylesheet" media="all" href="/index.css" type="text/css"></link>

        <link rel="preload" href="/cityscape-city_center.svg" as="image" type="image/svg+xml" />
      </Head>
      <body>
        <main>
          <h1 id="districts-h1"><a href={`/x/${props.params.district}`} class="enter-button">⟵ Back</a><br/>{street_name}</h1>
          <div dangerouslySetInnerHTML={{__html: props.data}} />
        </main>
      </body>
    </>
  );
}