import koa from 'koa';
import helmet from 'koa-helmet'
import statics from 'koa-static'
import koaBody from 'koa-body'
import koaJson from 'koa-json'
import koaJwt from 'koa-jwt'
import cors from '@koa/cors'
import compose from 'koa-compose'
import conpress from 'koa-compress'
import path from 'path'
import log4 from './log'
import router from './routers'
import { secretKey } from './middleware'

const app = new koa()


// 集成中间件
const middleware = compose([
  cors(), // 跨域
  koaBody(), // 请求体
  log4.koaLogger(log4.getLogger('http'), { level: 'auto' }), // 请求日志记录
  statics(path.join(__dirname, '../public')), // 静态资源文件夹
  koaJson({ pretty: false, param: 'pretty' }), //格式化输出
  helmet()//更安全的http头
])

app.use(middleware)

app.use(koaJwt({ secret: secretKey }).unless({ path: ['/home/login'] })) //忽略不需要jwt的请求地址

app.use(router())// 路由


// 错误监听
app.on('error', (err, ctx) => {
  ctx.body = {
    code: ctx.response.status,
    ...err
  }
})
app.listen(3000)