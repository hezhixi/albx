// 使用express应用
const express = require('./node_modules/express')
// 引入第三方模块body-barser
var bodyParser = require('body-parser')
// 引入第三方模块
var session = require('express-session')
// 创建服务器
const app = express()
// 引入路由
var router = require('./router')
// 引入ejs
var ejs = require('./node_modules/ejs')
// 监听端口
app.listen(3005,()=>{
    console.log('http://127.0.0.1:3005')
})
// 托管静态页面
app.use('/assets',express.static('assets'))
// 配置body-parser中间件
app.use(bodyParser.urlencoded({extended:true}))
// 配置模块引擎为ejs
app.set('view engine','ejs')
// 配置ejs的模板文件夹，自动去指定的目录下寻找页面文件
app.set('views',__dirname+'/views')
// 配置express-scssion
app.use(session({
    secret:'mywords',// 加盐，你可以指定只有你一个人知道的字符串
    // 重新保存，强制会话保存即使是未修改的，默认为true但是得写上
    resave:false,
    // 强制“未初始化”的会话保存到存储
    saveUninitialized:false
}))
// 添加所以请求的路由中间件函数
app.use((req,res,next)=>{
    // 判断是否登陆
    // 前台页面不用登录
    if(req.session.isLogin  && req.session.isLogin == 'true'|| req.url.indexOf('/admin') == -1 || req.url == '/admin/login'){
        next()
    }else{
        res.redirect('/admin/login')
    }
})
// 设置当前应用使用这个路由
app.use(router)