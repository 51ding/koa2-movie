var mongoose=require("mongoose");
require("./model/User");

var User=mongoose.model("User");
mongoose.connect("mongodb://127.0.0.1:27017/wechat");

var user=new User();

user.name="dasda";
user.age=16;
user.Birthday=new Date();

user.comments.push({title:"dadasdas"});

user.save(function(){
	console.log("保存成公!");
})
