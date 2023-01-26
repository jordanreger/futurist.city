import { serve } from "https://deno.land/std@0.173.0/http/mod.ts";
import { contentType } from "https://deno.land/std@0.173.0/media_types/mod.ts";
import ReactDOMServer from "https://esm.sh/react-dom@18.2.0/server";

export function react_serve(manifest: any) {
  const SiteManifest = manifest;

  async function handler(req: Request): Promise<Response> {
    const url = new URL(req.url);
    const path = url.pathname;

    let page, content_type;

    // Make an issue to add more endings if you happen to need them!
    const static_text_endings  = [".css", ".xml", ".json", ".txt"];
    const static_other_endings = [".jpg", ".png", ".webp", ".webm", ".mp4", ".gif", ".ico", ".pdf", ".woff", ".woff2", ".ttf"];
    if(static_text_endings.some(ending => path.includes(ending))) {
      try {
        page = await Deno.readTextFile(`./static/${path}`);
        content_type = contentType(path.split(".")[path.split(".").length - 1]);
      } catch(_) {
        page = "Not found";
        content_type = "text/plain";
      }
    } else if(static_other_endings.some(ending => path.includes(ending))) {
      try {
        page = await Deno.readFile(`./static/${path}`);
        content_type = contentType(path.split(".")[path.split(".").length - 1]);
      } catch(_) {
        page = "Not found";
        content_type = "text/plain";
      }
    } else {
      try {
        page = ReactDOMServer.renderToString(SiteManifest.get(path).default());
      } catch(_) {
        page = ReactDOMServer.renderToString(SiteManifest.get("/_404").default());
      }
      content_type = "text/html; charset=utf-8";
    }
    
    const response = new Response(page, { headers: { "content-type": content_type }});
  
    return response;
  }

  serve(handler);
}