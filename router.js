// 引入express
const express = require('./node_modules/express')
// 引入自定义控制器模块
var controller = require('./controller/indexController')
// 创建路由
var router = express.Router()
// 创建路由模块
// 请求前台页面,主页面
router.get('/',controller.getIndexController)
    // detail页面
      .get('/detail',controller.getDetailController)
    //   list页面
      .get('/list',controller.getListController)

      // 请求后台页面 ,主页面
      .get('/admin',controller.getAdminIndexController)
      // categories页面
      .get('/admin/categories',controller.getAdmincategoriesController)
      // comments页面
      .get('/admin/comments',controller.getAdmincommentsController)
      // login页面
      .get('/admin/login',controller.getAdminloginController)
      // nav-menus页面
      .get('/admin/nav-menus',controller.getAdminNavMenusController)
      // password-reset页面
      .get('/admin/password-reset',controller.getAdminPasswordResetController)
      // post-add页面
      .get('/admin/post-add',controller.getAdminPostAddController)
      // poste页面
      .get('/admin/posts',controller.getAdminPostsController)
      // profile页面
      .get('/admin/profile',controller.getAdminProfileController)
      // settings页面
      .get('/admin/settings',controller.getAdminSettingsController)
      // slides页面
      .get('/admin/slides',controller.getAdminSlidesController)
      // users页面
      .get('/admin/users',controller.getAdminUsersController)
// 暴露这个路由
module.exports=router
