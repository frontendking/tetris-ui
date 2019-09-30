var ConectsTutorMove = {
  init: function () {
    $('#domain-submit').attr("disabled", "disabled");
  },
  checkDomainValid: function (domain, response_el_tag) {
    var validApiQuery = '/t/domain_check.json?domain=';
    if (!domain) {
      return;
    }
    $.ajax({
      url: validApiQuery + domain,
      type: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).done(function (data) {
      if (data.code == 200) {
        $(response_el_tag).addClass('text-success')
        $(response_el_tag).removeClass('text-danger')
        $(response_el_tag).html(data.message);
      } else {
        $(response_el_tag).addClass('text-danger')
        $(response_el_tag).removeClass('text-success')
        $(response_el_tag).html(data.message);
      }
      ConectsTutorMove.checkTermValid();
    });
  }, checkTermValid: function (e) {
    var agrees = [
      $('#agree_service').is(':checked'),
      $('#agree_private').is(':checked'),
      $('#agree_identity_info').is(':checked'),
      $('#agree_tutor_right').is(':checked')
    ];

    if (!!$('#hope_domain_input').val() && $('#hope_domain_input').val().length <= 0 || !$('#hope_domain_result_msg').hasClass('text-success')) {
      $('.domain-submit-button').prop("disabled", true);
      $('.domain-submit-button').attr("disabled", "disabled");
      $('#domain-submit').attr("disabled", "disabled");
      return
    }

    var okFlags = 0;
    for (var index = 0, length = agrees.length; index < length; index++) {
      if (agrees[index] === true) {
        okFlags += 1;
      }
    }

    if (okFlags >= agrees.length) {
      $('.domain-submit-button').prop("disabled", false);
      $('.domain-submit-button').removeAttr("disabled");
      $('#domain-submit').prop("disabled", false);
      $('#domain-submit').removeAttr("disabled");
    } else {
      $('.domain-submit-button').prop("disabled", true);
      $('.domain-submit-button').attr("disabled", "disabled");
      $('#domain-submit').prop("disabled", true);
      $('#domain-submit').attr("disabled", "disabled");
    }

  }
};

$(document).on("ready", ConectsTutorMove.init);
ConectsTutorMove.checkTermValid()
