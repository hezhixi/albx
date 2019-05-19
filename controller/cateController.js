// 引入工具函数，获取get形式的id
var removerModule = require('../dataModules/removerModule')
// 引入自定义模板分类数据
var cateModule =require('../dataModules/cateModule')
// 这里获取的是分类目录的控制器调用
exports.cateControllerPage=(req,res)=>{
    // 获取分类的数据
    cateModule.cateModuleDate((err,data)=>{
        if(err){
            res.end('404')
        }else{
            res.json(data)
        }
    })
    
}
// 这里获取的是编辑数据的控制
exports.cateGoriesEdit=(req,res)=>{
    // 请求参数，获取数据
    // console.log(req.body.name)
    var obj =req.body
    // 调用数据模板，获取数据
    cateModule.cateEditDate(obj,(err)=>{
        if (err) {
            res.json({
                code:201,
                msg:'编辑失败'
            })
        }else{
            res.json({
                code:200,
                msg:'编辑成功'
            })
        }
    })
}
// 这里实现添加数据的操作
exports.cateGoriesAdd=(req,res)=>{
    // 获取参数，获取数据
    var obj = req.body
    cateModule.cateModuleAdd(obj,(err)=>{
        if(err){
            res.json({
                code:201,
                msg:'添加失败'
            })
        }else{
            res.json({
                code:200,
                msg:'添加成功'
            })
        }
    })
}
// 这里实现的是单个删除按钮的操作
exports.cateGoriesDel=(req,res)=>{
    // 获取id,通过id获取数据
  var id =  removerModule.getParameter(req.url).id
//   console.log(id)
    cateModule.cateModuleDel(id,(err)=>{
        if (err) {
            res.json({
                code:201,
                msg:'删除失败'
            })
        }else{
            res.json({
                code:200,
                msg:'删除成功'
            })
        }
    })
}
// 这里实现的是批量删除按钮的操作
exports.cateGoriesAllDel=(req,res)=>{
    // console.log(req.url)
    var ids = removerModule.getParameterAll(req.url).ids
    // console.log(ids)
    // 获取数据
    cateModule.cateModuleAllDel(ids,(err)=>{
        if(err){
            res.json({
                code:201,
                msg:'批量删除失败'
            })
        }else{
            res.json({
                code:200,
                msg:'批量删除成功'
            })
        }
    })
}