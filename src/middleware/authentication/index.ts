import jwt from 'jsonwebtoken';

export const secretKey = 'jwt-key';

// 生成一个请求头
function createToken(payload: string | object | Buffer, expiresIn: string = '12h') {
  return jwt.sign(payload, secretKey, { expiresIn });
}


function verifyToken(token: string) {
  return jwt.verify(token, secretKey)
}

export {
  createToken,
  verifyToken
}