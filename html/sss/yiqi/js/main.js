var a=0;
var $liPage;
var now = { row:1, col:1 }, last = { row:0, col:0};
const towards = { up:1, right:2, down:3, left:4};
var isAnimating = false,isPage4=false,noSwipe=false;
$(document).ready(function(e) {
	$(".loading").hide();
	$("#music").on("touchstart",function(){
				if($(this).attr("class")=="play"){
					$(this).removeClass().addClass("pause");
					$("#myMusic")[0].play();
					$(".audio").addClass("Rot");
				}else if($(this).attr("class")=="pause"){
					$(this).removeClass().addClass("play");
					$("#myMusic")[0].pause();
					$(".audio").removeClass("Rot");
				}
			})
	//三页切换
	$(document).swipe( {
		swipe:function(e,direction) {
			
			switch (direction){
				case "up":{
					if(noSwipe){
						return false;
					}
					if (isAnimating) return;
					last.row = now.row;
					last.col = now.col;
					if (last.row !=7) { now.row = last.row+1; now.col = 1; pageMove(towards.up);}
					inityd();
					
				break;}
				case "down":{
					if(noSwipe){
						return false;
					}
					if (isAnimating) return;
					last.row = now.row;
					last.col = now.col;
					if (last.row!=1) { now.row = last.row-1; now.col = 1; pageMove(towards.down);}
					inityd();
					
					break;}
			}
		}
	});
	$(".su").on("touchstart",function(){
		$(this).hide();
	})
	yd();      
});

//页面跳转
function pageMove(tw){
var lastPage = ".page-"+last.row+"-"+last.col,
	nowPage = ".page-"+now.row+"-"+now.col;
	switch(tw) {
		case towards.up:
			outClass = 'pt-page-moveToTop';
			inClass = 'pt-page-moveFromBottom';
			break;
		case towards.right:
			outClass = 'pt-page-moveToRight';
			inClass = 'pt-page-moveFromLeft';
			break;
		case towards.down:
			outClass = 'pt-page-moveToBottom';
			inClass = 'pt-page-moveFromTop';
			break;
		case towards.left:
			outClass = 'pt-page-moveToLeft';
			inClass = 'pt-page-moveFromRight';
			break;
	}
	isAnimating = true;
	$(nowPage).removeClass("hide");
	$(lastPage).addClass(outClass);
	$(nowPage).addClass(inClass);
	setTimeout(function(){
		$(lastPage).removeClass(outClass);
		$(lastPage).addClass("hide");
		$(lastPage).find("div:not(.footer)").addClass("hide");
		$(nowPage).addClass('page-current');
		$(lastPage).removeClass('page-current');
		$(nowPage).removeClass(inClass);
		$(nowPage).find("div:not(.footer)").removeClass("hide");
		isAnimating = false;
		setSupperHt();
		yaoyao();
		if(now.row==2){
			setTimeout(function(){
				$(".page-2-1 .you").removeClass("you").addClass("sc1");
				$(".page-2-1 .dian").removeClass("dian").addClass("sc2");
			},2000)
		}else if(now.row==3){
			setTimeout(function(){
				$(".page-3-1 .you").removeClass("you").addClass("sc1");
				$(".page-3-1 .dian").removeClass("dian").addClass("sc2");
			},2000)
		}
		else{
			$(".page-2-1 .sc1").removeClass("sc1").addClass("you");
			$(".page-2-1 .sc2").removeClass("sc2").addClass("dian");
			$(".page-3-1 .sc1").removeClass("sc1").addClass("you");
			$(".page-3-1 .sc2").removeClass("sc2").addClass("dian");
		}	
	},300);
}

//js判断手机横竖屏判断
function orient() { 
	if (window.orientation == 90 || window.orientation == -90) { 
		$(".portrait").hide();
		$(".cover").show(); 
		$(".fe").hide();
    }
	else if (window.orientation == 0 || window.orientation == 180) { 
		$(".portrait").show();
		$(".cover").hide();
		$(".fe").show();
	}
}
	var timer;
	$(window).bind("orientationchange", function(){
		clearTimeout(timer);
		timer = setTimeout(orient, 300);
	});
orient();
/****/
function yd(){
	$(".page-2-1 .dian").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
			//alert("1");
			yd_fn();
			
		},
		swipeRight: function (event, direction, distance, duration, fingerCount) {
			//alert("2");
			yd_fn();
		}
	});
	$(".page-3-1 .dian").click(function(){
		yd_fn();
	});
}
function yd_fn(){
	$("body").addClass("yd-car");
	$(".page-current .sc1").removeClass("sc1").addClass("you");
	$(".page-current .sc2").removeClass("sc2").addClass("dian");
	/*var t=setTimeout(function(){
		$("body").removeClass("yd-car");
		clearInterval(t);
	},1200);*/
}
function inityd(){
	var bcs=$("body").attr("class");
	bcs=bcs==undefined?"":bcs;
	if(bcs.indexOf("yd-car")>-1){
		$("body").removeClass("yd-car");
	}
	
}
function setSupperHt(){
	if($(".page-4-1").is(".page-current")){
		$(".canvas").height($(".pic4_1").height());
		$(document).swipe("disable");
		cvs();
	}
}
function cvs(){
		var cvs=document.getElementById("cvs");
		var w=$(window).width(),h=$(window).height();
		cvs.width=w;
		cvs.height=h;

		var jiange = 30;
		
		var ctx=cvs.getContext('2d'),img=new Image();
		img.onload=function(){
			ctx.drawImage(img,0,0,w,h);
		}
		img.src="images/pic4_2w.png";
		
		cvs.style.display="block";
		
		var hastouch = "ontouchstart" in window?true:false,
			tapstart = hastouch?"touchstart":"mousedown",
			tapmove = hastouch?"touchmove":"mousemove",
			tapend = hastouch?"touchend":"mouseup",
			x1,y1,x2,y2,border=50;
		var hastouch = "ontouchstart" in window?true:false,
			tapstart = hastouch?"touchstart":"mousedown",
			tapmove = hastouch?"touchmove":"mousemove",
			tapend = hastouch?"touchend":"mouseup",
			x1,y1,x2,y2,border=50;
		cvs.addEventListener(tapstart , function(e){
			e.preventDefault();
			  
			x1 = hastouch?e.targetTouches[0].pageX:e.clientX-ctx.offsetLeft;
			y1 = hastouch?e.targetTouches[0].pageY:e.clientY-ctx.offsetTop;
			
			ctx.lineCap = "round";　　//设置线条两端为圆弧
        	ctx.lineJoin = "round";　　//设置线条转折为圆弧
			ctx.lineWidth=border;
			ctx.globalCompositeOperation = "destination-out";
			
			//ctx.save();
			ctx.beginPath()
			ctx.arc(x1,y1,border/2,0,2*Math.PI);
			ctx.fill();
        	//ctx.restore();
			
		});
		cvs.addEventListener(tapmove , function(e){
			e.preventDefault();
			  
			x2 = hastouch?e.targetTouches[0].pageX:e.clientX-ctx.offsetLeft;
			y2 = hastouch?e.targetTouches[0].pageY:e.clientY-ctx.offsetTop;
			
			//ctx.save();
			ctx.beginPath()
            ctx.moveTo(x1,y1);
            ctx.lineTo(x2,y2);
			
			ctx.stroke();
        	//ctx.restore();
			x1=x2;
			y1=y2;
			
		});
		cvs.addEventListener(tapend, function(e){
			e.preventDefault();
			var imgData=ctx.getImageData(0,0,w,h);
			var dd = 0;
			for(var x=0;x<imgData.width;x+=jiange){
				for(var y=0;y<imgData.height;y+=jiange){
					var i = (y*imgData.width + x)*4;
					if(imgData.data[i+3] >0){
						dd++
					}
				}
			}
			if(dd/(imgData.width*imgData.height/(jiange*jiange))<3){
				cvs.style.display="none";
			}
			/*cvs.style.display="none";*/
			$("body").addClass("yd-car");
			$(document).swipe("enable");
		});
}
//摇一摇
function yaoyao(){
	if($(".page-5-1").is(".page-current")){
		isPage4=true;
		noSwipe=true;
	}else{
		isPage4=false;
	}
}
function init(){
			//判断移动浏览器是否支持运动传感器事件
			if(window.DeviceMotionEvent){
				//添加一个事件监听器
				window.addEventListener('devicemotion',deviceMotionHandler,false);
			}else{
				alert('not support mobile event');
			}
		}
function removeDev(){
	window.removeEventListener('devicemotion',deviceMotionHandler,false);
}
			var SHAKE_THRESHOLD=300;//定义一个摇动的阈值
			var last_update=0;//定义一个变量记录上一次摇动的时间
			var x=y=z=last_x=last_y=last_z=0;//定义x、y、z记录三个轴的数据以及上一次触发的时间
			
			
		//运动传感器处理
		function deviceMotionHandler(eventData){
			if(!isPage4){
				return false;
			}
			//$(document).swipe("disable");
			
			//获取含重力加速
			var acceleration = eventData.accelerationIncludingGravity;
			var curTime = new Date().getTime();
			if ((curTime - last_update) > 100) {
				var diffTime = curTime - last_update;
				last_update = curTime;
				x = acceleration.x;
				y = acceleration.y;
				z = acceleration.z;
				var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
				//document.getElementById("test").innerHTML="speed="+speed+"x="+x+",y="+y+",z="+z+",lx="+last_x+",ly="+last_y+",lz="+last_z;
				if(speed>SHAKE_THRESHOLD){
					//alert("摇动1");
					
					$("body").addClass("yd-car");
					$(".su").hide();
					noSwipe=false;
					//removeDev();
					//$(document).swipe("enable");
					//alert("摇动");
				}
				//alert(speed);
				//记录上一次加速度
				last_x=x;
				last_y=y;
				last_z=z;
			}
			
	    }