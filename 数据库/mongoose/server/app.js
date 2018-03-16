var koa=require("koa");
var Router=require("koa-router");
var app=new koa();

//var router=new Router({
//	prefix:"/api"
//})

var router=new Router().prefix("/api")

router.get("/user",async (ctx,next) =>{
	ctx.body=ctx.url;
})



app.use(router.routes()).use(router.allowedMethods());

app.listen(3000,()=>{
	console.log("server is runnning!");
})
