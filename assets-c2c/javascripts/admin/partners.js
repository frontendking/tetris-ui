var AdminPartner = {
  init: function() {
    $("#id_search, #domain_search").on("click", function(event) {
      event.preventDefault();

      var user_id = $("#user_id").val();
      var domain_id = $("#domain").val();
      var url = $(this).data("url");

      $.post(url, { user_id: user_id, domain_id: domain_id}, function(data) {
      });
    });
  }
}

$(document).on("ready", AdminPartner.init);

