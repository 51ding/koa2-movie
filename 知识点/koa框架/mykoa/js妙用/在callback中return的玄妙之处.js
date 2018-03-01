var fs=require("fs");

//多层嵌套的写法
/*fs.readFile("./a.txt",function(err,data){
	var a=""
	if(err)
		console.log(err);
    else{
    	a+=data;
    	fs.readFile("./b.txt",function(err,data){
    		a+=data;
    		if(err)
    			console.log(err);
    		else 
    			fs.readFile("./c.txt",function(err,data){
    				a+=data;
    				if(err)
    					console.log(err);
    				else
    					console.log(a);
    			})
    	})
    }
})
*/

//return 写法,看起来顺眼一些
/*fs.readFile("./a.txt",function(err,data){
	var a=""
	if(err)
		return console.log(err);
    a+=data;
    
    fs.readFile("./b.txt",function(err,data){
    	if(err)
    		return console.log(err);
    	a+=data;
    	fs.readFile("./c.txt",function(err,data){
    		a+=data;
    		if(err)
    			return console.log(err);
    		console.log(a);
    	})
    })
})*/

function test(name){
	if(name.length>5)
		return console.log("changle!");
    console.log("多余的！");
}

test("ddadsda");


