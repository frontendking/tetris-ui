// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var UserProfile = {
  init: function() {
    $("select#user_address_city").on("change", function() {
      $.ajax({
        url: '/address/city/'+$('#user_address_city').val(),
        type: "GET"
      });
    });

    $("select#user_address_country").on("change", function() {
      $.ajax({
        url: '/address/country/'+$('#user_address_country').val(),
        type: "GET"
      });
    });
  }
};

$(document).on("ready", UserProfile.init);
