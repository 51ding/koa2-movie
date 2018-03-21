var Router=require("koa-router");
var mongoose=require("mongoose");
var router=new Router({
	prefix:"/user"
})

router.get("/",async (ctx,next) =>{
	var User=mongoose.model("User");
	var user=new User({name:"你才",password:"1111",email:"1111@163.com"})
	await user.save();
})

module.exports=router;


