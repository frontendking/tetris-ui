// 태어난 날을 기준으로 학부모 전화번호 폼을 활성화 하는 함수
function changeUserBirthdayWithParentInformation(element_id) {
  if (!element_id) {
    return;
  }

  var id = element_id
  var value_element = id.replace('-', '_') + '_chosen'
  var chosen_year = $('#' + value_element + ' .chosen-single span').html() ? parseInt($('#' + value_element + ' .chosen-single span').html()) : $('#birthday-selector')[0].value
  var youth_year = new Date().getFullYear() - 19;
  if (chosen_year > youth_year) {
    $('#minority').show();
    $('#minority input:eq(0)').attr('required',true).prop('required',true);
  } else {
    $('#minority').hide();
    $('#minority input:eq(0)').attr('required',false).prop('required',false);;
  }

}
