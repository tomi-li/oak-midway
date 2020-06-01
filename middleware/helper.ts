import { Context } from "https://deno.land/x/oak/mod.ts";

export default async (ctx: Context, next: Function) => {
  // @ts-ignore
  ctx.helper = {
    assertResponse(err: Error | null, data: any) {
      ctx.response.body = { status: 0, data: data };
    }
  }
  await next();
}
