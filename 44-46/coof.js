var Coof = (function(){
    var instance = null;
    function createCoof(name,salary){
         this.name = name;
         this.salary = salary;
    };
    createCoof.prototype = {
        cooking:function(sortarr){
        var sortarr = arr.sort(function(obj1,obj2){
            return obj1[2]-obj2[2];});
        var i = 0,
            time = time||null;
        (function callback(){
            if (sortarr[i]) {
                time=setTimeout(function(){
                    new Promise(function(resolve,reject){
                        console.log(sortarr[i][0]+'已做完');
                        resolve(sortarr[i]);    
                    }).then(Waiter.getInstance().getcusmenu);
                    if(i<sortarr.length){
                        i++;
                        if (i==sortarr.length) {
                            setTimeout(function(){console.log('全部做完了!');},0);
                            return; 
                        }
                        callback();
                    }
                },sortarr[i][2]*1000);
            }
        })();
    }
};
    return {
        getInstance :function(name,salary){
            if (instance === null) 
                {instance = new createCoof(name,salary);}
            return instance;
        }
    };
})();
