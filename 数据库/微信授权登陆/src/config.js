module.exports={
	wechat:{
		corpID:"ww03e21166a06c5873",
		application:[
			{
				agentId:"1000004",
				secret:"P_W5lQk7-RSU2hEF1TxudfyFnx53cfVl1Jru3vD_EbA"
			}
			
		]	
	},
	getApplicationByAgentId:function(agentId){
		var applications=this.wechat.application;
		return applications.filter(data => data.agentId==agentId)[0];
	}
}
