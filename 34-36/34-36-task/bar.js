
var bars=document.querySelector('#bar-svg');
var body=document.getElementsByTagName('body')[0];
var xmlns="http://www.w3.org/2000/svg";


function makeatreeimg() {
	// body...
    var barswid=700;
    var barsheight=300;
    //绘制区域的高度，宽度
    bars.setAttribute('width',barswid);
    bars.setAttribute('height',barsheight);
    var barshtml=[];
    //将绘制区域x轴，y轴存贮在空数组中
    barshtml.push("<line x1='0' y1='30' x2='0' y2='290' style='stroke:black;stroke-width:1'; ></line>"
    +"<line x1='0' y1='290' x2='600' y2='290' style='stroke:black;stroke-width:1'; ></line>");
    bars.innerHTML=barshtml[0];
   
 }




