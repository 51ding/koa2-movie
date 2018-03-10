var http=require("http");
var fs=require("fs");

http.createServer((req,res) => {
console.log("有请求进来了"+req.method +" "+Date.now()/1000);
	if(req.method == "POST"){
		var data="";
		
		req.on("data",(chunk) =>{
			data+=chunk;
		})
		
		req.on("end",function(){
				fs.appendFile(__dirname+"/a.txt",data.toString()+"\n",function(err){
					if(err) return  console.log(err);
					console.log("保存成功！");
					res.end("成功！");
				})
		})
	}
		else{
			res.end("Hello World!");
		}
	
}).listen(3000,() => {
	console.log("server is running");
})
