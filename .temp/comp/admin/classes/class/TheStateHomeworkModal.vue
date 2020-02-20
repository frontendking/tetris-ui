<template>
    <div class="TheStateHomeworkModal modal-body assignment-modal-content">
      <div class="row">
        <div class="col-sm-12">
          <form class="form-horizontal" id="edit_assignment_26" enctype="multipart/form-data"
                action="/tutor/courses/593/steps/1942/assignments/26" accept-charset="UTF-8"
                data-remote="true" method="post"><input name="utf8" type="hidden" value="✓"><input
            type="hidden" name="_method" value="put"><input type="hidden" name="authenticity_token"
                                                            value="dhtRUx5CMXWB+SUSqhw3/YxWtRSXgF3Bi3Uvckd/jRFUZWGrxDw48vdwBv0bIVin0jBVU3T3+bMLtdHTsahvNw==">
            <div class="form-group">
              <label class="col-sm-2 control-label">과제명</label>
              <div class="col-sm-10 padding-left-less">
                <input type="text" name="assignment[title]" class="form-control" value="ㅇㄹㄴ">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">과제 내용</label>
              <div class="col-sm-10 padding-left-less">
                            <textarea class="form-control" name="assignment[content]" rows="3"
                                      style="resize: none;">ㅇㄴㄹ</textarea>
              </div>
            </div>

            <div class="form-group">
              <label class="col-sm-2 control-label" style="padding-top: 10px;">파일 첨부</label>
              <div class="col-sm-10" style="margin-bottom: 10px">
                <div id="assignment-details-new-1942-files"></div>
                <a data-association-insertion-node="#assignment-details-new-1942-files"
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
                                          " href="#">
                  <span>파일 업로드</span>
                </a>
              </div>
            </div>

            <div class="form-group margin-bottom-less">
              <label class="col-sm-2 control-label" style="top: 3px;">제출기한(선택)</label>
              <div class="col-sm-10 padding-left-less">
                <label class="col-sm-3 control-label time-label">시작일</label>
                <div class="col-sm-9 input-group">
                  <div class="col-sm-5 input-group assignment-datepicker">
                                              <span class="input-group-addon">
                                                <i class="fa fa-calendar"></i>
                                              </span>
                    <input type="text" class="form-control datepicker validates"
                           name="assignment[start_at_date]" value="2019-09-27">
                  </div>

                  <div class="col-sm-5 input-group clockpicker assignment-clockpicker"
                       data-autoclose="true">
                    <input type="text" class="form-control" name="assignment[start_at_clock]" value="14:02">
                    <span class="input-group-addon">
                                                  <span class="fa fa-clock-o"></span>
                                                </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group" style="position: relative; top: -10px;">
              <div class="col-sm-offset-2 col-sm-10 padding-left-less">
                <label class="col-sm-3 control-label time-label">종료일</label>
                <div class="col-sm-9 input-group">
                  <div class="col-sm-5 input-group assignment-datepicker">
                                              <span class="input-group-addon">
                                                <i class="fa fa-calendar"></i>
                                              </span>
                    <input type="text" class="form-control datepicker validates"
                           name="assignment[end_at_date]" value="2019-10-04">
                  </div>

                  <div class="col-sm-5 input-group clockpicker assignment-clockpicker"
                       data-autoclose="true">
                    <input type="text" class="form-control" name="assignment[end_at_clock]" value="14:02">
                    <span class="input-group-addon">
                                                  <span class="fa fa-clock-o"></span>
                                                </span>
                  </div>
                </div>
              </div>
            </div>


            <div class="form-group">
              <div class="col-sm-offset-2">
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
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="hr"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-12 assignment-list-header">
                <h3 class="title" id="myModalLabel2">
                  1회차 과제 제출 현황
                </h3>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 assignment-list-content" id="student-assignment-list-1942">
                <table class="table">
                  <thead>
                  <tr>
                    <th colspan="5">수강생</th>
                    <th colspan="2">제출일</th>
                    <th colspan="1">과제</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td colspan="5">
                      <div class="row">
                        <div class="col-sm-2">
                          <img width="30" height="30" alt="avatar image" class="img-circle profile-img"
                               src="../../../temp/assets/img/no_avatar.png">
                        </div>
                        <div class="col-sm-10">
                          <div class="row">
                            <div class="col-sm-12">
                              <p>student_8</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-12">
                              <p>(student_8)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td colspan="2" style="vertical-align: middle;">
                      <p></p>
                    </td>
                    <td colspan="1">
                      <button class="btn btn-success" style="color: white;" disabled="disabled">
                        제출완료
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="5">
                      <div class="row">
                        <div class="col-sm-2">
                          <img width="30" height="30" alt="avatar image" class="img-circle profile-img"
                               src="../../../temp/assets/img/no_avatar.png">
                        </div>
                        <div class="col-sm-10">
                          <div class="row">
                            <div class="col-sm-12">
                              <p>student_9</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-12">
                              <p>(student_9)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td colspan="2" style="vertical-align: middle;">
                      <p></p>
                    </td>
                    <td colspan="1">
                      <button class="btn btn-danger" style="color: white;" disabled="">
                        미제출
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="5">
                      <div class="row">
                        <div class="col-sm-2">
                          <img width="30" height="30" alt="avatar image" class="img-circle profile-img"
                               src="../../../temp/assets/img/no_avatar.png">
                        </div>
                        <div class="col-sm-10">
                          <div class="row">
                            <div class="col-sm-12">
                              <p>student_10</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-12">
                              <p>(student_10)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td colspan="2" style="vertical-align: middle;">
                      <p></p>
                    </td>
                    <td colspan="1">
                      <button class="btn btn-danger" style="color: white;" disabled="">
                        미제출
                      </button>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'TheStateHomeworkModal'
}
</script>

<style  lang=scss>
.TheStateHomeworkModal {
}
</style>
