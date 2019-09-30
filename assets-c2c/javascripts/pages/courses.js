// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var Course = {
  init: function () {
    if ($(".class-detail-nav").length > 0) {
      // scroll nav-fixed(네비게이션 fixed)
      var gnbH = $('.gnb-wrap').height(),
        coverH = $('.class-cover').height() + parseInt($('.course-info').css('margin-top')), //gnb와 상단여백 값 구하기
        academyBtnH = $('.btn-belong-academy').height(), //학원버튼유무에 따라 컨텐츠의 높이가 달라짐
        docH = $(document).height(),
        contH = $('.course-info > .container > .row').height(),
        nav = $('.class-detail-nav'),
        navH = nav.height(),
        rightmn = $('.class-detail'),
        rightmnTop = rightmn.offset().top,
        linkInfo = [];

      //nav 각 영역값 구하기
      $('.class-detail-nav a.page-scroll').each(function () {
        var linkHref = $($(this).attr("href")),
          linkOffset = linkHref.offset().top;
        linkInfo.push({
          'link': $(this),
          'linkH': linkHref.height(),
          'linkOff': linkOffset
        });
      });

      $(window).scroll(function () {
        var scrTop = $(this).scrollTop(),
          rightmnFixH = $('.class-detail.fixed').outerHeight(),
          navPoint = gnbH + coverH + academyBtnH + $('#page-top').height(); //#page-top이후부터 오른쪽 상세내용이 보여져야 함

        // nav 나타내기
        if (scrTop >= navPoint) {
          var navH = nav.height(),
            banStopValue = contH - rightmnFixH, //배너고정위치
            banStopScroll = (banStopValue + gnbH + coverH) - navH; //배너고정 스크롤기준

          nav.removeClass('hidden');
          rightmn.addClass('fixed');

          //nav 해당영역에서 active 걸어주기
          $.each(linkInfo, function (idx) {
            if (linkInfo[idx]['linkOff'] <= scrTop && linkInfo[idx]['linkOff'] + linkInfo[idx]['linkH'] > scrTop) {
              $('.class-detail-nav ul li a').removeClass("active");
              linkInfo[idx]['link'].addClass("active");
            } else {
              linkInfo[idx]['link'].removeClass("active");
            }
          });

          //오른쪽배너 footer에 닿았을 때 고정
          if (scrTop >= banStopScroll) {
            rightmn.addClass('footerfix');
            rightmn.css('top', banStopValue);
          } else {
            navH = nav.height();
            rightmn.removeClass('footerfix');
            rightmn.css('top', navH);
          }

        } else {
          nav.addClass('hidden');
          rightmn.removeClass('fixed footerfix');
          rightmn.css('top', 0);
        }
      });

      var videoSliderIndex = $('.side-video .video-one-slider .video-list').length;
      if (videoSliderIndex > 1) { //이미지가 1개 이상일 경우에만 슬라이더 실행
        Course.oneSlider();
      }

      var videoIndex = $('.video-slider .video-list').length;
      if (videoIndex > 3) { //비디오가 3개 이상일 경우에만 슬라이더 실행
        Course.videoSlider();
      }

      Course.gallerySlider();
      if ($('#pop-gallery-slider').hasClass == 'in') {
        Course.gallerySlider();
      }

      //목차
      $('.toc-list li').click(function (e) {
        var $this = $(this);
        $this.toggleClass('active');
        $this.siblings('li').removeClass('active');
        e.preventDefault();
      });
    }
  },

  oneSlider: function () {
    $('.side-video .video-one-slider').slick({
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false
    });
  },

  videoSlider: function () {
    $('.video-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerMode: false
    });
  },

  gallerySlider: function () {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: false,
      focusOnSelect: true
    });
  }
};

//더보기버튼 공통 스트립트
// $(document).ready(function () {
//   //a.btn-more-view(더보기버튼 - 일정 height이상에서 생기기)
//   $('.fold-area').each(function (index) {
//     var $this = $(this);
//     var $thisBtn = $this.siblings('a.btn-more-view');
//     var viewHeight = 345;
//     if ($this.height() < viewHeight) {
//       $thisBtn.css('display', 'none');
//     }
//   });
//   //a.btn-more-view(더보기버튼 - 클릭시 글씨 바뀌기)
//   $('a.btn-more-view').click(function (e) {
//     var $this = $(this);
//     var $thisFold = $this.siblings('.fold-area');
//     $thisFold.toggleClass('active');
//     if ($thisFold.hasClass('active')) {
//       $this.html('닫기');
//     } else {
//       $this.html('더보기');
//     }
//     e.preventDefault();
//   });
// });

$(document).on("ready", Course.init);
