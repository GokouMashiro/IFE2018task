
function makeatreeimg(argument) {
	// body...
    var mysvg=document.createElementNS("http://www.w3.org/2000/svg","svg");
    
    mysvg.setAttribute('style','border:1px solid #000;width:600px;height:600px');
    mysvg.setAttribute('version','1.1');
    mysvg.setAttribute('xmlns','http://www.w3.org/2000/svg');
    var body=document.getElementsByTagName('body')[0];
    body.appendChild(mysvg);

    
    
    var defs = document.createElementNS("http://www.w3.org/2000/svg","defs");

    var marker= document.createElementNS("http://www.w3.org/2000/svg","marker");
    marker.setAttribute('id','markerArrow');
    marker.setAttribute('markerWidth',13);
    marker.setAttribute('markerHeight',13);
    marker.setAttribute('refx',2);
    marker.setAttribute('refy',6);
    marker.setAttribute('orient','auto');

    defs.appendChild(marker);
    var path=document.createElementNS("http://www.w3.org/2000/svg","path");
    path.setAttribute('d','M2,2 L2,11 L10,6 L2,2');
    path.setAttribute('style','fill:black;');
    marker.appendChild(path);
    mysvg.appendChild(defs);
    
    var linex=document.createElementNS("http://www.w3.org/2000/svg","line");
    var liney=document.createElementNS("http://www.w3.org/2000/svg","line");
    linex.setAttribute('x1','10');
    linex.setAttribute('y1','500');
    linex.setAttribute('x2','500');
    linex.setAttribute('y2','500');
    linex.setAttribute('style','stroke:black;stroke-width:1;');
    linex.setAttribute('marker-end','url(#markerArrow)');
    liney.setAttribute('x1','10');
    liney.setAttribute('y1','500');
    liney.setAttribute('x2','10');
    liney.setAttribute('y2','10');
    liney.setAttribute('style','stroke:black;stroke-width:1;');
    liney.setAttribute('marker-end','url(#markerArrow)');
    mysvg.appendChild(linex);
    mysvg.appendChild(liney);
    console.log(mysvg);
    //定义每一个珠柱子的宽度及柱子的间隔，颜色
    var eachrect=document.createElementNS("http://www.w3.org/2000/svg","rect");
    eachrect.setAttribute('width','10');
    
    eachrect.setAttribute('style','fill:green;stroke:black;stroke-width:1px;');
    //拿到柱状图中的最大值Max
    //根据Max和你用来绘制柱状图图像区域的高度，进行一个数据和像素的折算比例
    var arr;
    for (var i = 0; i < sourceData.length; i++) {
        if((sourceData[i].product=='手机')&&(sourceData[i].region=='华东')){
               arr=sourceData[i].sale;
               break;
    }
    }
    var arrmax=arr[0];
    for (var i = 0; i < arr.length-1; i++) {
        if (arr[i]>arrmax) {
            arrmax=arr[i];
        }
    }

    var spacewid=20;
    for (var i = 0; i < arr.length; i++) {
        var newrect=document.createElementNS("http://www.w3.org/2000/svg","rect");
        newrect.setAttribute('width','20');
        newrect.setAttribute('style','fill:green;stroke:black;stroke-width:1px;');
        var rectheight=parseFloat(arr[i]);
        if(i!=0){
           spacewid=parseFloat(spacewid+35);
        }
        
        newrect.setAttribute('x',spacewid);
        newrect.setAttribute('y',500-rectheight);
        newrect.setAttribute('height',rectheight);
        mysvg.appendChild(newrect);

        var newtext=document.createElementNS("http://www.w3.org/2000/svg","text");
        newtext.setAttribute('x',spacewid-3);
        newtext.setAttribute('y',520);
        newtext.setAttribute('style','fill:black;');
        newtext.innerHTML=""+(i+1)+"月";
        mysvg.appendChild(newtext);
        console.log(newrect);
    }



   

 }




