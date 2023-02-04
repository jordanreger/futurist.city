import { serve } from "https://deno.land/std@0.176.0/http/server.ts";

function handler(req: Request): Response {
  const url = new URL(req.url).pathname;
  console.log(url);
  return new Response(JSON.stringify(url));
}

serve(handler);