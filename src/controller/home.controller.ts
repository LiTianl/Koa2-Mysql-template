import result from '../constants/result.constants'
import { createToken } from '../middleware';

const login = async (ctx: { request: { body: { userName: any; passWord: any; }; }; body: { success: Boolean; message: string; data: Object | undefined; }; }, next: () => void) => {
  const { userName, passWord } = ctx.request.body;
  if (userName === 'admin' && passWord === 'abcd1234') {
    const token = createToken({ code: '1234' }) // 生成用户请求头
    ctx.body = result(true, '登陆成功', { token: token })
  } else {
    ctx.body = result(false, '用户名或密码错误')
  }
  next();
}

export {
  login
}