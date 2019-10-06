<template>
  <div id="conversation_43" class="small-chat-box" style="z-index: 2002;">
    <div class="heading" draggable="true">
      <a class="m-l-sm" data-behavior="close" href="#" onclick="$('#conversation_43').removeClass('active');return false;">
        <i class="fa fa-chevron-left"></i>
      </a>
      student_10
    </div>
    <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 400px;">
      <div class="content" style="overflow: hidden; width: auto; height: 400px;">
      </div>
      <div class="slimScrollBar" style="background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 400px;">
      </div>
      <div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.4; z-index: 90; right: 1px;">
      </div>
    </div>
    <div class="form-chat">
      <div class="input-group">
        <form class="new_message" id="new_message" action="/conversations/43/messages" accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="✓">
          <input value="2" type="hidden" name="message[user_id]" id="message_user_id">
          <div class="input-group-btn">
            <input class="chat-input" autofocus="autofocus" type="text" name="message[body]" id="message_body">
            <input type="submit" name="commit" value="전송" class="btn btn-sm btn-submit" data-disable-with="전송">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang=scss>
.TheChattingWindow {
}
</style>
