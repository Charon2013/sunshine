$().ready(function() {
	var index;
	var len = $('.myJob').length;
		
	var str=""
	str="第1页/"+len+"页"
	$('.now').html(str);
	
	$('.myJob').eq(0).show();
	
    $('.next').click( function(){//下一页
		index = $('.myJob:visible').index();
		if(index<len-1){
			$('.myJob').hide();
			$('.myJob').eq(index+1).show();
			
			str="第"+(index+2)+"页/"+len+"页"
			$('.now').html(str);
		}else{
		}
	});
	
	$('.prev').click( function(){//上一页
		index = $('.myJob:visible').index();
		if(index>0){
			$('.myJob').hide();
			$('.myJob').eq(index-1).show();
			
			str="第"+(index)+"页/"+len+"页"
			$('.now').html(str);
		}else{
			
		}
	});
});