// 接口返回参数模型
export default (success: boolean, message: string, data?: Object,) => {
  return {
    success: success,
    message: message,
    data: data
  }
}