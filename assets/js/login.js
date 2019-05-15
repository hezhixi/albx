$(function(){
    // 点击登录按钮，跳转指定页面
    $('.btn-primary').on('click',function(){
        // 获取输入的邮箱和密码
        var email = $('#email').val()
        var password = $('#password').val()
      $.ajax({
        type:'post',
        url:'/admin/login',
        data:{
          email,
          password
        },
        dataType:'json',
        success:function(reult){
            if(reult.code == 201){
                $('.alert-danger').css('display','block')
                $('.alert-danger span').text(reult.msg)
            }else{
                location.href = '/admin'
            }
        }
      })
    })
  })