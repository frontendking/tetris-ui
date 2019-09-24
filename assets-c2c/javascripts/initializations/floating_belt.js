var FloatingBelt = {
  init: function() {
    if ($('#floting-belt').length > 0) {
      $('.footer').addClass('belt-banner');
      $('.small-chat-box ').addClass('belt');
    }
  }
};

$(document).on("ready", FloatingBelt.init);
