$(function(){
  // var jQuery = $;
  $('#hgroup .st_personal-service .depth-02, #hgroup .st_conects-nav .myarea').bind({
    mouseenter : function() {
      $(this).addClass('active');
    },
    mouseleave: function() {
      $(this).removeClass('active');
    }
  }); // st_conects-gnb.js 내 jQuery 선언으로 찾는 부분 적용이 안되는 것으로 판단되어 수정
});

$(window).load(function(){
  if($('.left-floting').length){bannerChk($('.left-floting'));}
  if($('.right-floting').length){bannerChk($('.right-floting'));}
});
$(window).on("scroll",function(){
  var scTop=$(this).scrollTop();

  if( scTop >130){
    $("#quick-event").stop().animate({top:scTop+50+"px"},500);
  }else{
    $("#quick-event").attr('style','')
  }
});

function dayTimer (limit){
  var timer = {
    d : "",
    h : "",
    m : "",
    s : ""
  }
  var dday = new Date(limit).getTime();
  var nowday = new Date().getTime();
  var gap = dday - nowday;
  var d = Math.floor(gap / (1000 * 60 * 60 * 24));
  var h= Math.floor((gap / (1000 * 60 * 60)) % 24);
  var m = Math.floor((gap / (1000 * 60) % 60));
  var s = Math.floor(gap / 1000 % 60);
  (d < 1)? timer.d = "00" : timer.d = String(d).padStart(2, '0');
  (h < 1)? timer.h = "00" : timer.h = String(h).padStart(2, '0');
  (m < 1)? timer.m = "00" : timer.m = String(m).padStart(2, '0');
  (s < 1)? timer.s = "00" : timer.s = String(s).padStart(2, '0');
  $('#day-timer .timer').html(`<span>${timer.d[0]}</span><span>${timer.d[1]}</span>일 <span>${timer.h[0]}</span><span>${timer.h[1]}</span>:<span>${timer.m[0]}</span><span>${timer.m[1]}</span>:<span>${timer.s[0]}</span><span>${timer.s[1]}</span>`);
}

function bannerChk ($obj){
  var _W = "-" + ($obj.find("img").width() + 10) + "px";
  var _H = "-" + ($obj.find("img").height()/2) + "px";
  ($obj.hasClass("left-floting"))?
  $obj.css({"left":_W , "margin-top": _H})
  : $obj.css({"right":_W , "margin-top": _H}) ;
}

