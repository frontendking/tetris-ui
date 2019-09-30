var TargetSelect = {
  init: function () {
    if ($(".target-selector").length === 0) return;

    var targets = $(".target-selector").html();

    $(document).on("change", ".category-selector", function(e) {
      var category = $("option:selected", this).text();
      var escaped_category = category.replace(/([ #;&,.+*~\':"!^$[\]()=>|\/@])/g, '\\$1');
      var options = $(targets).filter("optgroup[label=" + escaped_category + "]").prepend('<option value="">대상</option>').html();


      if (options) {
        if ($("#target-selector").length > 0) {
          $("#target-selector").html(options).trigger("chosen:updated");
        } else {
          $(this).closest(".nested-fields").find(".target-selector").html(options).trigger("chosen:updated");
        }
      } else {
        if ($("#target-selector").length > 0) {
          $("#target-selector").html(targets).trigger("chosen:updated");
        } else {
          $(this).closest(".nested-fields").find(".target-selector").html(targets).trigger("chosen:updated");
        }
      }
    });
  }
};

$(document).on("ready", TargetSelect.init);
