// var ApplyAgree = {
//   init: function() {
//     $("#essential_agreement").on("change", function() {
//       $("#apply_agree_btn").attr('disabled', !$(this).is(":checked"))
//     });
//   }
// };

// $(document).on("ready", ApplyAgree.init);

$(document).on('ready', function () {
  $('#new_partner input.btn').on('click', function (e) {
    if ($('#partner_name').val() == '') {
      e.preventDefault();
      swal({
        title: '이름을 입력하세요.'
      }, function () {$('#partner_name').focus()})
    } else if ($('#partner_phone').val() == '') {
      e.preventDefault();
      swal({
        title: '연락처를 입력하세요.'
      }, function () {$('#partner_phone').focus()})
    } else if ($('#partner_email').val() == '') {
      e.preventDefault();
      swal({
        title: '이메일을 입력하세요.'
      }, function () {$('#partner_email').focus()})
    } else if ($('#partner_attachment').val() == '') {
      e.preventDefault();
      swal({
        title: '지원서를 첨부하세요.'
      }, function () {$('#partner_attachment').focus()})
    } else if (!$('#essential_agreement').prop('checked')) {
      e.preventDefault();
      swal({
        title: '개인정보 이용 수집에 동의하세요.'
      }, function () {$('#essential_agreement').focus()})
    }
  });
})
