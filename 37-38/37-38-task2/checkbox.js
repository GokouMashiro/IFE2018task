function makecheckbox/*生成一组CheckBox*/( checkboxwrap/*CheckBox容器*/, checkboxobj/*CheckBox选项的参数对象或者数组*/ ) {
    //生成全选checkbox的html，给一个自定义属性表示为全选checkbox，比如checkbox-type="all"
    var childcheckboxhtml="";
    var allcheckboxhtml="<input type='checkbox' allorchild='all'>全选";       
    //遍历参数对象
    for (var i = 0; i < checkboxobj.length; i++) /* {*/{
    	
        //生成各个子选项checkbox的html，给一个自定义属性表示为子选项
    
         childcheckboxhtml+="<input type='checkbox' allorchild='child' value="+checkboxobj[i].text+">"+checkboxobj[i].text;
    //}
    }    
    //容器innerHTML = 生成好的html集合
    checkboxwrap.innerHTML=allcheckboxhtml+"<br>"+childcheckboxhtml;
    var boo=true;
    //给容器做一个事件委托 = function() {
    checkboxwrap.onclick=function(e){
    	e=e.target;
    	var wrapinput=checkboxwrap.querySelectorAll('input');
    	if(e.type=='checkbox'){//if 是checkbox
    		var num=0;
            for (var i = 1; i < wrapinput.length; i++) {
                if (wrapinput[i].checked==true) {
                	num++;
                	}
                }
             //读取自定义属性
    		if(e.getAttribute("allorchild")=="all"){            //if 全选
                                                                //做全选对应的逻辑

                 if (e.checked==true) {
                 	if(num!=(wrapinput.length-1)){
                 		for (var i = 1; i < wrapinput.length; i++) {
                 			wrapinput[i].checked=true;                 			
                 		}
                 	}
                 }
                 else{
                 	if(num==(wrapinput.length-1)){
                 		e.checked=true;
                 	}
                 }
    	    }
    		else{                                             //else
                                                             //做子选项对应的逻辑
                if(e.checked==true){
                	if(num==(wrapinput.length-1)){
                		wrapinput[0].checked=true;
                	}                	
                }
                else{
                	if(num==0){
                		e.checked=true;
                	}
                	else{
                		wrapinput[0].checked=false;
                	}
                }

                //读取对应的数据function                
    		}
    		getdata();
            
    	}
        


    }
    //}
  
}