window.onload=function(){
	$(".loading").hide();
	var height=$(window).height();
	var wh=$(".wrap").height();
	$(".banner").addClass("move");
	if(wh<height){
		$(".wrap").css("min-height",height);
		}
	
	function get_width(){
	$(".get_width").each(function(index, element) {
		var _width=$(this).find("li:nth-child(1) img").width();
		$(this).css({"width":_width});
	});
	}
	get_width();
	$(window).resize(function(){
		get_width();
	});
}

//js判断手机横竖屏判断
function orient() { 
	if (window.orientation == 90 || window.orientation == -90) { 
	
		$(".portrait").hide();
		$(".cover").show(); 
                   }
	else if (window.orientation == 0 || window.orientation == 180) { 
		$(".portrait").show();
		$(".cover").hide();
	}}
	var timer;
	$(window).bind("orientationchange", function(){
		clearTimeout(timer);
		timer = setTimeout(orient, 300);
	});
orient();
