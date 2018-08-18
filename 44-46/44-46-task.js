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
