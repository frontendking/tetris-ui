// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var Gnbsearch = {
  init: function () {
    if ($(".search-area").length > 0) {
      $('.search-area').on({
        mouseleave: function (e) {
          $('.search-wrap').removeClass('active');
        },
        mouseenter: function (e) {
          $('.search-wrap').addClass('active');
        }
      });
      $('#top-search').on({
        focuse: function (e) {
          $('.search-wrap').addClass('active');
        }
      });
    }
  }
};

$(Gnbsearch.init);
