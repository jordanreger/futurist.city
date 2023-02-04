import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";

export const handler: Handlers = {
  async GET(_, ctx) {
    const { district } = ctx.params;
    const exists = await fetch(`https://api.futurist.city/${district}`).then(res => res.json()).then(res => { if(res[0] === "Not found") { return false } else { return true } })
    if(exists) {
      ctx.params.name = district.replaceAll("-", " ").toLocaleUpperCase();
      
      const file = await fetch(`https://api.futurist.city/${district}/-index`).then(res => res.text());
      ctx.params.description = Marked.parse(file).content;
      
      const get_streets_list = await fetch(`https://api.futurist.city/${district}`).then(res => res.json());
      const streets: preact.JSX.Element[] = [];
      get_streets_list.forEach((street: string) => {
        if(street !== "-index") {
          streets.push(<li>{"//"} <a href={`/x/${district}/${street}`}>{street.replaceAll("-", " ").toLocaleUpperCase()}</a></li>);
        }
      })

      const districts_list = <ul>{streets}</ul>;
      return ctx.render(districts_list);
    } else {
      ctx.params.error = "Not found";
      return ctx.render(null);
    }
  }
}

export default function DistrictPage(props: PageProps) {
  if(props.params.error === "Not found") {
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
  } else {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
          <title>{props.params.name} | FUTURIST CITY</title>
          <link rel="preload" href="/index.css" as="style"></link>
          <link rel="stylesheet" media="all" href="/index.css" type="text/css"></link>

          <link rel="preload" href="/cityscape-city_center.svg" as="image" type="image/svg+xml" />
        </Head>
        <body>
          <main>
            <h1 id="districts-h1"><a href={`/x`} class="enter-button">⟵ Back</a><br/>{props.params.name}</h1>
            <div dangerouslySetInnerHTML={{__html: props.params.description}} />
            <br/>
            {props.data}
          </main>
        </body>
      </>
    );
  }
}