function makeazhexiantu(argument) {
	// body...
	var newcanvas=document.createElement('canvas');
	newcanvas.setAttribute('style','width:600px;height:600px;border:1px solid red;');
	
	var body=document.getElementsByTagName('body')[0];
	body.appendChild(newcanvas);
	console.log(body);

    var cty=newcanvas.getContext('2d');
	cty.beginPath();
	cty.lineWidth='0.33';
	cty.strokeStyle='black';
	cty.moveTo(5,0.5);
	cty.lineTo(5,500.5);
	cty.stroke();
    var ctx=newcanvas.getContext("2d");
	ctx.beginPath();
	ctx.lineWidth='0.33';
	ctx.strokeStyle='black';
	ctx.moveTo(5,500.5);
	ctx.lineTo(400.5,500.5);
	ctx.stroke();
    





}   