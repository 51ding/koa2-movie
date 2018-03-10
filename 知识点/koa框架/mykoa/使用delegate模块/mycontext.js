const delegate = require('delegates');

var proto=module.exports={
	name:"zhangsan",
	age:12,
	className:{
		teacher:"xy",
		length:25
	}
}

delegate(proto,"className").
getter("teacher");
