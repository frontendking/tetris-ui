var CategorySelect = {
  init: function () {
    if ($(".admin.counsel_lcs.index").length === 0) return;

    var sub_categories = $(".sub-category-selector").html();
    var subjects = $(".subject-selector").html();

    $(document).on("change", ".category-selector", function(e) {
      var category = $("option:selected", this).text();
      var escaped_category = category.replace(/([ #;&,.+*~\':"!^$[\]()=>|\/@])/g, '\\$1');
      var options = $(sub_categories).filter("optgroup[label=" + escaped_category + "]").prepend('<option value="">상담결과</option>').html();

      if (options) {
        if ($("#sub-category-selector").length > 0) {
          $("#sub-category-selector").html(options).trigger("chosen:updated");
        } else {
          $(this).closest(".nested-fields").find(".sub-category-selector").html(options).trigger("chosen:updated");
        }
      } else {
        if ($("#sub-category-selector").length > 0) {
          $("#sub-category-selector").html(sub_categories).trigger("chosen:updated");
        } else {
          $(this).closest(".nested-fields").find(".sub-category-selector").html(sub_categories).trigger("chosen:updated");
        }
      }
    });

    $(document).on("change", ".sub-category-selector", function(e) {
      var sub = $("option:selected", this).text();
      var escaped_category = sub.replace(/([ #;&,.+*~\':"!^$[\]()=>|\/@])/g, '\\$1');
      var options = $(subjects).filter("optgroup[label=" + escaped_category + "]").prepend('<option value="">상세구분</option>').html();

      if (options) {
        if ($("#subject-selector").length > 0) {
          $("#subject-selector").html(options).trigger("chosen:updated");
        } else {
          $(this).closest(".nested-fields").find(".subject-selector").html(options).trigger("chosen:updated");
        }
      } else {
        if ($("#subject-selector").length > 0) {
          $("#subject-selector").html(subjects).trigger("chosen:updated");
        } else {
          $(this).closest(".nested-fields").find(".subject-selector").html(subjects).trigger("chosen:updated");
        }
      }
    });
  }
};

$(document).on("ready", CategorySelect.init);