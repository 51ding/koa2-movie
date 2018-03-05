var mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/wechat");

var Schema=mongoose.Schema;


const Comment = new Schema({
  name: { type: String, default: 'hahaha' },
  age: { type: Number, min: 18, index: true },
  bio: { type: String, match: /[a-z]/ },
  date: { type: Date, default: Date.now },
  buff: Buffer
});



var UserSchema=new Schema({
	name:String,
	age:Number,
	Birthday:Date,
	comments: [Comment]
})

module.exports=mongoose.model("User",UserSchema);
