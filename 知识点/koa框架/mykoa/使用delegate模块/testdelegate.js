const delegate = require('delegates');

/*
function Wheel(name){
	this.name=name;
	this.length=20;
}

Wheel.prototype.wheelmove=function(){
	console.log(this.name+"轮子动了！");
}



function Car(name){
	this.wheel=new Wheel(name);
}

Car.prototype.move=function(){
	console.log(this.wheel.name+"车走了！");
}


var car=new Car("佳通");

car.move();

delegate(car,"wheel").getter("name")
.method("wheelmove");


console.log(car.name);

car.wheelmove()


//method:挂载方法\n*/


var context={
	name:"context",
	getName(){
		console.log(this.name)
	}
}


delegate(context,"ok").method("getName");


