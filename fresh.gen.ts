// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_404.tsx";
import * as $1 from "./routes/index.tsx";
import * as $2 from "./routes/x/[district].tsx";
import * as $3 from "./routes/x/[district]/[street].tsx";
import * as $4 from "./routes/x/index.tsx";

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/index.tsx": $1,
    "./routes/x/[district].tsx": $2,
    "./routes/x/[district]/[street].tsx": $3,
    "./routes/x/index.tsx": $4,
  },
  islands: {},
  baseUrl: import.meta.url,
  config,
};

export default manifest;
