var Common = {
  init: function () {

    Common.init_summernote();
    Dropzone.autoDiscover = false;

    new Clipboard('#copy-button');

    $('body').scrollspy({
      target: '.navbar-lollol',
      offset: 80
    });

    $("#locale-selector").change(function (e) {
      e.preventDefault();
      var locale = $(this).val();
      if (locale === 'us') {
        location.href = gon.en_site;
      } else {
        location.href = gon.kr_site;
      }
    });

    $('.clockpicker').clockpicker();

    $(".datepicker").datepicker({
      autoclose: true,
      todayHighlight: true,
      format: "yyyy-mm-dd"
    });

    jQuery.datetimepicker.setLocale('ko');
    $(".datetimepicker").datetimepicker({
      format: 'Y-m-d H:i',
      step: 1
    });

    // $("#pass_manager_users_chosen input").autocomplete({
    //   source: function(req, res) {
    //     $.ajax({
    //       url: '/users/autocomplete/' + req.term,
    //       dataType: 'json',
    //       success: function(data) {
    //         res($.map(data, function(item) {
    //           console.log(item);
    //         }));
    //       }
    //     });
    //   }
    // });

    // $('.datepicker.validates').datepicker().on('changeDate', function (ev) {
    //   var today = moment(new Date).format("YYYY-MM-DD");
    //   var ev_date = moment(ev.date).format("YYYY-MM-DD");

    //   if (ev_date < today) {
    //     alert("오늘보다 이전날짜를 선택하면 정상적으로 동작하지 않을 수 있습니다. 날짜를 다시한번 확인해 주세요.");
    //   }
    // });

    $('.small-chat-box .content').slimScroll({
      height: '400px',
      railOpacity: 0.4
    });

    $(document).on("click", '[data-behavior="change-modal"]', function (e) {
      e.preventDefault();

      var origin = $(this).data("origin");
      var target = $(this).data("target");
      if (origin) $(origin).modal('hide');

      setTimeout(function() {
        $(target).modal('show');
      }, 1000)
    });

    $(document).on("click", '[data-behavior="confirm"]', function (e) {
      var msg = $(this).data("msg");
      if (!window.confirm(msg)) {
        return false;
      }
    });

    $(document).on("click", '[data-behavior="close-overlay"]', function (e) {
      e.preventDefault();
      var target = $(this).data("target");
      if (target) $(target).remove();
      $(".overlay").removeClass("visible");
      $("body").removeClass("no-overflow-web");
    });

    $(document).on("click", '[data-behavior="close"]', function (e) {
      e.preventDefault();
      var target = $(this).data("target");
      if (target) {
        $(target).remove();
      }
    });

    // 특정 ID 에서 지정된 문자열 제거
    $(document).on("click", '[data-behavior="remove-item"]', function (e) {
      e.preventDefault();
      var target = $(this).data("target");
      var item = $(this).data("item");
      var link = $(this).data("link");

      if (target) {
        var items = $(target).val().split(',');
        var index = items.indexOf(item);
        if (index > -1) {
          items.splice(index, 1);
        }
        $(target).val(items.join());
      }

      if (link) {
        $(link).remove();
      }
    });

    $("#menu-toggler").bind('click', function (event) {
      event.preventDefault();
      $(this).parent().toggleClass("toggle");
    });

    // $("#file-manager-toggler").bind('click', function(event) {
    //   event.preventDefault();
    //   $("#file-manager-container").toggleClass("hidden");
    // });

    $('a.page-scroll').bind('click', function (event) {
      var link = $(this);
      $('html, body').stop().animate({
        scrollTop: $(link.attr('href')).offset().top
      }, 500);
      event.preventDefault();
      $("#navbar").collapse('hide');
    });

    // 전체 checkbox 선택 / 선택해제
    $('#select-all-checkboxes').change(function () {
      var is_checked = this.checked;
      $('.selectable-checkbox').each(function () {
        this.checked = is_checked;
      });
    });

    // 특정 대상의 버튼을 지정하여 클릭하는 효과를 내는 기능
    $("#target-click-button").unbind('click'); // 여러번 클릭되는 오류 막기 위해 추가
    $("#target-click-button").click(function (e) {
      e.preventDefault();
      var target = $(this).data("target");
      $(target).click();
    });

    // 특정 form 을 submit 할 수 있는 button 처리
    $("#target-submit-button").click(function (e) {
      e.preventDefault();
      var target = $(this).data("target");
      $(target).submit();
    });

    // 일괄업로드 처리를 위한 구문
    $("#batch-upload-button").click(function (e) {
      e.preventDefault();
      $("#batch-upload-form > #file").click();
    });

    $("#batch-upload-form > #file").change(function (e) {
      $("#batch-upload-form").submit();
    });

    $('#nestable2').nestable({
      maxDepth: 3,
      handleClass: 'sort-handle'
    }).on('change', Common.updateOutput);

    $('#nestable-menu').on('click', function (e) {
      var target = $(e.target),
        action = target.data('action');

      if (action === 'expand-all') {
        $('.dd').nestable('expandAll');
      }

      if (action === 'collapse-all') {
        $('.dd').nestable('collapseAll');
      }
    });

    $(".nested-content, #nested-content")
      .on('cocoon:after-insert', function () {
        Common.generate_chosen();
        $(".datepicker").datepicker({
          autoclose: true,
          format: "yyyy-mm-dd"
        });
      });

    $('#tasks')
      .on('cocoon:before-insert', function (e, task_to_be_added) {
        task_to_be_added.fadeIn('slow');
      })
      .on('cocoon:after-insert', function (e, added_task) {
        added_task.css("background", "red");
      })
      .on('cocoon:before-remove', function (e, task) {
        $(this).data('remove-timeout', 1000);
        task.fadeOut('slow');
      });

    $("#view-count-form #per_page").change(function (e) {
      var selected = $(this).val();
      if (selected) {
        $("#view-count-form").submit();
      }
    });

    $("#select-change-trigger").change(function (e) {
      var selected = $(this).val();
      if (selected) {
        $(this).closest("form").submit();
      }
    });

    var code_protocol = $(".codemirror-textarea")[0];
    if (code_protocol) {
      var editor = CodeMirror.fromTextArea(code_protocol, {
        lineNumbers: true,
        lineWrapping: true,
        matchBrackets: true,
        autoCloseBrackets: true,
        mode: "application/ld+json",
        theme: "cobalt"
      });
      editor.setSize(null, 700);
    }

    var code = $(".codemirror-textarea")[1];
    if (code) {
      var editor = CodeMirror.fromTextArea(code, {
        lineNumbers: true,
        lineWrapping: true,
        styleActiveLine: true,
        smartIndent: true,
        mode: "application/json",
        theme: "default"
      });
      editor.setSize(null, 300);
    }

    Common.generate_chosen();
  },

  init_summernote: function () {
    $(".summernote").summernote({
      lang: 'ko-KR',
      height: 250,
      dialogsInBody: true,
      callbacks: {
        onImageUpload: function (files) {
          Common.sendFile(files[0], $(this));
        }
      }
    });
  },

  sendFile: function (file, editor) {
    var data = new FormData();
    data.append("file", file);
    $.ajax({
      data: data,
      type: "POST",
      url: gon.upload_url,
      cache: false,
      contentType: false,
      processData: false,
      success: function (data) {
        editor.summernote("insertImage", data.data.url);
      }
    });
  },

  execDaumPostcode: function() {
    new daum.Postcode({
      oncomplete: function(data) {

        // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
        var fullRoadAddr = data.roadAddress; // 도로명 주소 변수
        var extraRoadAddr = ''; // 도로명 조합형 주소 변수

        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
          extraRoadAddr += data.bname;
        }
        // 건물명이 있고, 공동주택일 경우 추가한다.
        if (data.buildingName !== '' && data.apartment === 'Y'){
          extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
        }
        // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if (extraRoadAddr !== ''){
          extraRoadAddr = ' (' + extraRoadAddr + ')';
        }
        // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
        if (fullRoadAddr !== ''){
          fullRoadAddr += extraRoadAddr;
        }

        // 우편번호와 주소 정보를 해당 필드에 넣는다.
        if (document.getElementById('postcode')) {
          document.getElementById('postcode').value = data.zonecode; //5자리 새우편번호 사용
          document.getElementById('postcode').readOnly = true
        }

        if (document.getElementById('road_address')) {
          document.getElementById('road_address').value = fullRoadAddr;
          document.getElementById('road_address').readOnly = true;
        }

        // 한 페이지 내에 주소입력 창이 2개 있는 페이지가 있어서 여분의 항목을 추가함
        if (document.getElementById('postcode_extra')) {
          document.getElementById('postcode_extra').value = data.zonecode; //5자리 새우편번호 사용
          document.getElementById('postcode_extra').readOnly = true
        }

        if (document.getElementById('road_address_extra')) {
          document.getElementById('road_address_extra').value = fullRoadAddr;
          document.getElementById('road_address_extra').readOnly = true;
        }
      }
    }).open();
  },

  generate_chosen: function () {

    $('.chosen-select').chosen({
      width: "100%"
    });
  },

  updateOutput: function () {
    $.ajax({
      type: "POST",
      dataType: "JSON",
      url: gon.sort_url,
      data: {
        content_group: $('.dd').nestable('serialize')
      },
      headers: {
        "X-CSRF-Token": $("meta[name='csrf-token']").attr("content")
      }
    });
  },

};

$(document).on("ready", Common.init);
