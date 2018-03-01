//koa中一切皆是中间件

var Koa=require("koa");
var logger=require("koa-logger")();
var app=new Koa();


app.use(logger);
const md1=async (ctx,next)=> {	
	ctx.type="text/html;charset=utf-8"
	await next();
	ctx.body=ctx.body+" next ";
};

const md2=async (ctx,next) => {
	ctx.body="md2";
	await next()
	ctx.body=ctx.body+"there";
};

const md3=async (ctx,next) => {
	ctx.body="md3"
	};


app.use(md1);
app.use(md2);
app.use(md3);

app.listen(3000,()=>{
	console.log("server is running....");
})
