$(function() {
  // 判断是否有参数，问好
  var index = location.href.indexOf('?')
  // 定义一个值
  var routername
  // 如果没有
  if (index == -1) {
    // 就提取‘/’的路由
    routername = location.href.substring(location.href.lastIndexOf('/') + 1)
  } else {
    routername = location.href.substring(
      location.href.lastIndexOf('/') + 1,index)
  }
  // 获取到当前元素，为元素进行相关设置
  // 设置文章导航栏
  var menu_posts = $('#menu-posts')
  if (
    routername == 'posts' ||
    routername == 'post-add' ||
    routername == 'categories'
  ) {
    menu_posts.addClass('in')
    menu_posts.attr('aria-expanded', true)
  }
  // 导航菜单也需要这样设置
  var menu_settings = $('#menu-settings')
  if (
    routername == 'nav-menus' ||
    routername == 'slides' ||
    routername == 'settings'
  ) {
    menu_settings.addClass('in')
    menu_settings.attr('aria-expanded', true)
  }
//   为当前li元素添加样式
$('#'+routername).addClass('active')
})
