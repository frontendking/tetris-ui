var Toggle = {
  init: function() {
    $(document).on("click", '[data-behavior="toggle"]', function(e) {
      e.preventDefault();
      var show = $(this).data("show");
      var hide = $(this).data("hide");

      $(show).removeClass("hidden");
      $(hide).addClass("hidden");
    });
  }
};

$(document).on("ready", Toggle.init);
