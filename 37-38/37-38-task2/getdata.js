function getdata(){
    //遍历原始数据 {
      var regioncheckinput=regionwrap.querySelectorAll("input");
      var productcheckinput=productwarp.querySelectorAll('input');
      var n=0;var m=0;var regionchecked=[];var productchecked=[];
      var arr=[];
      for (var i = 1; i < regioncheckinput.length; i++) {//计算地区checkbox的数量
          if(regioncheckinput[i].checked){
             n++;
             regionchecked.push(regioncheckinput[i]);
          } 
      }
      for (var i = 1; i < productcheckinput.length; i++) {//计算商品checkbox的数量
        if(productcheckinput[i].checked){
             m++;
             productchecked.push(productcheckinput[i]);
        }
      }
      if(n&&m){//上下都选
        for (var i = 0; i < sourceData.length; i++) {
          for (var j = 0; j < regionchecked.length; j++) {
            for (var k = 0; k < productchecked.length; k++) {
              if (sourceData[i].product==(productchecked[k].value+'')&&(sourceData[i].region==regionchecked[j].value+'')) {
                           arr.push(sourceData[i]);     
              }
            }
          }
        }
      }
      if(n&&(!m)){//只选上面的checkbox
        for (var i = 0; i < sourceData.length; i++) {
          for (var j = 0; j < regionchecked.length; j++) {
            if(sourceData[i].region==regionchecked[j].value+''){
              arr.push(sourceData[i]);
            }
          }
        }
      }
      if((!n)&&m){//只选下面的checkbox
        for (var i = 0; i < sourceData.length; i++) {
          for (var k = 0; k < productchecked.length; k++) {
             if(sourceData[i].product==productchecked[k].value+''){
              arr.push(sourceData[i]);
             
          }
        }
      }
      }

       var listhead=[["商品","地区","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]];
        for (var i = 0; i < arr.length; i++) {//将数据转换成可输出的成表单的格式（sale数组分解）
          var newarr=[];
          for(var x in arr[i]){
            if(x!="sale"){

              newarr.push(arr[i][x]);
             
            }
            else{

              for (var j = 0; j < arr[i][x].length; j++) {
                newarr.push(arr[i][x][j]);
              }
            }

          }

          listhead.push(newarr);

        }
        
        if(n==1&&m>1){
              var t;
            for (var i = 0; i < listhead.length; i++) {

              t=listhead[i][1];
              listhead[i][1]=listhead[i][0];
              listhead[i][0]=t;

             } 
        }
        //console.log(listhead);    
        list=listhead;  
        rendernewform();    
        
return list;
     
       


       //{
        //判断是否在商品维度 或者 地区维度的选中范围内 {
           // 添加到返回数据list中
        //}
   // }
    //返回数据


}