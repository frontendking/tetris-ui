<template>
  <div id="apply-modal-form" class="TheReportModal modal fade" aria-hidden="true" style="display: none;">
    <div class="modal-dialog" role="document">
      <form class="form-horizontal" id="edit_report_100" action="/tutor/reports/100" accept-charset="UTF-8"
            method="post">
        <input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="put"><input
        type="hidden" name="authenticity_token"
        value="lCAkDyezG69EIe4DgdZ+wHsgaY1xRhVPkm1+DuePnEt66NNik6AD2BZgDpPocfD34iiMfBaZqRUH252j8k+M4Q==">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="exampleModalLabel">학습 리포트 미리보기</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12">
                <div class="ibox float-e-margins">
                  <div class="ibox-content">
                    <div class="form-group">
                      <label class="a11y-hidden control-label" for="report_학생 정보">학생 정보</label>
                      <div class="col-lg-12">
                        <img class="profile-img img-circle" src="../temp/assets/img/no_avatar.png" alt="No avatar"
                             width="60" height="60">
                        <p class="user-info">
                          <strong class="user-name">윤종근</strong>
                          <span class="user-nick">hello_1234567890</span>
                          <img class="attend-state img-circle"
                               src="https://qa-got.conects.com/assets/card/absent-8a0986e1072727126b77aaedab1bfd90b49e9abaea850001230d3730eace2559.png"
                               alt="Absent" width="124" height="124">
                        </p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="a11y-hidden control-label" for="report_클래스 정보">클래스 정보</label>
                      <div class="col-sm-12">
                        <ul class="class-detail">
                          <li><strong class="detail-title">수업명</strong> 목차명을 입력해 주세요.</li>
                          <li><strong class="detail-title">수업일시</strong> - ~ -</li>
                          <li><strong class="detail-title">출석현황</strong> <span class="detail-item">결석</span><span
                            class="detail-item">2등</span><span class="detail-item">2019-01-16 14:25</span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-12 control-label title" for="report_comment">수업 중 피드백</label>
                      <div class="col-sm-12">
                              <textarea class="form-control" required="required" name="report[comment]"
                                        id="report_comment"></textarea>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-12 control-label title" for="report_overall">총평 남기기</label>
                      <div class="col-sm-12">
                              <textarea class="form-control" required="required" minlength="50"
                                        placeholder="최소 50자 이상 등록하셔야 합니다." name="report[overall]"
                                        id="report_overall"></textarea>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-3 control-label title" for="report_파일첨부">파일첨부</label>
                      <div class="col-sm-8">
                        <input type="hidden" name="report[materials]" id="report_materials">
                        <div id="report-material-container">
                        </div>
                        <a data-behavior="file-manager-toggler" data-result="#report-material-container"
                           class="btn btn-sm btn-outline" href="#">파일 업로드</a>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>


          </div>
          <div class="modal-footer">
            <a class="btn btn-sm btn-w-m btn-lightgray"
               href="javascript:$('#apply-modal-form').modal('toggle');">취소</a>
            <input type="submit" name="commit" value="리포트 발송" class="btn btn-sm btn-w-m btn-submit"
                   data-disable-with="리포트 발송">
          </div>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TheReportModal'
}
</script>

<style lang=scss>
.TheReportModal {
}
</style>
