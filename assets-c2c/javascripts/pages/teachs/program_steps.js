// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var ProgramStep = {
  init: function() {
    $(document).on("change", "#step_study_method_id", function(e) {
      var selected = $("option:selected", this);
      var value = selected.data("code");
      $(".optional").addClass('hidden');
      $("#" + value).removeClass('hidden');
    });

    // 프로그램 목차 중 video 처리를 위한 코드
    // 비디오는 한번에 하나만 처리 가능함
    $(document).on("fm-close", "#vod-container", function (e) {
      e.preventDefault();
      var video = $("#course_video").val();

      $(".file.selected").each(function (n) {
        video = $(this).data("origin");
        if ($(this).data('type') === 'video') {
          $("#vod-container").html("<div class='embed-responsive embed-responsive-16by9'>" +
            "<video width=\"320\" height=\"240\" controls>" +
            "<source src=\"" + video + "\" type=\"video/mp4\">" +
            "</video></div>");
        }
      });

      $("#step_video").val(video);
    });

    // 프로그램 목차 중 자료 처리를 위한 코드
    // 자료는 한번에 여러개의 자료가 포함될 수 있음
    $(document).on("fm-close", "#material-container", function (e) {
      e.preventDefault();
      var files = $("#step_materials").val();

      $(".file.selected").each(function (n) {
        var origin = $(this).data("origin");
        var filename = $(this).data("filename");
        if (files !== "") {
          files += ",";
          files += origin;
        } else {
          files = origin;
        }
        $("#material-container").append("<div class=\"file-wrapper\">" + filename + "</div>");
      });

      $("#step_materials").val(files);
    });

    // 프로그램 갤러리 처리를 위한 코드
    // 파일 매니저에서 선택된 파일들을 , 구분자로 하여 저장한다.
    $(document).on("fm-close", "#galleries-container", function (e) {
      e.preventDefault();
      var files = $("#course_galleries").val();

      $(".file.selected").each(function (n) {
        var origin = $(this).data("origin");
        if (files !== "") {
          files += ",";
          files += origin;
        } else {
          files = origin;
        }
        $("#galleries-container").append("<div class='image-wrapper' style='display: inline-block;'>" +
          "<img src=\"" + origin + "\" class=\"img-responsive\" width=\"300\"></img>" +
          "</div>")
      });

      $("#course_galleries").val(files);
    });


  }
};

$(document).on("ready", ProgramStep.init);
