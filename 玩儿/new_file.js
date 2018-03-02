var Koa=require("koa");

 var app=new Koa();
 
 app.use(async (ctx,next) => {
 	
 })
 
 app.listen(3000,()=>{
 	console.log("server is running!");
 })
