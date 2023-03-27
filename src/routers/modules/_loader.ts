import fs from 'fs';
import path from 'path';

const modules: { [key: string]: any } = {};

// 获取所有 TypeScript 文件的路径
const files = fs.readdirSync(path.join(__dirname, '')).filter(file => {
  return file.endsWith('.ts') && !file.startsWith('_');
});


// 加载所有 TypeScript 文件并将它们作为模块导出
files.forEach(file => {
  const modulePath = path.join(__dirname, '', file);
  const moduleName = path.basename(file, '.ts');
  const module = require(modulePath).default;
  modules[moduleName] = module;
});

export default modules;