// 获取sql中的数据
// 引入mysql
var connection = require('./commonModule')
// 获取数据库的数据
exports.getEmailModules=(email,callback)=>{
    var sql = 'select * from users where email = ?'
    connection.query(sql,[email],(err,results,fields)=>{
        if(err){
            callback(err)
        }else{
            callback(null,results[0])
        }
    })
}
