var Editable = {
  init: function() {
    $('.editable .quick-editable').mouseenter(Editable.handlerIn).mouseleave(Editable.handlerOut);
    $('.editable [data-behavior="quit-edit"]').click(Editable.edit);
  },

  handlerIn: function() {
    $(this).find(".icon-quick-edit").removeClass("hidden");
  },

  handlerOut: function() {
    // $(".icon-quick-edit").addClass("hidden");
  },

  edit: function(e) {
    e.preventDefault();

  }
};

$(document).on("ready", Editable.init);
