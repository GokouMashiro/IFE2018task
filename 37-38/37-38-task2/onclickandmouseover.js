
var Tbody=document.getElementById('tbodycont');
var doccont;var m;var btncancelcont;var turn;
document.onclick=function(){
	
	var e=event.target;
	var num=0;
		  var Tdlist=document.querySelectorAll('td');
		  for (var i = 0; i < Tdlist.length; i++) {
		  	if (Tdlist[i].childNodes[0].tagName=='INPUT') {
		  		num++;
		  	}
		  }

          if(num==1){
          	for (var j = 0; j < Tdlist.length; j++) {
          	if (Tdlist[j].childNodes[0].tagName=='INPUT') {
                m=j;
                doccont=Tdlist[j].childNodes[0].value;
                break; 
          	}
          }
            if (((e.tagName!='TD'&&
          		 e.tagName!='INPUT'&&
          		 e.tagName!='BUTTON'))||
          		((e.tagName=='INPUT')&&(e.className!='newsetinp')))
          		 {
          		//console.log(e);
          	    //console.log(Tdlist[i]);
                Tdlist[j].innerHTML=Tdlist[j].childNodes[0].value;
          	}
          }
          if(num==2){
          	
          	
          	for (var k = 0; k < Tdlist.length; k++) {
          	if (Tdlist[k].childNodes[0].tagName=='INPUT') {
                 if (m!=k) {
                 	Tdlist[m].innerHTML=doccont;
                 	m=k;
                 	doccont=Tdlist[k].childNodes[0].value;
                 	break;
                 }
                 
          	}
           }
          }
         
}

Tbody.onclick=function(){

	//console.log(2);
	var e = event.target;
    if (e.tagName=='TD') {
    	for (var i = 0; i < e.childNodes.length; i++) {
        if (e.childNodes[1]) {
    		if (e.childNodes[1].tagName=='SPAN') {
    			e.removeChild(e.childNodes[1]);
    		}
    	}
      }
    }


	if (e.tagName=='TD'&&(!isNaN(e.innerHTML))) {

    
    for (var j = 0; j < e.childNodes.length; j++) {
      	if(e.childNodes[j].tagName=='INPUT'){
      		var inputnum=1;
      		break;
      	} 
      }
         //console.log(inputnum);
         if ((!inputnum)) {

         var content=e.childNodes[0].data;
         btncancelcont=content;
         //console.log(content);
         e.innerHTML='';
         e.innerHTML="<input class='newsetinp' type='text' onblur='addinputjudge()' value="+content+"><input type='button' value='取消' onclick='cancel()'><input type='button' value='确认' onclick='confirm()' >";
         }
     }
}
function cancel(){
   var e=event.target;
   e.parentNode.innerHTML=btncancelcont;

}
function confirm(){
   var e=event.target;
   e.parentNode.innerHTML=e.parentNode.childNodes[0].value;
}








function addinputjudge(){
    if(isNaN(event.target.value)){
        console.log(event.target.value);
    
    }
}

///*
function addtdspan(fathernode,content){
   var newspan=document.createElement('span');
   newspan.setAttribute('style','font-size:8px;color:#D4D4D4;');
   newspan.innerHTML=content;
   fathernode.appendChild(newspan);
}
//*/


