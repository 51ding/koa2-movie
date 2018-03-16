var mongoose=require("mongoose");
var fs=require("fs");
var path=require("path");
var Album=require("./new");

mongoose.connect("mongodb://127.0.0.1:27017/wechat");

var db=mongoose.connection;

db.on("error",(err)=>{
	console.error(err);
	process.exit(1);
})


//数据库打开以后
db.once("open",async function(){
	var data=await ReadFile(path.join(__dirname,"album.json"));
	Album.create(JSON.parse(data.toString()),(err)=>{
		if(err) console.log(err);
		console.log("保存成功！");
	})
})


process.on("error",(err) =>{
	console.log("错误！");
})


async function ReadFile(path){
	return new Promise((resolve,reject) =>{
		fs.readFile(path, (err,data)=>{
			if(err)  return  reject(err);
			resolve(data);
		})
	})
}

