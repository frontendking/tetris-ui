function onClickAssignmentButton (e, hiddenTarget) {
  var studentAssignmentId = $(e).attr('student-assignment-id')
  var courseId = $(e).attr('course-id')
  var stepId = $(e).attr('step-id')
  console.log(e, studentAssignmentId)
  onToggleStudentAssignmentListElement(hiddenTarget)
  fetchStudnetAssignment(courseId, stepId, studentAssignmentId)
}

function onToggleStudentAssignmentListElement (targetElementId) {
  var target = $("#" + targetElementId)
  var viewer_taget = $("#" + targetElementId + "-viewer")
  if (!!target) {
    if (target.hasClass("hidden")) {
      target.removeClass('hidden')
      viewer_taget.addClass("hidden")
    } else {
      target.addClass('hidden')
      viewer_taget.removeClass("hidden")

    }
  }
}

function fetchStudnetAssignment (course_id, step_id, student_assignment_id) {
  $('.student-assignment-viewer-loading-spinner').removeClass('hidden')
  $.ajax(
    {
      url: '/tutor/courses/' + course_id + '/steps/' + step_id + '/student_assignments/' + student_assignment_id,
      success: function (result) {
        $('.student-assignment-viewer-loading-spinner').addClass('hidden')
        var template_element = $('#student-assignment-list-' + step_id + '-template')
        var template = template_element.html()
        var file_template_element = $('#student-assignment-list-' + step_id + '-template .file-item-template')
        var file_template = file_template_element.html()
        template = template.replace('{{username}}', result.author.username)
        template = template.replace('{{conects_id}}', result.author.conects_id)
        template = template.replace('{{updated_at}}', result.student_assignment.updated_at)
        template = template.replace('{{content}}', result.student_assignment.content)
        template = template.replace('{{evaluation}}', result.evaluation)

        $('#student-assignment-list-' + step_id + '-info').html(template)
        var lenght = result.student_assignment.attachments.length
        for (var index = 0; index < lenght; index++) {
          var att = result.student_assignment.attachments[index]
          var file_temp = file_template.replace('{{attachment_url}}', att.attachment.url)
          var date = new Date(att.created_at);
          var month = (date.getMonth() + 1) <= 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
          var days = date.getDate() <= 10 ? "0" + date.getDate() : date.getDate();
          var hours = date.getHours() <= 10 ? "0" + date.getHours() : date.getHours();
          var minutes = date.getMinutes() <= 10 ? "0" + date.getMinutes() : date.getMinutes();
          file_temp = file_temp.replace('{{display_name}}', att.display_name)
          file_temp = file_temp.replace('{{created_at}}', date.getFullYear() + "-" + month + "-" + days + " " + hours + ":" + minutes);
          $('#student-assignment-list-' + step_id + '-info .file-items').append(file_temp)
        }
      }, error: function (error) {
        console.log('error ', error)
      }
    }
  )
}
