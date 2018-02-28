var Koa=require("./Application");

var app=new Koa();

app.use(function(ctx){
	console.log("第一个中间件："+ctx.req.method);
})

app.use(function(ctx){
	console.log("第二个中间件："+ctx.req.method);
})

app.listen(3000,()=>{
	console.log("server is running");
})
