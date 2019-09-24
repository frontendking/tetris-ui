var TeachProgramsBuildsSubject = {
	init: function () {
		var previous_max_val = $('#course_max_level_id').val();
		var previous_min_val = $('#course_min_level_id').val();
		$('#course_max_level_id').change(function() {
			if (parseInt($('#course_min_level_id').val()) < parseInt(this.value)) {
				alert($('#message_max_level').val());
				$('#course_max_level_id').val(previous_max_val);
				$('#course_max_level_id').trigger("chosen:updated");
				return false;
			}
		});

		$('#course_min_level_id').change(function() {
			if (parseInt($('#course_max_level_id').val()) > parseInt(this.value)) {
				alert($('#message_min_level').val());
				$('#course_min_level_id').val(previous_min_val);
				$('#course_min_level_id').trigger("chosen:updated");
				return false;
			}
		});
	}
};

$(document).on("ready", TeachProgramsBuildsSubject.init);
