// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var KidsLounge = {
  init: function() {
    $(document).on("click", '[data-behavior="search-emp"]', function (e) {
      e.preventDefault();
      var target = $(this).data("target");
      var url = $(this).data("url");
      var recommend_id = $("#recommend_id").val();
      var recommend_type = document.querySelector('input[name="recommend_type"]:checked').value;
      $.getScript(url + "?recommend_type=" + recommend_type + "&recommend_id=" + recommend_id);
    });
  }
};

$(document).on("ready", KidsLounge.init);
