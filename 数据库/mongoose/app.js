var mongoose=require("mongoose");
require("./Schema/User");

mongoose.connect("mongodb://127.0.0.1:27017/wechat");

var User=mongoose.model("User");

var user=new User();
user.name="占隔三";
user.password="123";
user.email="abc@153.com";



//插入数据
user.save(function (err) {
	console.log("保存陈功！");
});

//查询数据
//User.find({name:"wangwu"}, function (err, docs) {
// console.log(docs);
//});

//查询一条数据u








