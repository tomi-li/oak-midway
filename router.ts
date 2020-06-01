import { Router } from 'https://deno.land/x/oak/mod.ts'
import UserController from './controller/user.ts';

const userController = new UserController();

const router = new Router({
  prefix: '/user'
});

router
  .get('/', userController.index);

export default router;
