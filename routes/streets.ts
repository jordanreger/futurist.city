import { HandlerContext } from "$fresh/server.ts";
import { walk } from "https://deno.land/std@0.176.0/fs/walk.ts";

export const handler = async (req: Request, _ctx: HandlerContext): Promise<Response> => {
  const url = new URL(req.url);
  const params = new URLSearchParams(url.search);
  const district = params.get("district");

  const streets: string[] = [];
  for await (const entry of walk(`./streets/${district}`)) {
    if(entry.isFile) {
      const street_name = entry.name.replaceAll(".md", "");
      streets.push(street_name);
    }
  }

  return new Response(JSON.stringify(streets), { headers: { "content-type": "application/json" }});
};