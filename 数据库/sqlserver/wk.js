//实验已经通过
var sql = require("mssql");
var rp = require("request-promise");
// config for your database
var config = {
	user: 'sa',
	password: '123456',
	server: '192.168.40.17',
	database: 'dxn_log1'
};

//能否调用;
var canReequest = false;

sql.connect(config).then(async pool => {
	var i = 48759;
	var result=await pool.request()
      .query("select name as customerName from Base_UpOrLower where [type]!='P' and Level<6 order by name asc");
	var length = result.recordset.length;

	
	
	
	var timeout=setInterval(function() {
		
		var hour=new Date().getHours();
		console.log(new Date());
		if(hour>6 && hour<20) return false;
		
		
		
		var obj=result.recordset[i++];
		console.log(`第${i}次请求!`);
		//obj.i=i;
		
		var options = {
		method: 'POST',
		uri: 'http://127.0.0.1:9831/api/GetLawCaseCount',
		body: obj,
		json: true // Automatically stringifies the body to JSON
	};

	rp(options)
		.then(function(parsedBody) {
//			if(!parsedBody.success) return clearInterval(timeout);
			if(!parsedBody.success){
				console.log(parsedBody)
			}
			else{console.log("成功！");}
			
		})
		.catch(function(err) {

		});
		
				
		
	},2500);
})

//	setInterval(async function(){
//		
//    .query('select top 1 name from users')  
//			
//			console.log(result.recordset)
//  	
//	},2000);

function startRequest(obj) {
	var options = {
		method: 'POST',
		uri: 'http://127.0.0.1:3000/',
		body: obj,
		json: true // Automatically stringifies the body to JSON
	};

	rp(options)
		.then(function(parsedBody) {
			console.log(parsedBody);
		})
		.catch(function(err) {

		});
}