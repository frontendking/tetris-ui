var Alert = {
  init: function() {
    //Override the default confirm dialog by rails
    $.rails.allowAction = function(link) {
      if (link.data("confirm") == undefined) {
        return true;
      }
      $.rails.showConfirmationDialog(link);
      return false;
    };

    //User click confirm button
    $.rails.confirmed = function(link) {
      var inputValue = link.data("input-value");
      link.data("confirm", null);
      link.trigger("click.rails");
    };

    //Display the confirmation dialog
    $.rails.showConfirmationDialog = function(link) {
      switch (link.data("dialog-type")) {
        case "inputDialog": $.rails.showConfirmationInputDialog(link); break;
        default: $.rails.showDefaultConfirmationDialog(link);
      }
    };

    $.rails.showDefaultConfirmationDialog = function(link) {
      var title = link.data("title");
      var message = link.data("confirm");
      var type = link.data("type");
	    var html = link.data("html");
      var confirmButtonText = link.data("button-text");
      var confirmButtonColor = link.data("button-color");
      var cancelButtonText = link.data("cancel-button-text");
      var showCancelButton = link.data("show-cancel-button");

      swal({
        title: title || "확인이 필요합니다.",
        text: message,
        type: type || "warning",
	    	html: html || false,
        confirmButtonText: confirmButtonText || "확인",
        confirmButtonColor: confirmButtonColor || "#448AFF",
        cancelButtonText: cancelButtonText || "아니요",
        showCancelButton: showCancelButton || true
      }, function() {
        $.rails.confirmed(link);
      });
    };

    $.rails.showConfirmationInputDialog = function(link) {
      var title = link.data("title");
      var message = link.data("confirm");
      var type = link.data("type") || "input";
      var html = link.data("html");
      var inputType = link.data("input_type") || "text";
      var confirmButtonText = link.data("button_text");
      var confirmButtonColor = link.data("button_color");
      var cancelButtonText = link.data("cancel_button_text");
      var showCancelButton = link.data("show_cancel_button");
      var inputPlaceholderText = link.data("input-placeholder-text");
      var inputTarget = link.data("input-target");
      var inputMinLength = link.data("input-min-length") || 1;
      var inputMaxLength = link.data("input-max-length") || 0;

      link.data("type", type);
      link.data("input_type", inputType);

      swal({
        title: title || "확인이 필요합니다.",
        text: message,
        html: html || false,
        type: type,
        inputType: inputType,
        closeOnConfirm: false,
        confirmButtonText: confirmButtonText || "확인",
        confirmButtonColor: confirmButtonColor || "#448AFF",
        cancelButtonText: cancelButtonText || "아니요",
        showCancelButton: showCancelButton || true,
        inputPlaceholder: inputPlaceholderText || "입력해주세요."
      }, function(inputValue) {

        if (inputValue === false) return false;

        if (inputValue === "" || inputValue.length < inputMinLength) {
          if (inputMinLength > 1)
            swal.showInputError(inputMinLength + " 글자 이상 메세지를 입력해주세요.");
          else
            swal.showInputError("메세지를 입력해주세요.");
          return false;
        }

        if (inputValue.length > inputMaxLength) {
          swal.showInputError(inputMaxLength + " 글자 이하로 메세지를 입력해주세요.");
          return false;
        }

        if (inputTarget !== false) {
          var target = $(inputTarget);
          if (target.length) {
            target.val(inputValue);
          }
        }

        $.rails.confirmed(link);
      });

      if (inputMaxLength > 0) {
        var i = $('.show-input').find('input');
        i.attr('maxlength', inputMaxLength);
      }
    };

  }
};

$(document).on("ready", Alert.init);
