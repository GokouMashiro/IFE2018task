var regionwrap=document.getElementById('region-radio-wrapper');
var productwarp=document.getElementById("product-radio-wrapper");
var list;var Tbody=document.getElementById('tbodycont');


makecheckbox(regionwrap, [{
    value: 1,
    text: "华东"
}, {
    value: 2,
    text: "华南"
}, {
  value: 3,
  text: "华北"
}]);

makecheckbox(productwarp, [{
    value: 1,
    text: "手机"
}, {
    value: 2,
    text: "笔记本"
},{
    value: 3,
    text: "智能音箱"
}]);
    if(localStorage.Data){
  
  //console.log(sourceData);
  getdata();
 


}