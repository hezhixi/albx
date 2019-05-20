// 这里实现的所有文章动态获取
$(function(){
    // 查询个数，行数
    var pageSize = 2
    // 设置当前页，第几页
    var pageNum = 1
    function render(){
        $.ajax({
            type:'get',
            url:'/allPosts',
            data:{
                pageSize,
                pageNum,
            },
            dataType:'json',
            success:(result)=>{
                // console.log(result)
                    var html = template('postListTemp',result.data)
                    $('tbody').html(html)
                    // 生成分页结构
                    setPage(Math.ceil(result.data.total/pageSize))
            }
        })
    }
    // 先查询一次
    render()

    // 设置分页
    function setPage(total){
        $('.pagination').bootstrapPaginator({
            // 设置版本号
            bootstrapMajorVersion:3,
            // 显示第几页
            currentPage:pageNum,
            // 总页数
            totalPages:total,
            // 点击按钮，执行该函数，调用ajax渲染页面
            onPageClicked:(event,originalEvent,type,page)=>{
                // 点击当前的页码赋值给currentPage,调用ajax，渲染页面
                console.log(page)
                pageNum = page
                render()
            }
        })
    }
})
