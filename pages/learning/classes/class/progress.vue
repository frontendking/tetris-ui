<template>
  <div id="step-tab" class="tab-pane m-t-xl active">
    <div class="row">
      <div class="col-sm-6">
        <h4 class="sort-result">총 12 회</h4>
      </div>
      <div class="col-sm-6 text-right" style="margin-top: -6px;">
        <a href="#none" data-toggle="modal" data-target="#videoModal" class="notification_link">
          <strong>과제방 이용 방법 &gt;</strong>
        </a>
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
          <a disabled="disabled" href="javascript:alert('학습 가능 시간이 아닙니다.');void(0);" class="btn btn-xs bg-gray">수업 종료</a>
        </td>
        <td>
          <a class="btn btn-xs btn-submit bg-green" data-toggle="modal" data-target="#assignment-details-2230" href="">과제 제출하기</a>
          <!-- cloverhearts -->
          <div id="assignment-details-2230" class="modal fade" aria-hidden="true" style="display: none;">
            <TheHomeWorkModal/>
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
        <td><a disabled="disabled" href="javascript:alert('학습 가능 시간이 아닙니다.');void(0);" class="btn btn-xs bg-gray">수업
          종료</a></td>
        <td>
          <button disabled="disabled" class="btn btn-xs btn-submit bg-gray">과제 없음</button>
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
        <td><a disabled="disabled" href="javascript:alert('학습 가능 시간이 아닙니다.');void(0);" class="btn btn-xs bg-gray">수업
          종료</a></td>
        <td>
          <a class="btn btn-xs btn-submit bg-black" data-toggle="modal" data-target="#assignment-details-edit-812" href="">제출완료</a>
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
          <button class="btn btn-xs btn-submit vod_play_btn" data-url="https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/955ba7ab58d4dcba3875d6b5ef15b695/동영상1.mp4" data-title="동영상 1">동영상 보기</button>
        </td>
        <td>
          <button class="btn btn-xs btn-submit bg-yellow" onclick="alert('과제 제출 기한(2019-09-16 14:56)이 지나, 과제를 제출할 수 없습니다. ')">미제출</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div id="videoModal" tabindex="-1" role="dialog" aria-labelledby="videoModal" class="TheVideoModal modal fade videoModal">
      <TheVideoModal/>
    </div>
  </div></template>

<script>
import TheVideoModal from '@/components/admin/classes/class/TheVideoModal'
import TheHomeWorkModal from '@/components/admin/class/TheHomeWorkModal'

export default {
  components: { TheHomeWorkModal, TheVideoModal}
}
</script>

<style lang=scss>
.progress {
}
</style>
