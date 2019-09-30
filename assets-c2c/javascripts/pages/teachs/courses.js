// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var teachCourse = {
  get_provided_enrollment: function () {
    if ($("#give_class .enrollment-give-list").length > 0) {
      $.ajax({
        type: 'get',
        url: gon.js_env["provide_url"],
        dataType: 'html',
        success: function (data) {
          $(".enrollment-give-list").html(data);
        }
      });
    }
  },
  get_workspace: function () {
    if ($("#give_tutor .workspace-list").length > 0) {
      $.ajax({
        type: 'get',
        url: gon.js_env["workspace_url"],
        dataType: 'html',
        success: function (data) {
          $(".workspace-list").html(data);
        }
      });
    }
  }
};

var vodPlayer = {
  init: function () {
    if ($("#modal-vod-player").length > 0) {
      $(".vod_play_btn").click(function () {
        if ($(this).data("url") != "") {
          $("#modal-vod-player").modal('toggle');
          $("#modal-player-label").html($(this).data("title"));
          $("#movie_src").attr("src", $(this).data("url"));
          $("#got_video").load();
          $("#got_video")[0].play();
        } else {
          alert("동영상 주소가 존재하지 않습니다.");
        }
      });

      $("#modal-vod-player").on('hide.bs.modal', function () {
        $("#got_video")[0].pause();
      });
    }
  }
};

$(document).ready(function () {
  teachCourse.get_provided_enrollment();
  teachCourse.get_workspace();
  vodPlayer.init();
});
