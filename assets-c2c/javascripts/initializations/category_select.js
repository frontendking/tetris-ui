var CategorySelect = {
  init: function () {
    if ($(".sub-category-selector").length === 0 || $(".subject-selector").length === 0) return;

    var sub_categories = $(".sub-category-selector").html();
    var subjects = $(".subject-selector").html();

    $(document).on("change", ".category-selector", function(e) {
      var category = $("option:selected", this).text();
      var escaped_category = category.replace(/([ #;&,.+*~\':"!^$[\]()=>|\/@])/g, '\\$1');
      var options = $(sub_categories).filter("optgroup[label=" + escaped_category + "]").prepend('<option value="">세부분야</option>').html();

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
      var options = $(subjects).filter("optgroup[label=" + escaped_category + "]").prepend('<option value="">과목</option>').html();

      if (options) {
        // Dynamic row 에 대응하기 위해서는 .nested-fields 를 찾는 방식으로 가야 하고
        // 일반 form 에서는 subject-selector ID 를 찾아가는 방식으로 처리
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
