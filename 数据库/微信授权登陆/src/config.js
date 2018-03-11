module.exports={
	wechat:{
		corpID:"ww03e21166a06c5873",
		application:[
			{
				agentId:"1000004",
				secret:"P_W5lQk7-RSU2hEF1TxudfyFnx53cfVl1Jru3vD_EbA",
				token:"p8Clm5GCE",
				EncodingAESKey:"uDqRyjKY6duuNNM2gmiaalbFLkHyCxEKlkQadt4ps6B"
			},
			{
				agentId:"1000005",
				secret:"IgPQx1QVsnEbL3ZeyfgdN20r6I8GL1Cs5x-CDqy_ETo",
				token:"y6pzKgfbauJUnUUR3tJ9g0aTRCEIYA",
				EncodingAESKey:"bUlHK2bPGhVMzRa5xcf0qTCjTNbIStevl2sACSSpN2E"
			}
			
		]	
	},
	getApplicationByAgentId:function(agentId){
		var applications=this.wechat.application;
		return applications.filter(data => data.agentId==agentId)[0];
	}
}
