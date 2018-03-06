/*
 * 微信企业号加解密相关方法
 */
//加解密的返回码
var WXBizMsgCryptErrorCode = {
	WXBizMsgCrypt_OK: 0,
	//签名验证错误
	WXBizMsgCrypt_ValidateSignature_Error: -40001,
	//xml解析失败
	WXBizMsgCrypt_ParseXml_Error: -40002,
	//sha加密生成签名失败
	WXBizMsgCrypt_ComputeSignature_Error: -40003,
	//AESKey 非法
	WXBizMsgCrypt_IllegalAesKey: -40004,
	//corpid 校验错误
	WXBizMsgCrypt_ValidateCorpid_Error: -40005,
	//AES 加密失败
	WXBizMsgCrypt_EncryptAES_Error: -40006,
	//AES 解密失败
	WXBizMsgCrypt_DecryptAES_Error: -40007,
	//解密后得到的buffer非法
	WXBizMsgCrypt_IllegalBuffer: -40008,
	//base64加密失败
	WXBizMsgCrypt_EncodeBase64_Error: -40009,
	//base64解密失败
	WXBizMsgCrypt_DecodeBase64_Error: -40010,
	//生成xml失败
	WXBizMsgCrypt_CreateXML_Error:-40011
}

function WXBizMsgCrypt(config={}){
	if(!config.sToken || !config.sEncodingAESKey || !config.sCorpID) 
		throw new Error("配置不齐全！");
	if(!(this instanceof WXBizMsgCrypt)) return new WXBizMsgCrypt(config);
	
	this.m_sToken=config.sToken;
	this.m_sEncodingAESKey=config.sEncodingAESKey;
	this.m_sCorpID=config.sCorpID;
}


//**验证URL
// @param sMsgSignature: 签名串，对应URL参数的msg_signature
// @param sTimeStamp: 时间戳，对应URL参数的timestamp
// @param sNonce: 随机串，对应URL参数的nonce
// @param sEchoStr: 随机串，对应URL参数的echostr
// @param sReplyEchoStr: 解密之后的echostr，当return返回0时有效
// @return：成功0，失败返回对应的错误码
//**
WXBizMsgCrypt.prototype.VerifyURL=function(sMsgSignature, sTimeStamp,sNonce,sEchoStr,sReplyEchoStr){
	int ret=0;
	if(this.m_sEncodingAESKey.length!=43)
		return WXBizMsgCryptErrorCode.WXBizMsgCrypt_IllegalAesKey;
	
}


/**
 * 校验签名
**/
WXBizMsgCrypt.prototype.VerifySignature=function(sToken,sTimeStamp,sNonce,sMsgEncrypt,sSigture){
	
}

/**
 * 生成签名
**/
WXBizMsgCrypt.prototype.VerifySignature=function(sToken,sTimeStamp,sNonce,sMsgEncrypt,sSigture){
	var AL=[];
	AL.push(sToken);
	AL.push(sTimeStamp);
	AL.push(sNonce);
	AL.push(sMsgEncrypt);
	AL=AL.sort();
	
}


module.exports=WXBizMsgCrypt;
