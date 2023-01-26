import { react_serve } from "./server.ts";

import * as $0 from "./pages/deno-react.tsx";
import * as $1 from "./pages/index.tsx";
import * as $2 from "./pages/projects.tsx";
import * as $3 from "./pages/_404.tsx";

const SiteManifest = new Map([["/deno-react",$0],["/",$1],["/projects",$2],["/_404",$3]])

export const run = () => { react_serve(SiteManifest); }