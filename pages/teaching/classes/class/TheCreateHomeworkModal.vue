<template>
  <div id="assignment-details-2054" class="modal fade" aria-hidden="true" style="display: none;">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header assignment-modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <h3 class="modal-title title">
            1회차 과제
          </h3>
        </div>
        <div class="modal-body assignment-modal-content">
          <div class="row">
            <div class="col-sm-12">
              <form class="form-horizontal" id="new_assignment" enctype="multipart/form-data"
                    action="/tutor/courses/637/steps/2054/assignments" accept-charset="UTF-8" data-remote="true"
                    method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden"
                                                                                    name="authenticity_token"
                                                                                    value="y2tRid66lcDIosmtOGwMtf/ok2NlSDAwOwkhss6Z3BPpFWFxBMScR74r6kKJUWPvoY5zJIY/lEK7yd8TOE4+NQ==">
                <div class="form-group">
                  <label class="col-sm-2 control-label padding-left-less">과제명</label>
                  <div class="col-sm-10 padding-left-less" style="margin-bottom: 10px">
                    <input type="text" name="assignment[title]" class="form-control">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label padding-left-less">과제 내용</label>
                  <div class="col-sm-10 padding-left-less" style="margin-bottom: 10px">
                            <textarea class="form-control" name="assignment[content]" rows="3"
                                      style="resize: none;"></textarea>
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label padding-left-less" style="padding-top: 10px;">파일
                    첨부</label>
                  <div class="col-sm-10" style="margin-bottom: 10px">
                    <div id="assignment-details-new-2054-files"></div>
                    <a data-association-insertion-node="#assignment-details-new-2054-files"
                       data-association-insertion-method="append"
                       class="btn btn-sm btn-default bg-white add_fields" style="margin: 5px 0 0 -15px;"
                       data-association="attachment" data-associations="attachments"
                       data-association-insertion-template="
                                            <div class=&quot;nested-fields row&quot; style=&quot;background-color: #e0e0e0; border: 0.5px solid #999999;&quot;>
                                              <div class=&quot;col-sm-1&quot; style=&quot;padding-right: 2px; padding-bottom: 3px;&quot;>
                                                <i class=&quot;fa fa-file-o&quot;></i>
                                              </div>
                                              <div class=&quot;col-sm-9&quot;>
                                                <input class=&quot;col-sm-9&quot; style=&quot;padding: 3px 0; font-size: 12px;&quot; type=&quot;file&quot; name=&quot;assignment[attachments_attributes][new_attachments][attachment]&quot; id=&quot;assignment_attachments_attributes_new_attachments_attachment&quot; />
                                              </div>
                                                <div class=&quot;col-sm-2 text-right&quot;>
                                                <input value=&quot;false&quot; type=&quot;hidden&quot; name=&quot;assignment[attachments_attributes][new_attachments][_destroy]&quot; id=&quot;assignment_attachments_attributes_new_attachments__destroy&quot; />
                                                <a style=&quot;color: black !important&quot; class=&quot;remove_fields dynamic&quot; href=&quot;#&quot;>
                                                  <i class=&quot;fa fa-times-circle&quot;></i>&amp;nbsp;
                                                </a>
                                              </div>
                                            </div>
                                            "
                       href="#">
                      <span>파일 업로드</span>
                    </a>
                  </div>
                </div>

                <div class="form-group margin-bottom-less">
                  <label class="col-sm-2 control-label padding-left-less" style="top: 3px;">
                    <p>제출기한</p>
                    <p>(선택)</p>
                  </label>
                  <div class="col-sm-10 padding-left-less">
                    <label class="col-sm-2 control-label time-label">시작일</label>
                    <div class="col-sm-10 input-group">
                      <div class="col-sm-5 input-group assignment-datepicker">
                                                <span class="input-group-addon">
                                                  <i class="fa fa-calendar"></i>
                                                </span>
                        <input type="text" class="form-control datepicker validates"
                               name="assignment[start_at_date]" value="2019-09-25">
                      </div>

                      <div class="col-sm-5 input-group clockpicker assignment-clockpicker"
                           data-autoclose="true">
                        <input type="text" class="form-control" name="assignment[start_at_clock]" value="19:39">
                        <span class="input-group-addon">
                                                    <span class="fa fa-clock-o"></span>
                                                  </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-group" style="position: relative; top: -10px;">
                  <div class="col-sm-offset-2 col-sm-10 padding-left-less">
                    <label class="col-sm-2 control-label time-label">종료일</label>
                    <div class="col-sm-10 input-group">
                      <div class="col-sm-5 input-group assignment-datepicker">
                                                <span class="input-group-addon">
                                                  <i class="fa fa-calendar"></i>
                                                </span>
                        <input type="text" class="form-control datepicker validates"
                               name="assignment[end_at_date]" value="2019-10-02">
                      </div>

                      <div class="col-sm-5 input-group clockpicker assignment-clockpicker"
                           data-autoclose="true">
                        <input type="text" class="form-control " name="assignment[end_at_clock]" value="19:39">
                        <span class="input-group-addon">
                                                    <span class="fa fa-clock-o"></span>
                                                  </span>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="form-group">
                  <div class="col-sm-offset-2 col-sm-10">
                    <p class="assignment-description">
                      제출기한을 설정하지 않으면, 학생은 학습 기간으로 설정된 기간동안 과제를 제출할 수 있습니다.
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 text-right">
                    <button type="submit" class="btn btn-default btn-submit as-button-width">저장</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheCreateHomeworkModal'
}
</script>

<style lang=scss>
.TheCreateHomeworkModal {
}
</style>
