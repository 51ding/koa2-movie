var http=require("http");

function Application(){
	this.middlewares=[];	
}

Application.prototype.use=function(fn){
	this.middlewares.push(fn);
	return this;
}


Application.prototype.listen=function(...args){
	var server = http.createServer(this.callback());
	server.listen(...args);
}


Application.prototype.callback=function(){
	var handleRequest=(req,res) =>{
		var ctx={req:req,res:res};
		for(var i=0;i<this.middlewares.length;i++){
			this.middlewares[i](ctx);
		}
		res.end("xxx");
	}
	return handleRequest;
}


module.exports=Application;



