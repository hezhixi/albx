// 这里封装的是一个工具函数
// 用来获取get方式的url,分割需要的参数
var itcast = {
  getRouterName(urlStr) {
    // 判断是否有参数，问好
    var index = urlStr.indexOf('?')
    // 定义一个值
    var routername
    // 如果没有
    if (index == -1) {
      // 就提取‘/’的路由
      routername = urlStr.substring(urlStr.lastIndexOf('/') + 1)
    } else {
      routername = urlStr.substring(
        urlStr.lastIndexOf('/') + 1,
        index
      )
    }
    return routername
  }
}
