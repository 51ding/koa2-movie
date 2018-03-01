function Animal(){
	
}

Animal.prototype.sleep=function(){
	console.log("sleep");
}


function Dog(){
	
}


var dog=new Dog();

dog.sleep();

Dog.prototype=Object.create(Animal.prototype);