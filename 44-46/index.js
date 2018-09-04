//初始化
var foodmenu = [['Fish',10,1],['Tomato',20,2],['Egg',30,3],['Chicken',40,3],['Hamburger',50,7]];


var xiaoli=Waiter.getInstance('xiaoli');
var xiaohong=Coof.getInstance('xiaohong');
var cus=new Customer('xy');

cus.foodorder(foodmenu)
   .then(Waiter.getInstance().getcusmenu)
   .then(Coof.getInstance().cooking)
   .then(Waiter.getInstance().getcusmenu)
   
   ;