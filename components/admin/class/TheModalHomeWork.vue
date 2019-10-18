<template>
  <div id="assignment-details-2230" class="TheModalHomeWork modal fade in" aria-hidden="true" style="display: block; padding-left: 0px;">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header assignment-modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <h3 class="modal-title title" id="myModalLabel">
            1회차 과제
          </h3>
        </div>
        <div class="modal-body assignment-modal-content">
          <div class="row">
            <div class="col-sm-12">
              <div class="form-group">
                <label class="col-sm-2 control-label padding-left-less" style="top: 3px;">선생님</label>
                <div class="col-sm-10 padding-left-less">
                  <div class="tutor-info">
                    <img width="30" height="30" alt="avatar image" class="img-circle profile-img" src="@/assets/img/no_avatar.png">
                    <span>teacher_1</span><span>(dailydaechi)</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label padding-left-less" style="top: 7px;">과제명</label>
                <div class="col-sm-10 padding-left-less">
                  <div class="box">과제 테스트</div>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label padding-left-less" style="top: 7px;">과제 내용</label>
                <div class="col-sm-10 padding-left-less">
                  <div class="box" style="height: 60px; overflow: auto">
                    과제 제출해 주세요
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label class="col-sm-2 control-label padding-left-less" style="padding-top: 10px;">파일 첨부</label>
                <div class="col-sm-10" style="padding: 10px 15px;">
                  <div class="row">
                    <div class="col-sm-12 text-center">
                      <span style="font-size: 0.8em">첨부파일이 없습니다</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group margin-bottom-less">
                <label class="col-sm-2 control-label padding-left-less" style="top: 7px;">제출기한</label>
                <div class="col-sm-10 padding-left-less">
                  <div class="box">
                    2019-10-14 17:11 ~ 2019-10-21 17:11
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="hr"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <h3 class="title" style="margin: -5px 0 20px 0;">
                <span>과제 제출</span>
              </h3>
            </div>
          </div>
          <!-- 과제 재출 -->
          <form class="form-horizontal" id="new_student_assignment" enctype="multipart/form-data" action="/tutor/courses/719/steps/2230/student_assignments" accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="HTyvDy8D6yIsyPInJ5lKRyMTqmPRFNCPMjxEi5UDKTLBxLId0Up0JDVKBZ+J5sfzVwJXrrus3A0DtMbahOz8Ng==">
            <input type="hidden" name="student_assignment[assignment_id]" value="29">
            <div class="form-group">
              <label class="col-sm-2 control-label" style="top: -2px;">이름</label>
              <div class="col-sm-10 padding-left-less">
                <div class="tutor-info">
                  <img width="30" height="30" alt="student_1" class="img-circle profile-img" src="https://st-kr-tutor.s3.amazonaws.com/uploads/user/avatar/22/thumb_%EC%9B%94%EC%9D%B4_%EC%B9%B4%ED%86%A1%EB%B0%B0%EA%B2%BD2.png">
                  <span>유네오</span><span>(student_1)</span>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">과제 내용</label>
              <div class="col-sm-10 padding-left-less">
                에디터어어우아아아우알아루ㅏ얼아러아러로로랑루ㅏ라라라
              </div>
            </div>
            <div class="form-group" style="margin-top: 0;">
              <label class="col-sm-2 control-label">사진 찍기</label>
              <div class="col-sm-10 padding-left-less" style="padding-top: 10px;">
                <button class="btn btn-primary bg-black">
                  <a href="https://webcamtoy.com" target="_blank" style="color: white !important;">
                    사진 찍기
                  </a>
                </button>
                <span style="font-size: 11px; color: #BBBBBB !important;">
                                                    <a href="https://kr.tutor.com/help/faqs?q=site">* 웹캠으로 사진찍는 방법이 궁금하신가요?</a>
                                                  </span>
              </div>
            </div>

            <div class="form-group" style="margin-top: 0;">
              <label class="col-sm-2 control-label">파일 첨부</label>
              <div class="col-sm-10" style="padding-top: 10px;">
                <div id="assignment-details-edit-2230-files"></div>
                <a data-association-insertion-node="#assignment-details-edit-2230-files" data-association-insertion-method="append" class="btn btn-sm btn-default bg-white add_fields" style="margin: 5px 0 0 -15px;" data-association="attachment" data-associations="attachments" data-association-insertion-template="
                                                  <div class=&quot;nested-fields row&quot; style=&quot;background-color: #e0e0e0; border: 0.5px solid #999999;&quot;>
                                                    <div class=&quot;col-sm-1&quot; style=&quot;padding-right: 2px; padding-bottom: 3px;&quot;>
                                                      <i class=&quot;fa fa-file-o&quot;></i>
                                                    </div>
                                                    <div class=&quot;col-sm-9&quot;>
                                                      <input class=&quot;col-sm-9&quot; style=&quot;padding: 3px 0; font-size: 12px;&quot; type=&quot;file&quot; name=&quot;student_assignment[attachments_attributes][new_attachments][attachment]&quot; id=&quot;student_assignment_attachments_attributes_new_attachments_attachment&quot; />
                                                    </div>
                                                    <div class=&quot;col-sm-2 text-right&quot;>
                                                      <input value=&quot;false&quot; type=&quot;hidden&quot; name=&quot;student_assignment[attachments_attributes][new_attachments][_destroy]&quot; id=&quot;student_assignment_attachments_attributes_new_attachments__destroy&quot; />
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

            <div class="row">
              <div class="col-sm-12 text-right">
                <button class="btn btn-default" onclick="location.reload()" data-dismiss="modal" style="width: 100px;">취소</button>
                <button type="submit" class="btn btn-primary" style="width: 100px;">과제 제출</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheModalHomeWork'
}
</script>

