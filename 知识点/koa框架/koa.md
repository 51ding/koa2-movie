### Koa2框架（一个轻量的web框架）

####Web服务类 Application

Application中 依赖的模块
context 
stream流动的数据 
only 把对象中的key检测出来

读源码：
删减法：把无关紧要的代码删除掉，不要上来就盯细节

Emitter为一些自定义事件注册回调函数

关键的方法
##### listen
http.createServer(this.callback())
##### use
this.middlewares.push()中间件数组

