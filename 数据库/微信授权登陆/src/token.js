
/*
 Token的自管理
 */
var rp=require("request-promise");

function Token(config){
	this.config=config;
	this.corpId=config.wechat.corpID;
	this.tokens=[];
	this.jsSDKTokens=[];
}

//获取token
Token.prototype.getToken=async function(agentId){
	var me=this;
	var application=this.config.getApplicationByAgentId(agentId);
	if(application.length==0) return;
	var token=this.tokens.filter(data => data.agentId == agentId)[0];
	//如果沒有則生成token
	if(!token){
		var tokenResult=JSON.parse(await this.createToken(application));
	    me.tokens.push({agentId:agentId,expiresIn:Date.now()+(tokenResult.expires_in-20)*1000,accessToken:tokenResult.access_token});
		return Promise.resolve(tokenResult.access_token);
	}
	//token存在则验证token的有效性
	else{
		//过期了,更新token
		if(Date.now()>token.expiresIn){
			
			var tokenResult=JSON.parse(await this.createToken(application));
			token.expiresIn=Date.now()+(tokenResult.expires_in-20)*1000;
			token.accessToken=tokenResult.access_token
			return Promise.resolve(tokenResult.accessToken)
		}
		else{
			return Promise.resolve(token.accessToken);
		}
	}
}



//获取JSSDK的token
Token.prototype.getJSSDKToken=async function(agentId){
	var me=this;
	var application=this.config.getApplicationByAgentId(agentId);
	
	if(application.length==0) return;
	
	var jstoken=this.jsSDKTokens.filter(data => data.agentId == agentId)[0];
	//如果沒有則生成token
	if(!jstoken){
		var jstokenResult=JSON.parse(await this.createJsSDKToken(agentId));
	    me.jsSDKTokens.push({agentId:agentId,expiresIn:Date.now()+(jstokenResult.expires_in-20)*1000,ticket:jstokenResult.ticket});
		return Promise.resolve(jstokenResult.ticket);
	}
	//token存在则验证token的有效性
	else{
		//过期了,更新token
		if(Date.now()>jstoken.expiresIn){
			
			var tokenResult=JSON.parse(await this.createJsSDKToken(agentId));
			token.expiresIn=Date.now()+(tokenResult.expires_in-20)*1000;
			token.ticket=tokenResult.ticket
			return Promise.resolve(tokenResult.ticket)
		}
		else{
			return Promise.resolve(jstoken.ticket);
		}
	}
	
}


Token.prototype.createToken=function(application){
	var me=this;
	var url=`https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=${this.corpId}&corpsecret=${application.secret}`;
	return rp(url);
}

Token.prototype.createJsSDKToken=async function(agentId){
	var accessToken=await this.getToken(agentId);
	var url=`https://qyapi.weixin.qq.com/cgi-bin/get_jsapi_ticket?access_token=${accessToken}`;
	return rp(url);
}




module.exports=Token;
