var fs=require("fs");
var path=require("path");

async function ReadFile(path){
	return new Promise((resolve,reject) =>{
		fs.readFile(path, (err,data)=>{
			if(err) return  reject(err);
			resolve(data);
		})
	})
}


async function test(){
	var data=await ReadFile(path.join(__dirname,"albu1m.json"));
	console.log(data);
	console.log(111);
}

test();

//
//function getSomething() {
//  return "something";
//}
//
//async function testAsync() {
//  return Promise.resolve("hello async");
//}
//
//async function test() {
//  const v1 = await getSomething();
//  const v2 = await testAsync();
//  console.log(v1, v2);
//}
//
//test();
