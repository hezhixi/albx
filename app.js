// 使用express应用
const express = require('./node_modules/express')
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
// 配置模块引擎为ejs
app.set('view engine','ejs')
// 配置ejs的模板文件夹，自动去指定的目录下寻找页面文件
app.set('views',__dirname+'/views')
// 设置当前应用使用这个路由
app.use(router)