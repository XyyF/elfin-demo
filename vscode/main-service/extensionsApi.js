const extensionsAPIs = ['alert', 'showDirectoryPicker']

function apiFactory() {
  const handler = {
    get: (target, name) => {
      target[name] = (...args) => {
        if (extensionsAPIs.indexOf(name) > -1) {
          console.log('【插件线程】调用方法: ', name);
          ws.send(JSON.stringify({ method: name, args }));
        }
      }
      return target[name];
    }
  }
  const proxy = new Proxy(Object.create(null), handler)
  return proxy;
}

module.exports = apiFactory();
