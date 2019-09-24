// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var TeacherProfile = {
  init: function () {
    if ($(".teachers.domain, .academies.domain").length > 0) {
      // scroll nav-fixed(네비게이션 fixed)
      $(window).scroll(function () {
        var scrTop = $(this).scrollTop();
        var cntTop = $('.profile-info').offset().top;
        var navHeight = $('.profile-nav').height();
        if (scrTop >= cntTop - navHeight) {
          $('.profile-nav').addClass('navbar-fixed-top'); //고정 클래스 추가
          $('.profile-info').css('margin-top', navHeight + 'px'); //nav fixed되면서 컨텐츠 올라가는 현상 없애기
          $('.profile-nav .btn-send-message').removeClass('hidden'); //nav 메시지 보내기 버튼 숨기기
          $('.profile-info .btn-send-message').addClass('hidden'); //profile-info 메시지 보내기 버튼 숨기기

          //nav 해당영역에서 active 걸어주기
          $('.profile-nav a.page-scroll').each(function () {
            var currentLink = $(this);
            var linkHref = $(currentLink.attr("href"));
            var offset = linkHref.offset();
            if (offset && offset.top <= scrTop && offset.top + linkHref.height() > scrTop) {
              $('.profile-nav ul li a').removeClass("active");
              currentLink.addClass("active");
            } else {
              currentLink.removeClass("active");
            }
          });
        } else {
          $('.profile-nav').removeClass('navbar-fixed-top');
          $('.profile-info').css('margin-top', '0');
          $('.profile-nav .btn-send-message').addClass('hidden');
          $('.profile-info .btn-send-message').removeClass('hidden');
        }
      });

      //video slider(영상영역 슬라이더)
      function videoSlider() {
        $('.video-slider').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: false
        });
      }
      var videoSliderIndex = $('.video-slider .video-list').length;
      if (videoSliderIndex > 3) { //비디오가 3개 이상일 경우에만 슬라이더 실행
        videoSlider();
      }
    }
  }
};

$(document).on("ready", TeacherProfile.init);
