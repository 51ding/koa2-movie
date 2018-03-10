 //实验已经通过
 var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: 'hhbdy520',
        server: '127.0.0.1\\SQLEXPRESS', 
        database: 'test'
    };
sql.connect(config).then(pool=>{	
	var i=0;
	var timeout=setInterval(async function(){
  		
  		if(i==80000) return clearInterval(timeout);
  		i++;
    	let result = await pool.request()
      .query(`insert into users values('zhangsan${i}')`,(err,result) =>{
      	 if(err) return console.log(err);
      	 console.log("插入成功"+i);
      })  // subject is my database table na
  	},100);
})


//(async function () {
//	
//})()