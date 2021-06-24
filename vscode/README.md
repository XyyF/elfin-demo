## vscode扩展插件示例

模拟插件开发过程，插件代码，通过主线程的依赖拦截进而发送数据给UI线程修改UI。（仅是模拟）
```shell
extension插件代码 -> 保存 -> WebSocket通信 -> 主线程接受代码，并执行 -> 拦截vscode依赖，根据接口映射，确认可执行代码 -> WebSocket通信 -> UI线程修改UI
```

### 启动
开启本地主线程【模拟】
```shell
cd main-service
yarn install
node main.js
```

[访问界面](https://rengarxiao.com/elfin-demo/vscode/ide-online.html)
