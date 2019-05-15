// 引入自定义模板获取email数据
var emailModules = require('../dataModules/emailModules')
exports.getEmailPassword=(req,res)=>{
    // 获取数据
    // console.log(req.body);
    
    emailModules.getEmailModules(req.body.email,(err,data)=>{
        if(err){
            res.json({
                code :201,
                msg : '服务器无响应'
            })
        }else{
            if(data){
                if(data.password==req.body.password){
                    res.json({
                        code:200,
                        msg:'登录成功'
                    })
                }else{
                    res.json({
                        code:201,
                        msg:'密码错误'
                    })
                }
            }else{
                res.json({
                    code:201,
                    msg :'邮箱输入错误'
                })
            }
            
        }
    })    
    // 返回客户端
}