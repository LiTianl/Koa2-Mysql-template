import log4  from 'koa-log4'

log4.configure({
  appenders:{
    access: {
      type: 'dateFile', // 日志输出的类型
      pattern: '-yyyy-MM-dd.log',   // 文件时间的命名方式
      daysToKeep: 7, // 日志保留的天数
      layout: {
        type: 'pattern',
        pattern: '[%d{yyyy-MM-dd hh:mm:ss}] [%p] %m' // 输出日志的格式
      },
      compress: true,  // 是否压缩保存
      filename: './logs/access/access.log' // 存储日志文件的位置
    },
    http:{
      type:'dateFile',
      pattern: 'yyyy-MM-dd.log',
      daysToKeep: 7,
      layout: {
        type: 'pattern',
        pattern: '[%d{yyyy-MM-dd hh:mm:ss}] [%p] %m'
      },
      compress: true,
      filename: './logs/http/http.log'
    },
    out:{
      type: 'stdout'
    }
  },
  categories:{
    default: { appenders: ['out'], level: 'all' },
    access: { appenders: ['access'], level: 'all' },
    http:{ appenders:['http'], level: 'all' }
  }
})

const clog = log4.getLogger('out')
const access = log4.getLogger('access')

export default log4

export {
  log4,
  clog,
  access
}