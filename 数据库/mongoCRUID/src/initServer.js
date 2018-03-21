var mongoose = require("mongoose");
var fs=require("fs");
var util=require("./util");
var path=require("path");
var glob=require("glob");

//修改mongoose的Promise。mongoose的Promise不符合规范
mongoose.Promise = global.Promise;

let MAX_CONNECT_COUNT = 5;
let connectString = "mongodb://127.0.0.1:27017/wechat";

//链接数据库
exports.init = function() {

	let currentConnnetCount = 0;

	return new Promise((resolve, reject) => {

		//打印mongoose日志信息
		mongoose.set("debug", true);

		mongoose.connect(connectString);

		mongoose.connection.on("connected", function() {
			console.log(" 已连接！");
			//resolve(mongoose);
		})

		//断开链接
		mongoose.connection.on("disconnected", function() {
			currentConnnetCount++;
			if(currentConnnetCount < MAX_CONNECT_COUNT) {
				mongoose.connect(connectString);
			} else {
				throw new Error("数据库有问题！");
			}
		})

		mongoose.connection.on("error", function(err) {
			//reject(err);
			currentConnnetCount++;
			if(currentConnnetCount < MAX_CONNECT_COUNT) {
				mongoose.connect(connectString);
			} else {
				throw new Error("数据库有问题！");
			}
		})

		mongoose.connection.once("open", function() {
			resolve(mongoose);
			console.log("数据链接成功！");

		})

	})
}

//初始化所有的实体
exports.initSchema=async function(){
	glob.sync(path.join(__dirname,"../Model/**/*.js")).forEach(require);
}


