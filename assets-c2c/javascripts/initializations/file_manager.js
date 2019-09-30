var FileManager = {
  init: function () {
    // 파일 매니저 실행 토글러
    $(document).on("click", '[data-behavior="file-manager-toggler"]', function (e) {
      e.preventDefault();
      $('body').toggleClass('file-overlay');
      $("#file-manager-container").toggleClass('hidden');
      var result = $(this).data("result");
      $('[data-behavior="file-selected"]').data('target', result);
    });

    $(document).on("click", '[data-behavior="file-selected"]', function (e) {
      e.preventDefault();
      $('body').toggleClass('file-overlay');
      var target = $(this).data("target");
      $(target).trigger('fm-close');
      $("#file-manager-container").toggleClass('hidden');
    });

    $(document).on("click", '[data-behavior="file-select-toggle"]', function (e) {
      $(this).toggleClass("selected");
    });
  }
};

$(document).on("ready", FileManager.init);
