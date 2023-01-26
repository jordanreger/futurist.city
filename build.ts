import { walk } from "https://deno.land/std@0.173.0/fs/walk.ts";

const routes: Record<string, string>[] = [];

// refresh file
Deno.writeTextFile("routes.gen.ts", "");

for await (const entry of walk("./pages/")) {
  if(!entry.isDirectory) {
    //const path = page.name.split(".")[0] === "index" ? "/" : "/" + page.name.split(".")[0].replaceAll(" ", "-");
    const route = entry.path
      .replace("pages", "")
      .replaceAll("\\", "/")
      .replaceAll(".tsx", "")
      .replaceAll("/index", "/");

    routes.push({path: entry.path.replaceAll("\\", "/"), route: route, content: await import("./" + entry.path).then(res => res.default) });
  }
}

let routes_gen = `import { react_serve } from "./server.ts";\n\n`;

// imports
routes.forEach((route, index) => {
  routes_gen += `import * as $${index} from "./${route.path}";\n`;
})

routes_gen += "\n";

//pages
const pages = new Map();

routes.forEach((x, index) => {
  let route;
  if(x.route.endsWith("/") && x.route !== "/") {
    route = x.route.slice(0, -1);
  } else {
    route = x.route;
  }
  pages.set(route, `$${index}`);
})

let stringified_map = JSON.stringify([...pages]);
[...stringified_map.matchAll(/"\$(.*?)"/g)].forEach(element => {
  stringified_map = stringified_map.replace(element[0], `$${element[1]}`);
});

routes_gen += `const SiteManifest = new Map(${stringified_map})\n\n`;
routes_gen+= `export const run = () => { react_serve(SiteManifest); }`

Deno.writeTextFile("routes.gen.ts", routes_gen);