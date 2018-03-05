var mongoose=require("mongoose");
const Schema=mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1:27017/wechat");

//创建表
const UserSchema=new Schema({
	name:String,
	age:Number,
	Birthday:Date
})

//定义模型
const User = mongoose.model('User', UserSchema);
const user = new User();
user.name="wangwu";
user.age=12;
user.Birthday=new Date();
//插入数据
//user.save(function (err) {
//console.log("保存陈功！");
//});

//查询数据
//User.find({name:"wangwu"}, function (err, docs) {
// console.log(docs);
//});

//查询一条数据u
User.findOne()







