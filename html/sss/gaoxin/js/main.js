var a=0;
var $liPage;
var seTime;
var p8Num=1;
var p9Num=1;
var now = { row:1, col:1 }, last = { row:0, col:0};
const towards = { up:1, right:2, down:3, left:4};
var isAnimating = false;
window.onload=function(){
	$(".loading").hide();
	$(".p1_1 li:nth-child(1)").addClass("op1");
	$(".p1_1 li:nth-child(2)").addClass("sc2");
	$(".p1_1 li:nth-child(3)").addClass("sc2");
	$(".p1_1 li:nth-child(4)").addClass("sc2");
	
	$(".p1_2 li:nth-child(1)").addClass("op1");
	$(".p1_2 li:nth-child(2)").addClass("fadeInDown");
	$(".p1_2 li:nth-child(3)").addClass("op1");
	$(".p1_2 li:nth-child(4)").addClass("op1");
	$(".p1_2 li:nth-child(5)").addClass("op1");
	$(".p1_2 li:nth-child(6)").addClass("fadeInDown");
	$(".p1_2 li:nth-child(7)").addClass("op1");
	$("#music").click(function(){
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
	var _width=$(".p1_1").find("li:nth-child(1) img").width();
	$(".p1_1").css({"width":_width});
	var _width=$(".p1_2").find("li:nth-child(1) img").width();
	$(".p1_2").css({"width":_width});
	$(document).swipe( {
		swipe:function(e,direction) {
			switch (direction){
				case "up":
					if (isAnimating) return;
					last.row = now.row;
					last.col = now.col;
					if (last.row !=15) { 
						now.row = last.row+1; now.col = 1;
						pageMove(towards.up);	 
					}else{
						now.row=1;last,row=15;pageMove(towards.up);
					}
				break;
				case "down":
					if (isAnimating) return;
					last.row = now.row;
					last.col = now.col;
					if (last.row!=1) { now.row = last.row-1; now.col = 1; pageMove(towards.down);}
			}
		}
	});
	$(".p6_2").on("touchstart",function(){
		$(".pjob img").attr("src","images/job_1.png");
		$(".pjob").show();
		$(".p6_9").show();
	})
	$(".p6_3").on("touchstart",function(){
		$(".pjob img").attr("src","images/job_2.png");
		$(".pjob").show();
		$(".p6_9").show();
	})
	$(".p6_4").on("touchstart",function(){
		$(".pjob img").attr("src","images/job_3.png");
		$(".pjob").show();
		$(".p6_9").show();
	})
	$(".p6_5").on("touchstart",function(){
		$(".pjob img").attr("src","images/job_5.png");
		$(".pjob").show();
		$(".p6_9").show();
	})
	$(".p6_6").on("touchstart",function(){
		$(".pjob img").attr("src","images/job_4.png");
		$(".pjob").show();
		$(".p6_9").show();
	})
	$(".p6_7").on("touchstart",function(){
		$(".pjob img").attr("src","images/job_6.png");
		$(".pjob").show();
		$(".p6_9").show();
	})            
	$(".pjob").on("touchstart",function(){
		$(".pjob").toggle();
		$(".p6_9").hide();
	})
	$(".p8_next").on("touchstart",function(){
		last.row = now.row;
		last.col = now.col;
		if (last.row !=10) {now.row = last.row+1; now.col = 1;pageMove(towards.up);}
	})
	$(".p8_prev").on("touchstart",function(){
		last.row = now.row;
		last.col = now.col;
		if (last.row!=1) { now.row = last.row-1; now.col = 1; pageMove(towards.down);}
	})
	$(".y5_left").on("touchstart",function(){
		if($(".page-8-1").hasClass("page-current")){
			p8Num--;
			if(p8Num<=0){
				p8Num=2;
				$(".p5Fi div").removeClass("in");
				$(".p5Fi .pp"+p8Num).addClass("in");
			}else{
				$(".p5Fi div").removeClass("in");
				$(".p5Fi .pp"+p8Num).addClass("in");
			}
		}else{		
			p9Num--;
			if(p9Num<=0){
				p9Num=3;
				$(".p5Se div").removeClass("in");
				$(".p5Se .pp"+p9Num).addClass("in");
			}else{
				$(".p5Se div").removeClass("in");
				$(".p5Se .pp"+p9Num).addClass("in");
			}
		}
	})
	$(".y5_right").on("touchstart",function(){
		if($(".page-8-1").hasClass("page-current")){
			p8Num++;
			if(p8Num>=3){
				p8Num=1;
				$(".p5Fi div").removeClass("in");
				$(".p5Fi .pp"+p8Num).addClass("in");
			}else{
				$(".p5Fi div").removeClass("in");
				$(".p5Fi .pp"+p8Num).addClass("in");
			}
		}else{
			p9Num++;
			if(p9Num>=4){
				p9Num=1;
				$(".p5Se div").removeClass("in");
				$(".p5Se .pp"+p9Num).addClass("in");
			}else{
				$(".p5Se div").removeClass("in");
				$(".p5Se .pp"+p9Num).addClass("in");
			}
		}
	})            
};
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
		$(lastPage).find(">div:not(.footer),ul").addClass("hide");
		$(nowPage).addClass('page-current');
		$(lastPage).removeClass('page-current');
		$(nowPage).removeClass(inClass);
		$(nowPage).find(">div:not(.footer),ul").removeClass("hide");
		if(now.row==2){
			var _width=$(".p2_2").find("li:nth-child(1) img").width();
			$(".p2_2").css({"width":_width});
		}else if(now.row==3){
			var _width=$(".p2_3").find("li:nth-child(1) img").width();
			$(".p2_3").css({"width":_width});
		}
		else if(now.row==7){
			var _width=$(".p4_6").find("li:nth-child(1) img").width();
			$(".p4_6").css({"width":_width});
		}else if(now.row==10){
			var _width=$(".p5_7").find("li:nth-child(1) img").width();
			$(".p5_7").css({"width":_width});
		}else if(now.row==12){
			var _width=$(".p7_2").find("li:nth-child(1) img").width();
			$(".p7_2").css({"width":_width});
		}else if(now.row==13){
			var _width=$(".p13_2").find("li:nth-child(1) img").width();
			$(".p13_2").css({"width":_width});
		}
		else if(now.row==14){
			var _width=$(".p10_1").find("li:nth-child(1) img").width();
			$(".p10_1").css({"width":_width});
		}
		isAnimating = false;
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
