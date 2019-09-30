var CounselLc = {
  init: function() {
     $(document).ready(function() {
      var counsel_options = {
        complete: [
          { name: 'user[counsel_detail_type]', value: 'complete_done', text: '&nbsp;&nbsp;통화완료&nbsp;&nbsp;', checked: true},
          { name: 'user[counsel_detail_type]', value: 'complete_experience', text: "&nbsp;&nbsp;체험신청&nbsp;&nbsp;", checked: false},
          { name: 'user[counsel_detail_type]', value: 'complete_rejection', text: "&nbsp;&nbsp;체험거절&nbsp;&nbsp;", checked: false},
        ],
        recall: [
          { name: 'user[counsel_detail_type]', value: 'recall_request', text: "&nbsp;&nbsp;재통화요청&nbsp;&nbsp;", checked: true},
          { name: 'user[counsel_detail_type]', value: 'recall_absence', text: "&nbsp;&nbsp;재통화부재&nbsp;&nbsp;", checked: false},
          { name: 'user[counsel_detail_type]', value: 'recall_reservation', text: "&nbsp;&nbsp;재통화예약&nbsp;&nbsp;", checked: false},
        ],
        absence: [
          { name: 'user[counsel_detail_type]', value: 'absence_first', text: "&nbsp;&nbsp;1차부재&nbsp;&nbsp;", checked: true},
          { name: 'user[counsel_detail_type]', value: 'absence_second', text: "&nbsp;&nbsp;2차부재&nbsp;&nbsp;", checked: false},
          { name: 'user[counsel_detail_type]', value: 'absence_third', text: "&nbsp;&nbsp;3차부재&nbsp;&nbsp;", checked: false},
          { name: 'user[counsel_detail_type]', value: 'absence_over', text: "&nbsp;&nbsp;4차부재이상&nbsp;&nbsp;", checked: false},
        ],
        reservation: [
          { name: 'user[reserved_date]', value: 'reserved_date', text: '', checked: false}
        ]
      }

      $('#counsel-types').on('click', function(e) {
        if (e.target.type === 'radio') {
          var target_options = counsel_options[e.target.value];
          if (e.target.value === 'reservation') {
            var time = new Date()
            var full_date = time.getFullYear() + "-" + ( "0" + (time.getMonth() + 1)).slice(-2) + "-" + ( "0" + time.getDate()).slice(-2)
            var full_time = time.getHours() + ':' + time.getMinutes()
            $('#counsel-sub-types').html('<input type="date" id="start" name="user[reservation_date]" value="' + full_date +'" /> <input type="time" id="start" name="user[reservation_time]" value="' + full_time +'" />')
          } else if (target_options) {
            var context = '';
            for (var index = 0, length = target_options.length; index < length; index++) {
                context += '<span class=""><label><input type="radio" name="' + target_options[index].name + '" value="' + target_options[index].value + '"' + (target_options[index].checked ? 'checked' : "") + '>' + target_options[index].text + '</label></span>'
            }
            $('#counsel-sub-types').html(context)
          }
        }
      });

    });
  }
}

$(document).on("ready", CounselLc.init);
