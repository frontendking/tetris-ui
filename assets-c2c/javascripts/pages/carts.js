// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var Carts = {
  init: function () {
    $.receiveMessage(function (e) {
      if (e.data == 'TOP') {
        window.scrollTo(0, 0);
      } else {
        resizeIFrame(e.data);
      }
    });

    function resizeIFrame(height) {
      $('#payment_frame').height(height + 'px');
    }

    $("#js-checkout").click(function (e) {
      e.preventDefault();

      $("#checkout-modal").modal('hide');
      $("#cart-container").addClass('hidden');

      $("#bill-iframe").removeClass("hidden");

      $("#checkout-form").submit();
    });
  }
};

$(document).on("ready", Carts.init);
