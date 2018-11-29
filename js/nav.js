//获取时间
var date=new Date();
//console.log(date);
////获取日期与时间
//var cc=date.toLocaleDateString();   
//console.log(cc);//
//
//
////获取当前时间戳
////myDate.getTime();
//var time="date.getTime()";   
var time=date.getSeconds();   
console.log("当前秒数"+time);//
console.log(time.length);
////月份
//var month=date.getMonth(); 
//console.log("当前月份"+month);//
//
//	var time="1000";
//	console.log(time.length);
//	time.length <3 ? alert(1):alert(3);
function timestampToTime(timestamp) {
	

		
//		var time1='time.length' <3 ? alert(1):alert(3);
//			console.log(time1);
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() + ' ';
        var h =(date.getHours()< 10? "0"+(date.getHours()):date.getHours())+ ':';
        var m = (date.getMinutes()< 10? "0"+(date.getMinutes()):date.getMinutes())+ ':';
        var s = (date.getSeconds()< 10? "0"+(date.getSeconds()):date.getSeconds());
        return Y+M+D+h+m+s;
    }
//var cc=timestampToTime(1111111111);
//console.log(cc);


//显示时间
	var  tid=setInterval(function(){
	var date = new Date().getTime();
//	console.log(date)''
	var cc = timestampToTime(date);
//	console.log(cc);
	$('.time').text(cc);
},1000)

//upup();
//promise

/*文字向上加载效果*/
//function  upup(){
//	var num=0;
//	num += 10;
//	setInterval(
//		
//		console.log(num);
//		$('up li:nth-child(1)').css("margin-top",num+"px")
//		,1000)
//}

//setTimeout(function(){
//	
//},1000)