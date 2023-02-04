import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const path = new URL(req.url).pathname;
    const get_districts_list = await fetch(`https://api.futurist.city/`).then(res => res.json());
    const districts: preact.JSX.Element[] = [];
    get_districts_list.forEach((district: string) => {
      districts.push(<li>{"//"} <a href={`/x/${district}`}>{district.replaceAll("-", " ").toLocaleUpperCase()}</a></li>);
    })

    const districts_list = <ul>{districts}</ul>;
    return ctx.render(districts_list);
  }
}

export default function Districts({ data }: PageProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <title>DISTRICTS | FUTURIST CITY PUBLIC TRANSIT</title>
        <link rel="preload" href="/index.css" as="style"></link>
        <link rel="stylesheet" media="all" href="/index.css" type="text/css"></link>
      </Head>
      <body>
        <main>
          <h1 id="districts-h1"><a href="/" class="enter-button">⟵ Back</a><br/>DISTRICTS</h1>
          <p>Visit one of the many sprawling districts that make up Futurist City:</p>
          <br/>
          {data}
        </main>
      </body>
    </>
  );
}
