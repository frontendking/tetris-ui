// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function () {
  if ($('.fqa-list').length > 0) {
    var $hit = $('.fqa-list li .icon-question');
    $hit.on({
      click: function (e) {
        var $this = $(this).closest('li');
        $this.toggleClass('active');
        $this.siblings('li').removeClass('active');
      }
    });
  }
});