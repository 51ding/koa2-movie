/**
 * AES加密解密
 */
//一个加密解密的库
var crypto = require('crypto');

function Cryptography() {

}

/*
  解密方法
  @param Input 密文
  @param EncodingAESKey Aes加密字符串
  @param corpid
 */
Cryptography.AES_decrypt = function(Input, EncodingAESKey, corpid) {
	var oriMsg = "";
	var Key = Buffer.from(EncodingAESKey + "=", "base64");
	//截取前16个字节
	var Iv = Key.slice(0, 16);

	var btmpMsg = Buffer.from(Cryptography.AES_decryptArray(Input, Iv, Key));

	var len = btmpMsg.readInt32LE(16);

	len = Cryptography.NetworkToHostOrder(len.toString());
	
	var bMsg=Buffer.alloc(len);
	
	var bCorpid=Buffer.alloc(btmpMsg.Length - 20 - len);
	
	
	
	return len;
}

/*
 使用Rijndael算法解密数据
 * */
Cryptography.AES_decryptArray = function(Input, Iv, Key) {

	var clearEncoding = 'utf8';
	var cipherEncoding = 'base64';
	var cipherChunks = [];
	var decipher = crypto.createDecipheriv('aes-256-cbc', Key, Iv);
	decipher.setAutoPadding(true);
	cipherChunks.push(decipher.update(Input, cipherEncoding, clearEncoding));
	cipherChunks.push(decipher.final(clearEncoding));
	return cipherChunks.join('');

}

/*
 将整数值由网络字节顺序转换为主机字节顺序。
 * */
Cryptography.NetworkToHostOrder = function(network) {

	//数字转换成字节数组
	function intFromBytes(long) {

		var byteArray = [0, 0, 0, 0, 0, 0, 0, 0];

		for(var index = 0; index < byteArray.length; index++) {
			var byte = long & 0xff;
			byteArray[index] = byte;
			long = (long - byte) / 256;
		}

		return byteArray;
	};
	
	var buf=Buffer.from(intFromBytes(network));
	
	return buf.readInt32BE();
}




module.exports = Cryptography;