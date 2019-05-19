// var querystring = require('querystring')
// 前台页面，主页面
exports.getIndexController=(req,res)=>{
    res.render('index.ejs')
}
// 前台detail页面
exports.getDetailController=(req,res)=>{
    res.render('detail.ejs')
}
exports.getListController=(req,res)=>{
    res.render('list.ejs')
}
// 后台页面，主页面
exports.getAdminIndexController=(req,res)=>{
    if(req.session.isLogin && req.session.isLogin =='true'){
        // render 不会去执行控制器中的处理方法，直接渲染相应的页面文件
        res.render('admin/index.ejs')
    }else{
        // 跳转到新的处理程序中继续执行，相当于流浪器发送了一个新的请求
        res.redirect('admin/login')
    }
    //  // 判断有没有登录过
    //  var mycookie = querystring.parse(req.headers.cookie)
    //  var mycookie = querystring.parse(req.headers.cookie)
    //  if(mycookie.isLogin && mycookie.isLogin == 'true'){
    //      // 下面这个配置的作用是配置ejs的模板文件夹，
    //      // 以后ejs会自动的去指定的目录下寻找页面文件
    //     res.render('admin/index.ejs')
    //  }else{
    //      res.render('admin/login.ejs')
    //  }
}
// categories页面
exports.getAdmincategoriesController=(req,res)=>{
    res.render('admin/categories.ejs')
}
// comments页面
exports.getAdmincommentsController=(req,res)=>{
    res.render('admin/comments.ejs')
}
// login页面
exports.getAdminloginController=(req,res)=>{
    res.render('admin/login.ejs')
}
// nav-menus页面
exports.getAdminNavMenusController=(req,res)=>{
    res.render('admin/nav-menus.ejs')
}
// password-reset页面
exports.getAdminPasswordResetController=(req,res)=>{
    res.render('admin/password-reset.ejs')
}
// post-add页面
exports.getAdminPostAddController=(req,res)=>{
    res.render('admin/post-add.ejs')
}
// poste页面
exports.getAdminPostsController=(req,res)=>{
    res.render('admin/posts.ejs')
}
// profile页面
exports.getAdminProfileController=(req,res)=>{
    res.render('admin/profile.ejs')
}
// settings页面
exports.getAdminSettingsController=(req,res)=>{
    res.render('admin/settings.ejs')
}
// slides页面
exports.getAdminSlidesController=(req,res)=>{
    res.render('admin/slides.ejs')
}
// users页面
exports.getAdminUsersController=(req,res)=>{
    res.render('admin/users.ejs')
}

