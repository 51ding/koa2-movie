//实验已经通过
var sql = require("mssql");
var rp = require("request-promise");
// config for your database
var config = {
	user: 'sa',
	password: 'hhbdy520',
	server: '127.0.0.1\\SQLEXPRESS',
	database: 'test'
};

//能否调用;
var canReequest = false;

sql.connect(config).then(async pool => {
	var i = 0;
	var result=await pool.request()
      .query('select * from users');
	var lenght = result.recordset.length;

	var timeout=setInterval(function() {
		var obj=result.recordset[i++];
				console.log(`第${i}次请求!`);
		obj.i=i;
		
		var options = {
		method: 'POST',
		uri: 'http://127.0.0.1:3000/',
		body: obj,
		json: true // Automatically stringifies the body to JSON
	};

	rp(options)
		.then(function(parsedBody) {
		console.log(parsedBody);
			if(parsedBody!="成功！") return clearInterval(timeout);
		})
		.catch(function(err) {

		});
		
		
		
		
	}, 2000);
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