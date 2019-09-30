var Relay = {
  init: function () {
    $(document).on("keyup", '[data-behavior="input-relay"]', function () {
      var text = $(this).val();
      var target = $(this).data('target');
      $(target).text(text);
    });

    $(document).on("click", '[data-behavior="cover-relay"]', function (e) {
      e.preventDefault();
      var active = $(this).closest('li'),
        target = $(this).data("target"),
        cover = $(this).data("cover"),
        hidden = $(this).data("hidden");
      $(target).find('.card-head').removeClass().addClass('card-head ' + cover);
      active.siblings().removeClass('active');
      active.addClass('active');
      $(hidden).val(cover);
    });
  }
};

$(document).on("ready", Relay.init);
