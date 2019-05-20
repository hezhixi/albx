// 这里写的是分类目录的客户端渲染
$(function() {
  // 发起ajax请求
  refresh()

  // 下面是执行编辑操作
  $('tbody').on('click', '.btn-edit', function() {
    // 点击当前的编辑，获取自定义属性的数据
    // console.log($(this).data());
    // console.log($(this)[0].dataset['slug'])
    // 定义一个变量获取当前的数据
    var data = $(this).data()
    // 为左侧表单中的元素赋值
    $('#name').val(data.name)
    $('#slug').val(data.slug)
    $('#id').val(data.id)
  })
  // 实现编辑操作，使用ajax请求
  $('.btnEdit').on('click', function() {
    // data中的参数是一个数组
    var data = $('form').serialize()
    $.ajax({
      type: 'post',
      url: '/categories/edit',
      data: data,
      dataType: 'json',
      success: function(result) {
        // console.log(result)
        if (result.code == 200) {
          // 编辑成功提示
          $('.alert-danger span').text(result.msg)
          $('.alert-danger')
            .fadeIn(1000)
            .delay(2000)
            .fadeOut(1000)
          // 编辑完成，刷新页面
          refresh()
          // 清空内容工具删除
          $('#name').val('')
          $('#slug').val('')
          $('#id').val('')
        } else {
          $('.alert-danger span').text(result.msg)
          $('.alert-danger')
            .fadeIn(1000)
            .delay(2000)
            .fadeOut(1000)
        }
      }
    })
  })
  // 这里点击添加，新增数据
  $('.btnAdd').on('click', function() {
    // 获取form中的所有参数
    var data = $('form').serialize()
    $.ajax({
      type: 'post',
      url: '/categories/add',
      data: data,
      dataType: 'json',
      success: function(result) {
        // console.log(result)
        if (result.code == 200) {
          // 提示说明结果
          $('.alert-danger span').text(result.msg)
          //   显示隐藏域
          $('.alert-danger')
            .fadeIn(1000)
            .delay(2000)
            .fadeOut(1000)
          // 刷新页面状态
          refresh()
          //   清空输入框
          $('#name').val('')
          $('#slug').val('')
          $('#id').val('')
        }
      }
    })
  })
  // 这里实现的是点击全选
  $('.clickAll').on('click', function() {
    // 获取当前复选框的checked属性，chenked只能通过prop来获取和设置
    var str = $(this).prop('checked')
    // 为所有的tbody中的复选框设置相同的checked属性
    $('tbody .oneClick').prop('checked', str)
    // 获取所有的tbody中的被选中复选框，判断数量>1,显示批量删除按钮
    var lists = $('tbody .oneClick:checked')
    // console.log(much)
    // console.log(1)
    if (lists.length > 1) {
      $('.btn-edits').fadeIn(500)
    } else {
      $('.btn-edits').fadeOut(500)
    }
  })
  // 这里实现的是点击单选框，显示批量删除按钮
  $('tbody').on('click', '.oneClick', function() {
    var cnt = $('tbody .oneClick').length
    // console.log(cnt)
    var allCk = $('tbody .oneClick:checked')
    // 显示隐藏批量删除按钮
    if (allCk.length > 1) {
      $('.btn-edits').fadeIn(500)
    } else {
      $('.btn-edits').fadeOut(500)
    }
    // 同时判断所有复选框都选中，就把多选框也选中
    if (allCk.length == cnt) {
      $('.clickAll').prop('checked', true)
    } else {
      $('.clickAll').prop('checked', false)
    }
  })
})
// 这里实现的是批量删除
$('.btn-edits').on('click', function() {
  // 获取所有被选取的复选框
  var allChc = $('tbody .oneClick:checked')
  // 创建一个空数组
  var ids = []
  // 循环
  for (let i = 0; i < allChc.length; i++) {
    ids.push(allChc[i].dataset['id'])
  }

    // 发起请求
    $.ajax({
      type: 'post',
      url: '/categories/allDel',
      // traditional: true,
      data: { ids:ids.join() },
      dataType: 'json',
      success: function(result) {
        console.log(result)
        // 判断循环是否完成
        if (result.code == 200) {
          // $('.alert-danger span').text(success(result.msg))
          $('.alert-danger span').text(result.msg)
          $('.alert-danger')
            .fadeIn(1000)
            .delay(2000)
            .fadeOut(1000)
          refresh()
        } else {
          // $('.alert-danger span').text(success(result.msg))
          $('.alert-danger span').text(result.msg)
          $('.alert-danger')
            .fadeIn(1000)
            .delay(2000)
            .fadeOut(1000)
        }
      }
    })
})

// 反复使用的请求ajax
function refresh() {
  $.ajax({
    type: 'get',
    url: '/categories',
    dataType: 'json',
    success: function(result) {
      // console.log(result)
      var html = template('listTextTemp', { list: result })
      $('tbody').html(html)
    }
  })
}
// 这里实现的是点击单个按钮，实现删除当前内容
function delCate(id) {
  if (confirm('请问是否真的需要删除')) {
    $.ajax({
      type: 'get',
      url: '/categories/del',
      data: { id },
      dataType: 'json',
      success: function(result) {
        // console.log(result)
        if (result.code == 200) {
          $('.alert-danger span').text(result.msg)
          //   显示隐藏域
          $('.alert-danger')
            .fadeIn(1000)
            .delay(2000)
            .fadeOut(1000)
          // 刷新页面状态
          refresh()
        } else {
          $('.alert-danger span').text(result.msg)
          //   显示隐藏域
          $('.alert-danger')
            .fadeIn(1000)
            .delay(2000)
            .fadeOut(1000)
        }
      }
    })
  }
}

// // 这里实现的是批量删除
// $('.btn-edits').on('click', function() {
//   // 获取所有被选取的复选框
//   var allChc = $('tbody .oneClick:checked')
//   // 创建一个空数组
//   var ids = []
//   // 循环
//   for (let i = 0; i < allChc.length; i++) {
//     ids.push(allChc[i].dataset['id'])
//     // 发起请求
//     $.ajax({
//       type: 'get',
//       url: '/categories/allDel',
//       traditional: true,
//       data: { ids },
//       dataType: 'json',
//       success: function(result) {
//         console.log(result)
//       }
//     })
//   }
//   // 判断循环是否完成
//   if (ids.length == allChc.length) {
//     // $('.alert-danger span').text(success(result.msg))
//     $('.alert-danger span').text('批量删除成功')
//     $('.alert-danger')
//       .fadeIn(1000)
//       .delay(2000)
//       .fadeOut(1000)
//     refresh()
//   } else {
//     // $('.alert-danger span').text(success(result.msg))
//     $('.alert-danger span').text('批量删除失败')
//     $('.alert-danger')
//       .fadeIn(1000)
//       .delay(2000)
//       .fadeOut(1000)
//   }
// })
