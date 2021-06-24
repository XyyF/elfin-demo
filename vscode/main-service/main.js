const Module = require('module');
const original = Module.prototype.require;

// 拦截依赖 vscode
Module.prototype.require = function (request) {
  if (request !== 'vscode') {
    return original.apply(this, arguments);
  }
  return require('./extensionsApi');
}

const wss = require('./wss');
wss.on('connection', function connection(ws) {
  global.ws = ws;
  // 监听客户端消息
  ws.on('message', function onmessage(message) {
    // 指定扩展代码
    eval(message);
  });
});
