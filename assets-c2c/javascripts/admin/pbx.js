var Pbx = {
  init: function() {
    $("#call-to-action").on('click', function(e) {
      $('#call-time').val(new Date());

      var target = $(this).data("target");
      if (target) {
        var phone = $(target).val();
        if (phone.length >= 10) {
          jsDial(phone);
        } else {
          alert("전화번호를 확인해 주세요.")
        }
      }

      $("#call-to-action").addClass("hidden");
      $("#hang-up-action").removeClass("hidden");
    });

    $("#hang-up-action").on('click', function(e) {
      $("#hang-up-action").addClass("hidden");
      $("#call-to-action").removeClass("hidden");
    });

    // 아래의 구문은 좋은 구문은 아닌것 같습니다.
    // sms 전송 폼이 사용자 정보가 있는 화면에서도 뜨고,
    // 그렇지 않은 화면에서도 떠야 하는데,
    // 사용자 정보가 없는 상태에서는 특정 ID 값을 가지고 있는 필드의 값을
    // 사용자 정보로 인식하여 항목에 삽입해야 합니다.
    // 더 좋은 방법이 있다면 수정하면 좋습니다.
    // by dante, 2019.03.12
    $("#send-sms-to-user").on('click', function(e) {
      $("#sms-result").addClass('hidden')
      if ($("#username").length > 0) {
        var username = $("#username").val();
        $("#name").val(username);

        if (username.length > 0) {
          $('#sms-guide').val($('#sms-guide').val().replace("OOO", username));
          $('#sms-paid').val($('#sms-paid').val().replace("OOO", username));
        }
      }

      if ($("#phone").length > 0) {
        var phone = $("#phone").val();
        $("#receiver").val(phone);
      }
    });
  }
}

$(document).on("ready", Pbx.init);
