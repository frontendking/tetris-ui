var UserRefund = {
  init: function () {
    $('.btn-refund').click(function () {
      var order_id = $(this).data('order-id');
      var user_id = $(this).data('user-id');
      var transaction_id = $(this).data('transaction-id');
      var total = $(this).data('total');
      var pay_type = $(this).data('pay-type');
      var pg = $(this).data('pg');

      $("#refund_order_id").val(order_id);
      $("#refund_user_id").val(user_id);
      $("#transaction_id").html(transaction_id);
      $("#refund_transaction_id").val(transaction_id);
      $("#total").html(total);
      $("#refund_pay_type").val(pay_type);
      $("#refund_refund_total").val(total);
      $(".bank_refund.pg").addClass('hidden');
      $("#pg-" + pg).removeClass('hidden');
      $("#pg-" + pg + ' select').prop('disabled', false);

      $(".bank_refund").hide();
      if (pay_type == "CBBK") $(".bank_refund").show();


      $("#modal-refund").modal('toggle');
    });
  }
}

$(document).on("ready", UserRefund.init);
