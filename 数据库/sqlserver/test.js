 //实验已经通过
 var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: 'hhbdy520',
        server: '127.0.0.1\\SQLEXPRESS', 
        database: 'test'
    };
(async function () {
  try {
    console.log("sql connecting......")
    let pool = await sql.connect(config)
    let result = await pool.request()
      .query('select * from users')  // subject is my database table name

    console.log(result )

  } catch (err) {
    console.log(err);
  }
})()