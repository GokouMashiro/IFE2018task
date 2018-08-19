var makerect={
    dorect:function(list){
    	list.shift(list[0]);
    	var rectstr=multirect(list);
    	bars.innerHTML+=rectstr;
    }
    
};
var color=["#27a1ea", "#9cdc82", "#ff9f69", "#d660a8", "#6370de", "#32d3eb", "#d4ec59", "#feb64d", "#b55cbd"];
function multirect(arr){
    var str='';
    var Rw=makeasvg.Rw;
    var rx=makeasvg.rectstart;
    var n=arr.length;
    for (var i = 0; i < arr.length; i++) {
    	var datamax=arr[i].max();

    	for (var j = 0; j < arr[i].length; i++) {
    		var height=(arr[i][j]/datamax)*makeasvg.yw;
    		str += "<rect rx="+rx+"ry="+(y轴max值-height)+
    		       "width="+Rw/n+"height="+height+"style:fill:"+color[i]+"></rect>";
             rx += (Rw+柱子间隔);      
    	}
    	rx = makeasvg.rectstart+(Rw/n)*(i+1);
    }
    return str;
}
Array.prototype.max=function(){
	return Math.max.apply({},this);
};
function singlerect(arr){
	var str='';
	var rx=makeasvg.rectstart;
	var n=arr.length;
	var Rw=makeasvg.Rw;
	var datamax=arr.max();
	var height=(arr/datamax)*makeasvg.yw;
    for (var j = 0; j < arr.length; j++) {
    	str+="<rect rx="+rx+"ry="+(y轴max值-height)+
    		       "width="+Rw+"height="+height+"style='fill:blue';"+"></rect>";
             rx += (Rw+柱子间隔); 
    }
}

