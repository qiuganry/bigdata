var a =186;

//上下浮动
var tid=setInterval(function(){
	let num = document.getElementById("peopleNum");
	let b = parseInt((Math.random()*10)/2);
	let c = parseInt((Math.random()*10)/2);
	a += (b-c);
	num.innerHTML=a;
	console.log("tid"+a);
},2000);

var tid1=setInterval(function(){
	let num = document.getElementById("peopleNum");
	let b = parseInt((Math.random()*10));
	
	a += b;
	console.log(a)
		console.log("tid1"+a)
	num.innerHTML=a;
	
},2000);

var tid2=setInterval(function(){
	let num = document.getElementById("peopleNum");
	let b = parseInt((Math.random()*10));
	
	a -= b;
	console.log(a)
		console.log("然后"+a)
	num.innerHTML=a;
	
},2000);

//总人次
var c=50;
//total.innerHTML=c;
var total2=setInterval(function(){
	let total = document.getElementById("total");
	let b = parseInt((Math.random()*10));
	c += b;
	total.innerHTML=c;
	console.log(c);
},15000);






//(function(a){
//alert(a); 
//}("123"))

var  date=new Date();
var hours=date.getHours();
console.log(hours);
setInterval(function(){
	if(hours == 9){	
		a=30;
		tid1;
		total2;
			setInterval(function(){
				if(a > 80){
							a=80;
							tid;
			
					}
				if(c > 100){
							c=101;
					
			
					}
			},2000)
			
	
}if( hours == 10){
		a=120;
		tid1;
		setInterval(function(){
			if(a > 180){
						a=210;
						tid;
		
				}if(c > 210){
							c=210;
						
			
					}
		},2000)

		
}if( hours == 11){

		a=350;
		tid1;
			setInterval(function(){
				if(a > 380){
							a=380;
							tid;
					}
				if(c > 500){
							c=510;
							
			
					}
			},2000)
}if( hours == 12){
		a=300;
		tid1;
			setInterval(function(){
				if(a >300){
							a=300;
							tid;
			
					}if(c > 800){
							c=805;
							
			
					}
			},2000)
}if( hours == 13 || hours == 14 ){
		a=230;
		tid2;
		setInterval(function(){
				if(a <160){
							a=180;
							tid;
			
					}if(c > 900){
							c=921;
						
			
					}
			},2000)
		
		
}if( hours == 15){
		a=230;
		tid1;
		setInterval(function(){
				if(a > 250){
							a=250;
							tid;
			
					}if(c > 1050){
							c=1065;
						
			
					}
			},2000)
}if( hours == 16){
		a=330;
		tid1;
		
		setInterval(function(){
				if(a > 350){
							a=350;
							tid;
			
				}
				if(c > 1200){
							c=1213;
							
							
			
					}
			},2000)

}if( hours == 17){
		a=401;
		tid1;
		setInterval(function(){
				if(a > 420){
							a=420;
							tid;
			
					}
				if(c > 1300){
							c=1317;
							
			
					}
			},2000)
}if( hours == 18){
		a=360;
		tid1;
		setInterval(function(){
				if(a > 370){
							a=370;
							tid;
			
					}
				if(c > 1500){
							c=1520;
						
					}
			},2000)
}if( hours == 19){
		a=300;
		tid2;
		setInterval(function(){
				if(a  <230){
							a=230;
							tid;
			
					}if(c > 1700){
							c=1710;
						
			
					}
			},2000)
}if( hours == 20){
		a=230;
		tid2;
		setInterval(function(){
				if(a > 180){
							a=180;
							tid;
			
					}if(c > 1900){
							c=1930;
						
			
					}
			},2000)
}if( hours == 21){
		a=70;
		tid2;
		setInterval(function(){
				if(a <30){
							a=20;
							tid;
			
					}if(c > 2000){
							c=2069;
	
			
					}
			},2000)
}


},5000)





