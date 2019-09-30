var StudyCategorySelector = {
  init: function () {
    if ($("#sub-category-selector").length === 0 || $("#category-selector").length === 0) return;

    var sub_categories = $("#sub-category-selector").html();

    $(document).on("change", "#category-selector", function(e) {
      var category = $("option:selected", this).text();
      var escaped_category = category.replace(/([ #;&,.+*~\':"!^$[\]()=>|\/@])/g, '\\$1');
      var options = $(sub_categories).filter("optgroup[label=" + escaped_category + "]").prepend('<option value="">세부분야</option>').html();

      if (options) {
        $("#sub-category-selector").html(options).trigger("chosen:updated");
      } else {
        $("#sub-category-selector").html(sub_categories).trigger("chosen:updated");
      }
    });
  }
};

$(document).on("ready", StudyCategorySelector.init);
