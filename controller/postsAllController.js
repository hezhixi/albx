// 引入数据模块
var postsModules = require('../dataModules/postsModules')
// 操作所有文章
module.exports={
    // 获取所有文章的数据生成
    allPosts(req,res){
        console.log(req.query)
        // 调用数据模块所有文章数据
        postsModules.postsModulesAll(req.query,(err,data)=>{
            if(err){
                res.json({
                    code:201,
                    msg:'获取数据失败'
                })
            }else{
                // console.log(data)
                res.json({
                    code:200,
                    msg:'获取数据成功',
                    data:data
                })
            }
        })
    }
}