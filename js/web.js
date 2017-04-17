$(function(){
    //logo更换颜色
    $('.charon_logo').hover(function() {
        $('.charon_logo img').attr('src', '../../images/LOGO_01.png');
    },function(){
        $('.charon_logo img').attr('src', '../../images/LOGO.png');
    })
    //内容区域的hover效果
    $('.charon_container li').hover(function(){
        $(this).children('span').css({background:"rgba(68,189,198,0.5)"})//.end().children('i').fadeIn(1000);
    },function(){
        $(this).children('span').css({background:"rgba(0,0,0,0.5)"})//.end().children('i').fadeOut(500);
    })
    $('.contact_me').hover(function(){
        $(this).css({background:"#44BDC6",color:"#000"})
    },function () {
        $(this).css({background:"#444",color:"#999"})
    })
    //introduce me
    $('.introduce_me,.charon_header_menu li:first a').click(function(){
        var w_heght = $(window).height();
        var w_width = $(window).width();
        var p_width = (w_width-300)/2;
        var p_heght = (w_heght-170)/2;
        $('.charon_password').css({top:p_heght,left:p_width});
        $('.charon_password').slideDown(500);
        $('.cover').show();
        document.onmousewheel = function ()
        {
            return false;
        };

    });
    $('.contact_me').on("click",function(){
        //alert("QQ:164667424   TEL:155 0687 989")
        var con=" <div class='zheng' style='width: 100%;height: 100%;background: url(http://ogkj87ka3.bkt.clouddn.com/bg_sale_over.png) repeat;position: fixed;top:0;left:0;display: none;z-index:9999;'> <div style='width: 400px;height:150px;position: absolute;background: #fff;border-radius: 5px;color: #76cc4b;'> <p style='text-align: center;margin-top: 1.5em;'>QQ:164667424   TEL:155 0687 989</p> <p style='margin-top: 2em;'> <a style='padding: .5em 1.5em;background: #76cc4b;color:#fff;border-radius: 5px;margin-left: 5em;' class='make_close' href='javascript:;'>关闭</a> </p> </div> </div> "
                $(".header ").append(con);
                var oh=$(window).height();
                var ow=$(window).width();
                $(".zheng>div").css({left:(ow-400)/2,top:(oh-150)/2});
                $(".zheng").fadeIn(500)/*.delay(1000).fadeOut();*/
    })
    $('.make_close').live("click",function(){
        $('.zheng').hide(500);
    })
    $('.charon_password span,.charon_password a.cancle').click(function(){
        $('.charon_password').slideUp(500);
        $('.cover').hide();
        document.onmousewheel = function ()
        {
            return true;
        };
    })
    //首页的音乐的开始播放和暂停的控制

    // music control

    $('.music_control a').click(function(){
        //var Oc = $('.music_control a img').attr("src");
        var Oa=$('.music_control a img')[0].src;
        var Ob = "http://www.sunshinepainter.top/images/music_control02.png"
        //var Ob=$('.music_control a img')[0].src='images/music_control02.png';
        if(Oa==Ob){
            start();
            $('.music_control a img').attr("src","http://www.sunshinepainter.top/images/music_control01.png");
        }else{
            stop();
            $('.music_control a img').attr("src","http://www.sunshinepainter.top/images/music_control02.png");
        }
    })
    // 小于480pxjs
    $('.list').click(function(){
        var w_heght = $(window).height();
        var w_width = $(window).width();
        var t_width = $('.charon_header_menu').width();
        var t_heght = $('.charon_header_menu').height();
        var p_width = (w_width-t_width)/2;
        var p_heght = (w_heght-t_heght)/2;
        $('.charon_header_menu,.cover').slideToggle();
        $('.charon_header_menu').css({top:p_heght,right:p_width});
        document.onmousewheel = function ()
        {
            return false;
        };
    })

    //menu 确认时候跳转
    $('.charon_header_menu li').click(function(){
        //$('.charon_header_menu,.cover').slideUp();
        document.onmousewheel = function ()
        {
            return true;
        };

    })

})



// function part
function corfirm(){
    var get_value = $('.charon_password input').val();
    var value = "charon2016";
    if(get_value==value){
        window.location.href="http://www.sunshinepainter.top/html/web/resume.html";
    }else{
        alert("密码错误，请重新输入")
    }
}
//music function
function start(){
    document.getElementById("my_music").play();
}
function stop(){
    document.getElementById('my_music').pause();
}

//hide function
function hide(a) {
    $(a).hide();
}
