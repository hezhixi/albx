// 引入mysql
var mysql = require('mysql')
 connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'baixiu'
})
module.exports=connection