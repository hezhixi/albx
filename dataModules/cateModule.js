// 这里获取的分类目录的数据
// 这里获取mysql数据
var connection = require('./commonModule')
// 获取分类页面数据
exports.cateModuleDate = (callback) => {
  var sql = 'SELECT * FROM categories where id <> 1'
  connection.query(sql, (err, result) => {
      if(err){
          callback(err)
      }else{
          callback(null,result)
      }
  })
}
// 获取编辑生成数据
exports.cateEditDate = (obj,callback)=>{
    var sql = 'update categories set slug = ?,name = ? where id = ?'
    connection.query(sql,[obj.slug,obj.name,obj.id],(err,result)=>{
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })
}
// 这里实现添加数据
exports.cateModuleAdd=(obj,callback)=>{
    var sql = 'INSERT categories(slug,name) VALUES(?,?)'
    connection.query(sql,[obj.slug,obj.name],(err,result)=>{
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })
}
// 这里实现的是获取删除的单个数据
exports.cateModuleDel=(id,callback)=>{
    var sql = 'DELETE from categories where id = ?' 
    connection.query(sql,[id],(err,result)=>{
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })
}
// 这里实现的是获取批量删除的多个数据
exports.cateModuleAllDel=(id,callback)=>{
    var sql = `delete from categories where id in (${id})`
    connection.query(sql,(err,result)=>{
        if(err){
            callback(err)
        }else{
            // console.log([id.id])
            callback(null)
        }
    })
}