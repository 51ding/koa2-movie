var fs=require("fs");
var koa=require("koa");

var app=new koa();

app.use(async (ctx,next) =>{
	var html=await readFile("./index.html");
	ctx.type="text/html;charset=utf-8";
	
	ctx.body=html;
})

app.listen(3000,()=>{
	console.log("server is running at 3000");
})


async function readFile(pathName){
	/*return new Promise((resolve,reject) =>{
		fs.readFile(pathName,(err,data)=>{
			if(err) return reject(err);
			resolve(data);
		})
	})*/
	return `<h1>ewewewew</h1>`
}
