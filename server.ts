import { Application } from "https://deno.land/x/oak/mod.ts";
import logger from './middleware/logger.ts';
import timing from './middleware/timing.ts';
import helper from './middleware/helper.ts';
import router from './router.ts';

const app = new Application();

app.use(logger);
app.use(timing);
app.use(helper);
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
