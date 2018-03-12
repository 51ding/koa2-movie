//一些工具方法
module.exports={
	//生成随机数
	generateRandomNumer(digits){
		var str="";
		var charArray=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		var arrLength=charArray.length;
		for(var i=0;i<digits;i++){
			var index=Math.round(Math.random() * (arrLength-1));
			str+=charArray[index];
		}
		return str;
	},
	//现在到1970-1-1 0:0:0 想查的秒数
	getTimstamp(){
		return Math.floor(Date.now()/1000);
	},
	//截取数组
	/*
	 @@param sourceArray 包含要复制的数据
	 @@param sourceIndex sourceArray中复制开始处的索引
	 @@param sourceArray 接收数据的数组
	 @@param destinationIndex 它表示 destinationArray 中存储开始处的索引
	 @@param length 它表示要复制的元素数目
	 * */
	arrayCopy(sourceArray,sourceIndex,length){
		if(!Buffer.isBuffer(sourceArray))
			throw new Error("不是Buffer类型！");
		
	  var destinationArray=sourceArray.slice(sourceIndex,sourceIndex+length);
	  
	  return destinationArray;
			
	}
}
