// 引入express
const express = require('./node_modules/express')
// 引入自定义控制器模块
var controller = require('./controller/indexController')
// 引入登录控制页面
var loginController = require('./controller/loginController')
// 引入分类目录的控制页面
var cateController = require('./controller/cateController')
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

      // 后台登录页面邮箱
      .post('/admin/login',loginController.getEmailPassword)
      // 获取后台分类页面
      .get('/categories',cateController.cateControllerPage)
      // 实现编辑页面
      .post('/categories/edit',cateController.cateGoriesEdit)
      // 实现添加数据
      .post('/categories/add',cateController.cateGoriesAdd)
      // 实现单个按钮删除
      .get('/categories/del',cateController.cateGoriesDel)
      // 实现批量删除
      .get('/categories/allDel',cateController.cateGoriesAllDel)
// 暴露这个路由
module.exports=router
