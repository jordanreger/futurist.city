import { react_serve } from "./server.ts";

import * as $0 from "./pages/index.tsx";
import * as $1 from "./pages/projects.tsx";
import * as $2 from "./pages/_404.tsx";

const SiteManifest = new Map([["/",$0],["/projects",$1],["/_404",$2]])

export const run = () => { react_serve(SiteManifest); }