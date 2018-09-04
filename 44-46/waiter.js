var Waiter=(function(){
    var instance=null;
    function createWaiter(name,salary){
         this.name=name;
         this.salary=salary;
    };
    createWaiter.prototype = {
	    getcusmenu:function(menu){
            if (menu instanceof Array) {
		        if(menu[0] instanceof Array){
		    	    //记录客人点菜
                    var sortarr = menu.sort(function(obj1,obj2){
                    return obj1[2]-obj2[2];});
                    this.foodmenu=sortarr;
		    	    console.log('顾客点了'+menu.twoface0str());
                    return new Promise(function(resolve,reject){
                        resolve(sortarr);
                    });
		        }
                else{
                //上菜
                    
                    console.log('上菜'+menu[0]);
                    
                    }

                }
            }

	    }

    };
    return {
    	getInstance :function(name,salary){
    		if (instance === null) 
    			{instance = new createWaiter(name,salary);}
    		return instance;
    	}
    };
})();