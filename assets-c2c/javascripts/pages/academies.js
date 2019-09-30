// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


// $(document).on("fm-close", "#academy-container", function (e) {
//   e.preventDefault();
//   $("#file-manager-container").toggleClass('hidden');
//   $(".file.selected .file-name > a").each(function (index) {
//     var filename = $(this).text();
//     $("#vod-container").append("<div>" + filename + "</div>");
//   });
// });

$(document).ready(function () {
  //#class slider(개설클래스영역 슬라이더)
  function classSlider() {
    $('#class .class-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerMode: false
    });
  }
  var classSliderIndex = $('#class .class-slider .class-list').length;
  if (classSliderIndex > 3) { //클래스가 3개 이상일 경우에만 슬라이더 실행
    classSlider();
  }

  //#teacher slider(소속선생님영역 슬라이더)
  function teacherSlider() {
    $('#teacher .teacher-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerMode: false,
      adaptiveHeight: true
    });
  }
  var teacherSliderIndex = $('#teacher .teacher-slider .teacher-list').length;
  if (teacherSliderIndex > 3) { //선생님이 3명 이상일 경우에만 슬라이더 실행
    teacherSlider();
  }
});
