function Customer(name){
    this.name = name;
}
Customer.prototype = {
	foodorder:function(menu){
        var name=this.name; 

        console.log('顾客'+name+'入座');
        //arr 订单（二维数组[['food','price','time'],[]])
        var arr=this.cusgetfood(menu);
        var foodstr=menutostr(arr,',');

        return new Promise(function(resolve,reject){
        	setTimeout( () => {
        		console.log(name+'点了'+foodstr);
        		resolve(arr);
        	},3000);
        });
        
	},
	//随机点多个菜方法
	cusgetfood:function(arr){
		var menu=arr.slice();
		var list=[];
		var len=menu.length;
		//n=点几个菜
		var n=parseInt(Math.random()*len+1);
		for (var i = 0; i < n; i++) {
			var index=parseInt(Math.random()*menu.length);
			//二维数组menu调用splice方法返回的也是二维数组
			//例:[['s','a'],['b']].splice(0,1)执行后得到[['s','a']]
			list.push(menu.splice(index,1)[0]);
		}
		//console.log(list);
		return list;
		
	},
	payfor:function(foodmenu){
		var money = 0;
        for (let i = 0; i < foodmenu.length; i++) {
         	money += foodmenu[i][1];
         }
         console.log('已支付'+money+'元');
	}
};