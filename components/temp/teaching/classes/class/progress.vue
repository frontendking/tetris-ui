<template>
  <div id="step-tab" class="tab-pane m-t-xl active">
    <div class="row">
      <div class="col-sm-6">
        <h4 class="sort-result">총 12 회</h4>
      </div>
      <div class="col-sm-6 text-right" style="margin-top: -6px;">
        <a href="#none" class="notification_link" data-toggle="modal" data-target="#videoModal"><strong>과제방 이용 방법
          &gt;</strong></a>
      </div>
    </div>
    <table class="table table-striped table-bordered">
      <colgroup>
        <col style="width:5%">
        <col style="width:10%">
        <col style="width:10%">
        <col style="width:auto">
        <col style="width:22%">
        <col style="width:8%">
        <col style="width:auto">
      </colgroup>
      <thead>
      <tr class="active">
        <th>회차</th>
        <th>학습방법</th>
        <th>목차명</th>
        <th>목차별 학습목표</th>
        <th>학습가능시간</th>
        <th>수업 입장</th>
        <th>과제</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
        <td>수업</td>
        <td>1</td>
        <td></td>
        <td>
          2019-06-18 14:30 ~ 2019-06-18 20:30
        </td>
        <td>
          <a class="btn btn-xs bg-gray" disabled="disabled" href="javascript:alert('학습 가능 시간이 아닙니다.');void(0);">수업
            종료</a>
        </td>
        <td>
          <a class="btn btn-xs btn-submit btn-submit" data-toggle="modal" href="#assignment-details-2054">과제 만들기</a>
          <TheCreateHomeworkModal/>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>수업</td>
        <td>2</td>
        <td></td>
        <td>
          2019-06-18 14:30 ~ 2019-06-18 20:30
        </td>
        <td>
          <a class="btn btn-xs btn-submit" disabled="disabled" href="javascript:alert('학습 가능 시간이 아닙니다.');void(0);">수업
            예정</a>
        </td>
        <td>
          <a class="btn btn-xs btn-submit bg-black" data-toggle="modal" data-target="#assignment-details-1942" href="">과제
            제출 현황</a>
          <div id="assignment-details-1942" class="modal fade" aria-hidden="true" style="display: none;">
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
                <TheStateHomeworkModal/>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>1</td>
        <td>수업</td>
        <td>1</td>
        <td></td>
        <td>
          2019-06-18 14:30 ~ 2019-06-18 20:30
        </td>
        <td>
          <a class="btn btn-xs bg-gray" disabled="disabled" href="javascript:alert('학습 가능 시간이 아닙니다.');void(0);">수업
            종료</a>
        </td>
        <td>
          <button class="btn btn-xs btn-submit bg-gray" disabled="">과제 없음</button>
        </td>
      </tr>
      </tbody>
    </table>
    <TheVideoModal/>
  </div>
</template>

<script>
import TheCreateHomeworkModal from '@/components/temp/admin/classes/class/TheCreateHomeworkModal'
import TheStateHomeworkModal from '@/components/temp/admin/classes/class/TheStateHomeworkModal'
import TheVideoModal from '@/components/temp/admin/classes/class/TheVideoModal'

export default {
  components: { TheVideoModal, TheStateHomeworkModal, TheCreateHomeworkModal }
}
</script>

<style lang=scss>
.progress {
}
</style>
