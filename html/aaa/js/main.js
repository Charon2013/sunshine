var a=0;
var $liPage;
var now = { row:1, col:1 }, last = { row:0, col:0};
const towards = { up:1, right:2, down:3, left:4};
var isAnimating = false;
$(document).ready(function(e) {
	$(".loading").hide();
	//三页切换
	$(document).swipe( {
		swipe:function(e,direction) {
			switch (direction){
				case "up":
					if (isAnimating) return;
					last.row = now.row;
					last.col = now.col;
					if (last.row !=4) { now.row = last.row+1; now.col = 1; pageMove(towards.up);}
				break;
				case "down":
					if (isAnimating) return;
					last.row = now.row;
					last.col = now.col;
					if (last.row!=1) { now.row = last.row-1; now.col = 1; pageMove(towards.down);}
			}
		}
	});    
	/*$(".return").on("touchstart",function(){
		last.row = now.row;
		last.col = now.col;
		if (last.row !=1) { now.row = last.row-1; now.col = 1; pageMove(towards.down);}
	});*/    
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
