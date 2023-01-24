import { serve } from "https://deno.land/std@0.171.0/http/mod.ts";

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const path = url.pathname;
  const file = (fp:string) => { return Deno.readFile(fp) };

  if(path === "/") {
    return new Response(await file("./src/index.html"), { headers: { "content-type": "text/html; charset=utf-8" } });
  }

  else if(path === "/index.css") {
    return new Response(await file("./src/index.css"), { headers: { "content-type": "text/css" } });
  }
  
  else {
    return new Response("not found", { status: 404 });
  }
}

serve(handler);