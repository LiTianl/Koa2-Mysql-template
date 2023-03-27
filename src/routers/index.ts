import combineRouters from 'koa-combine-routers'//路由压缩

import home from './modules/home'
import loader from './modules/_loader'

console.log(loader)

export default combineRouters(home)