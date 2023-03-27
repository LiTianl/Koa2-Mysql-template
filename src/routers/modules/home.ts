import Router from 'koa-router'
import { login } from '../../controller/home.controller'
import { userValidtor } from '../../middleware'


const router = new Router({ prefix: '/home' }) // 访问前缀

router.post('/login', userValidtor, login)

export default router