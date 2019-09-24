// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var OrderModal = {
  init: function() {
    if ($('#order-modal').length > 0) {
      $(document).on('click', '#order-modal .btn-view', function (e) {
        e.preventDefault();
        $(this).parent().siblings('.agree-detail').toggleClass('active');
      });
    }
  }
};

$(document).on("ready", OrderModal.init);
