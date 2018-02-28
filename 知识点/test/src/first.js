var Koa=require("koa");

var app=new Koa();

app.use(async (ctx,next) => {
	ctx.body="Hello World!";
})

app.listen(3000,() =>{
	console.log("server is running..");
});
