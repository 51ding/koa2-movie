var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var albumSchema=new Schema({
	composr:String,
	title:String,
	price:Number,
	releaseData:Date,
	isPublication:Boolean,
	genre:[String],
	tracks:[{
		title:String,
		duration:{
			m:Number,
			s:Number
		}
	}]
})

var Album=mongoose.model("Album",albumSchema);


module.exports=Album;