function Restaurant(obj){
	this.cash=obj.cash;
	this.seats=obj.seats;
	this.staff=obj.staff;
}

Restaurant.prototype={
	hire:function(obj){
		
		this.staff.push([obj.name,obj.pay]);
	},
	fire:function(obj){

		this.staff.shift([obj.name,obj.pay]);
	}
};

function Staff(name,pay,id){
	
	this.name = name;
	this.pay = pay;
	this.id = id;
}

Staff.prototype={
	work:function(){}
};

function Food(name,cost,price,time){
	this.name=name;
	this.cost=cost;
	this.price=price;
	this.time=time;
}