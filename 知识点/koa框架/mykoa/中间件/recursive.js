/*递归*/
//控制递归次数
function a(num){
	
	if(num<0) return num;
	console.log("前："+(num));
	return a(num-1);
  
	/*console.log("后"+num);*/
}

//函数会记录堆栈信息

var x=a(5);
console.log(x);
