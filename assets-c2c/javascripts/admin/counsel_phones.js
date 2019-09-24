var CounselPhone = {
  init: function() {
    if ($(".input-group.date").length > 0) {
      $('.input-group.date').datepicker({
        todayBtn: "linked",
        keyboardNavigation: false,
        forceParse: false,
        calendarWeeks: true,
        autoclose: true
      });
      $('.clockpicker').clockpicker();
    }
  }
};

$(document).on("ready", CounselPhone.init);
