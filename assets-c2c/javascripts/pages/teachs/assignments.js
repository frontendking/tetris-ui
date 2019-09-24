// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var Assignment = {
  init: function () {
    // 과제 중 자료 처리를 위한 코드
    // 자료는 한번에 여러개의 자료가 포함될 수 있음
    $(document).on("fm-close", "#assignment-material-container", function (e) {
      e.preventDefault();
      var files = $("#assignment_materials").val();

      $(".file.selected").each(function (n) {
        var origin = $(this).data("origin");
        var filename = $(this).data("filename");
        if (files !== "") {
          files += ",";
          files += origin;
        } else {
          files = origin;
        }
        $("#assignment-material-container").append("<div class=\"file-wrapper\">" + filename + "</div>");
      });

      $("#assignment_materials").val(files);
    });
  }
};

$(document).on("ready", Assignment.init);
