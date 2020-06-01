import { Context } from "https://deno.land/x/oak/mod.ts";
import { f, g } from '../lib/decorators.ts';

export default class UserController {
  @f()
  @g()
  async index(ctx: Context) {
    ctx.response.body = { test: 123 };
  }
}
