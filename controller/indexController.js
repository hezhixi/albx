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
    res.render('admin/index.ejs')
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

