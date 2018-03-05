module.exports={
	wechat:{
		corpID:"wx51da32eafd941f43",
		application:[
			{
				agentId:"1000006",
				secret:"kt_APv06l7aIqTlowTiWxpGyq1mhEl3vHIznUAGsVTU"
			}
		]	
	},
	getApplicationByAgentId:function(agentId){
		var applications=this.wechat.application;
		return applications.filter(data => data.agentId==agentId)[0];
	}
}
