var mongoose=require("mongoose");
const Schema=mongoose.Schema;



//创建了一个单独的链接
const conn=mongoose.createConnection("mongodb://127.0.0.1:27017/wechat");

//创建表
const UserSchema=new Schema({
	name:String,
	age:Number,
	Birthday:Date
})

//这里不能用mongoose访问模型，因为它没有连接到活动的数据库链接，只能用当前链接conn访问
var User=conn.model("user",UserSchema);

var user=new User();

user.name="dadasdsa";

user.save(() => {
	console.log("create successful!");
})

