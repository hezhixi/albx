var connection = require('./commonModule')
module.exports={
    postsModulesAll(query,callback){
        var sql = `SELECT posts.id,posts.title,posts.created,posts.status,users.nickname,categories.name
                    FROM posts
                    INNER JOIN users on posts.user_id = users.id
                    INNER JOIN categories on posts.category_id = categories.id
                    limit ${(query.pageNum-1)*query.pageSize},${query.pageSize}`
        connection.query(sql,(err,results)=>{
            if(err){
                callback(err)
            }else{
                sql = 'select count (*) cnt from posts'
                connection.query(sql,(err,result)=>{
                    if(err){
                        callback(err)
                    }else{
                    callback(null,{data:results,total:result[0].cnt})
                    }
                })
            }
        })
    }
}