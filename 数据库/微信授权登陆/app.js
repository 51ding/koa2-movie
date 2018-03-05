var Koa=require("koa");
var bodyparser=require("koa-bodyparser");
var logger=require("koa-logger");
var staticSource=require("koa-static");
var Router=require("koa-router");
var views=require("koa-views");
var sha1=require("sha1");
var fs=require("fs");

const ejs = require('ejs');
var config=require("./src/config");
var Token=require("./src/token");
var util=require("./src/util");
//token是全局
var token=new Token(config);


var app=new Koa();


app.use(bodyparser());
app.use(logger());
app.use(staticSource(__dirname+"/static",{extensions:["html","js","css"]}));
//app.use(staticSource(__dirname,{ extensions: ['txt']}))
app.use(views(__dirname+"/views",{
	map:{html:"ejs"}
}));

var router=new Router();

router.get("/",async (ctx,next) =>{
	
	await ctx.render("index");
})

router.get("/WW_verify_iqqRCT5aif9bw3Qj.txt",async (ctx,next)=>{
	var data=await readFile("./WW_verify_iqqRCT5aif9bw3Qj.txt");
	ctx.type="text/plain;charset=utf-8";
	ctx.body=data;
	
})


function readFile(path){
	return new Promise((resolve,reject)=>{
		fs.readFile(path,(err,data)=>{
			resolve(data);
		})	
	})
	
}


//js-sdk授权验证
router.get("/getSignature",async (ctx,next) =>{
	var jsapi_ticket=await token.getJSSDKToken("1000006");
	var noncestr=util.generateRandomNumer(16);
	var timestamp=util.getTimstamp();
	var url=ctx.query.url;
	var str=`jsapi_ticket=${jsapi_ticket}&noncestr=${noncestr}&timestamp=${timestamp}&url=${url}`;
	console.log(str);
	var signature=sha1(str);
	console.log(signature);
	ctx.type="application/json";
	ctx.body={
		timestamp:timestamp,
		nonceStr:noncestr,
		signature:signature
	};
})

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(833,() => {
	console.log("server is running...");
})