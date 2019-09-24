// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var LearnCalendar = {
  init: function () {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    if ($("#learn-calendar").length > 0) {
      $('#learn-calendar').fullCalendar({
        header: {
          left: 'prev,today,next',
          center: 'title',
          right: ''
        },
        views: {
          month: {
            columnFormat: 'ddd'
          },
          week: {
            titleFormat: ' ll',
            columnFormat: 'ddd\r\nDD'
          },
          day: {
            columnFormat: 'ddd d MMM'
          }
        },
        eventRender: function (calev, elt, view) {
          var ntoday = new Date();
          if (calev.start._d.getTime() < ntoday.getTime()) {
            elt.addClass("past");
            elt.children().addClass("past");
          }
        },
        locale: 'ko',
        defaultView: 'agendaWeek',
        editable: false,
        droppable: false,
        allDaySlot: false,
        minTime: "08:00:00",
        maxTime: "32:00:00",
        events: gon.js_env["learns_events"],
      });
    }
  }
};

$(document).on("ready", LearnCalendar.init);
