Array.prototype.twoface0str=function(){
    if ((this instanceof Array)&&(this[0] instanceof Array)) {
        var str = [];
        for (var i = 0; i < this.length; i++) {
        	str.push(this[i][0]);
        }
        return str.join(',');
    }
};
//将二维菜单转换成字符串
function menutostr(arr,sign){
    var newarr=[];
    var sign=sign+'';
    if(arr instanceof Array){
    	if (arr[0] instanceof Array) {
    	    for (var i = 0; i < arr.length; i++) {
        	newarr.push(arr[i][0]);
          }
        }
        else{
        	throw 'this is not a 二维arr';
        }
    }
        
    return newarr.join(sign);
}

function extend(Sub,Sup){
    Sub.prototype=Object.create(Sup.prototype);
    Sub.prototype.constructor=Sub;
}

function Queue(arr,size) {
    var list = arr;
    
    //向队列中添加数据
    this.push = function(data) {
        if (data==null) {
            return false;
        }
        //如果传递了size参数就设置了队列的大小
        if (size != null && !isNaN(size)) {
            if (list.length == size) {
                this.shift();
            }
        }
        list.push(data);
        return true;
    }

    //从队列中取出数据
    this.shift = function() {
        return list.shift();
    }

    //返回队列的大小
    this.size = function() {
        return list.length;
    }

    //返回队列的内容
    this.quere = function() {
        return list;
    }
}
