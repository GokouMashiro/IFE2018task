function rendernewform(){
    
    //根据表单选项获取数据
    //渲染表格
       
    //console.log(list);
    var Tr=document.getElementsByTagName('tr');   
    if(Tr[0]){
    var len=Tr.length;
    for(var i=0;i < len;i++){
        Tr[0].parentNode.removeChild(Tr[0]);
       }
    }
      //表头
        var trfirst=document.createElement("tr");
        for(var i=0;i<list[0].length;i++){
            var newth=document.createElement("th");
            newth.innerHTML=list[0][i];
            trfirst.appendChild(newth);

        }
        Tbody.appendChild(trfirst);
    
    
   //表格
   
    for (var i = 1; i < list.length; i++) {

        var newtr=document.createElement("tr");

        for (var j = 0; j < list[i].length; j++) {

            var newnode=document.createElement("td");
            newnode.innerHTML=list[i][j];
            
            if (!isNaN(list[i][j])) {newnode.setAttribute('class','tdnum');}

            newtr.appendChild(newnode);
        }    
        Tbody.appendChild(newtr);

    }
    var Trlist=document.querySelectorAll("tr");
    var  bothnum=0;
    
    for (var i = 1; i < list.length; i++) {
        if((i==list.length-1)||(list[i][0]!=list[i+1][0])){
            if(bothnum!=0){
               //[i-1][0]td 设置rowspan="bothnum"
               //移除[i][0]td 
               //bothnum=0
            Trlist[i-bothnum].childNodes[0].setAttribute("rowspan",bothnum+1);
            for (var j = 0; j < bothnum; j++) {
            Trlist[i-j].removeChild(Trlist[i-j].childNodes[0]);
            }

            bothnum=0;
             } 
             }      
        else if(list[i][0]==list[i+1][0]){
           bothnum++;
        }

        }
   

        
        }
       
   
    
    
