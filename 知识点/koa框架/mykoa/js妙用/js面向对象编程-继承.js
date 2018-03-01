function Animal(){
	
}

Animal.prototype.sleep=function(){
	console.log("sleep");
}


function Dog(){
	
}

Dog.prototype=Object.create(Animal.prototype);

var dog=new Dog();

dog.sleep();
