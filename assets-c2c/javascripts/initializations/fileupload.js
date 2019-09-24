var Fileupload = {
  init: function() {
    $("#s3-uploader").fileupload({
      add: function(e, data) {
        var file = data.files[0];
        var content_type = data.files[0].type;
        $("#s3-upload-content-type").val(content_type);
        data.context = $(tmpl("template-upload", file));
        $('#s3-uploader').append(data.context);
        return data.submit();
      },
      progress: function(e, data) {
        var progress;
        if (data.context) {
          progress = parseInt(data.loaded / data.total * 100, 10);
          return data.context.find('.bar').css('width', progress + '%');
        }
      },
      done: function(e, data) {
        var content, domain, file, path, to, size, content_type, folder, name;
        file = data.files[0];
        content_type = file.type;
        size = file.size;
        name = file.name

        folder = $('#s3-uploader').data('folder');
        domain = $('#s3-uploader').attr('action');
        path = $('#s3-uploader input[name=key]').val().replace('${filename}', file.name);
        to = $('#s3-uploader').data('callback-url');

        content = {};
        content["attachment[remote_origin]"] = domain + path;
        content["attachment[content_type]"] = content_type
        content["attachment[size]"] = size
        content["attachment[folder]"] = folder
        content["attachment[filename]"] = name

        $.post(to, content, function(data, textStatus, jqXHR) {
          // var template;
          // template = '<div class="library video"> <div class="image-wrapper" style="background-image: url(//d2z6n5z8o9zhav.cloudfront.net/support/encoding.gif)"> <div class="mask"> </div> </div> <div class="info-wrapper"> <div class="name">' + data.video.name + '</div> <div class="date">' + data.video.created_at + '</div> </div> </div>';
          // $("#js-video-files").prepend(template);
        });
        if (data.context) {
          return data.context.remove();
        }
      },
      fail: function(e, data) {
        return alert(data.files[0].name + " 파일을 업로드하는데 실패했습니다.");
      }
    });
  }
};

$(document).on("ready", Fileupload.init);
