import error from '../../constants/error.constants'

const userValidtor = async (ctx: { request: { body: { userName: string; passWord: string; }; }; app: { emit: (arg0: string, arg1: { success: boolean; message: string; data: Object | undefined; }, arg2: any) => void; }; }, next: () => any) => {
  const { userName, passWord } = ctx.request.body
  if (!userName || !passWord) {
    ctx.app.emit('error', error.parameterFormatError, ctx) //触发应用程序级别事件
    return // 阻止下一步操作
  }
  await next();
}

export {
  userValidtor
}