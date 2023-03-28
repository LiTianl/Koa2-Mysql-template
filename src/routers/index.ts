import combineRouters from 'koa-combine-routers'//路由压缩

import home from './modules/home'

export default combineRouters(home)