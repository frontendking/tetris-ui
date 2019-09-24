// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// $(function () {
//   if ($('.enrollment-table').length > 0) {
//     var $tr = $('.enrollment-table tbody tr');
//     $tr.on({
//       click: function (e) {
//         var $this = $(this);
//         $this.toggleClass('active');
//         $this.siblings('tr').removeClass('active');
//       }
//     });
//   }
// });

$(function () {
  var $table = $('.enrollment-table'),
    $tr = $table.find('tr'),
    $sub = $table.find('.detail-wrap');
  $sub.width($table.width());
  $tr.bind({
    click: function (e) {
      var $this = $(this);
      $this.toggleClass('active');
      $this.siblings('tr').removeClass('active');
    }
  }
  );
});
