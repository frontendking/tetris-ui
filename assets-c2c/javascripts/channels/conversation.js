if (gon.current_user) {
  App.conversation = App.cable.subscriptions.create('ConversationChannel', {
    connected: function() {},
    disconnected: function() {},
    received: function(data) {
      if (data['window'] !== undefined) {
        // 향후 여러개의 창을 동시에 지원할 경우에 필요한 코드입니다.
        // var conversation_visible = conversation.is(':visible');
        //
        // if (conversation_visible) {
        //   var messages_visible = conversation.find('.panel-body').is(':visible');
        //
        //   if (!messages_visible) {
        //     conversation.removeClass('panel-default').addClass('panel-success');
        //   }
        //
        //   conversation
        //     .find('.messages-list')
        //     .find('ul')
        //     .append(data['message']);
        // } else {
        //   $('#conversations-list').append(data['window']);
        //
        //   conversation = $('#conversations-list').find(
        //     "[data-conversation-id='" + data['conversation_id'] + "']"
        //   );
        //
        //   conversation.find('.panel-body').toggle();
        // }
      } else {
        $("#conversation_" + data['conversation_id']).find('.content').append(data['message']);
      }

      var messages_list = $(".small-chat-box").find(".content");
      var height = messages_list[0].scrollHeight;
      messages_list.scrollTop(height);
    },
    // speak: function(message) {
    //   return this.perform('speak', {
    //     message: message,
    //   });
    // },
  });

  $(document).on('submit', '.new_message', function(e) {
    e.preventDefault();
    // var values = $(this).serializeArray();
    // App.conversation.speak(values);
    $(this).trigger('reset');
    $("#message_body").focus();
  });
}
