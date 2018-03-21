var Koa = require("koa");
var mongoose=require("mongoose");
var {init,initSchema} = require("./src/initServer");
var userRouter=require("./Controller/User");

(async() => {
	try {
		await init();
		await initSchema();
		
	}
	catch(e){
		console.log(e);
	}

})()

var app = new Koa();

app.use(userRouter.routes()).use(userRouter.allowedMethods());

app.listen(3000, () => {
	console.log("server is running at 3000 port");
})