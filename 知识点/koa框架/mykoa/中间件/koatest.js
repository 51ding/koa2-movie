//自己实现的简易koa

var http=require("http");

function koa(){
	this.middlewares=[];
}

koa.prototype.use=function(fn){
	this.middlewares.push(fn);
}

koa.prototype.listen=function(...argv){
	var server=http.createServer(this.callback());
	var port=argv[0];
	server.listen(port,()=>{
		console.log("server is running at "+port);
	})
}

koa.prototype.callback=function(){
	var fn=compose(this.middlewares);
	
	return function(req,res){
		fn(req,res).then(data =>{
			
		}).catch(data =>{
			
		})
	}
}

//算法
function compose(middlewares){
	return function(req,res,next){
		let index=-1;
		function dispatch(i){
			if(i<index) return Promise.reject("长度不正确！");
			index=i;
			var fn=middlewares[i];
			if(i===middlewares.length) fn=next;
			if(!fn) return Promise.resolve();
			try{
					return Promise.resolve(fn(req,res,function next (){
						return dispatch(i+1);
					}))
			}catch(err){
				return Promise.reject("错了！");
			}
		}
		
		//调用递归方法
		return dispatch(0);
		
	}
}




var Koa=new koa();


Koa.use(async function(req,res,next){
	console.log(req.method);
  await next();
	
})

Koa.use(async function(req,res,next){
	console.log("第二");
	 await next();
})

Koa.use(async function(req,res,next){
	console.log("第三");
	res.end("ddasda");
})

Koa.listen(3000);




