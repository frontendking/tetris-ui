// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function () {
  if ($('#elementary-main').length > 0) {
    $('.class-slider').slick({
      infinite: true,
      centerMode: false,
      slidesToScroll: 1,
      prevArrow: '.btn-prev',
      nextArrow: '.btn-next',
    });
  }

  if ($('#visual-slider').length > 0) {
    var slider_num = $('#visual-slider > div').length;
    var slider_initial = Math.floor(Math.random() * slider_num);
    $('#visual-slider').slick({
      autoplay: true,
      infinite: true,
      centerMode: false,
      initialSlide: slider_initial,
      slidesToScroll: 1,
      prevArrow: '.btn-prev',
      nextArrow: '.btn-next',
    });
  }
});
