// 这里封装的是获取id工具函数
module.exports={
    getParameter(str){
        // http://127.0.0.1:3004/delCategoryById?id=3&name=jack
        str=str.substring(str.lastIndexOf('?')+1) // id=3&name=jack
        var arr = str.split('&') // ['id=3','name=jack']
        var obj = {}
        for(var i =0; i<arr.length;i++){
            var temp = arr[i].split('=') // ['id','3']
            obj[temp[0]]=temp[1]  // obj['id']=3
        }
        return obj
    }
}
module.exports={
    getParameterAll(str){
        // http://127.0.0.1:3004/delCategoryById?id=3&name=jack
        str=str.substring(str.lastIndexOf('?')+1) // id=3&name=jack
        var arr = str.split('&') // ['id=3','name=jack']
        var obj = {}

        for(var i =0; i<arr.length;i++){
            var temp = arr[i].split('=') // ['id','3']
            // var arr1 = temp[]
            // var arr2 = temp[1]
            obj[temp[0]]=temp[1]  // obj['id']=3
            // obj=arr2
        }
        return obj
    }
}