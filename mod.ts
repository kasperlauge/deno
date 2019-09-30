import { ApiArea } from "./areas/api/api.mod.ts";
import { App } from "https://deno.land/x/alosaur/src/mod.ts";

// Create alosaur application
const app = new App({
  areas: [ApiArea]
});

app.useStatic({
  root: `${Deno.cwd()}/www`,
  index: "index.html",
  baseRoute: '/'
});

window.onload = async () => {
  app.listen();
}; 