<template>
  <layout-sub
    id="report"
    :heading="heading"
  >
    <div class="program-wrapper p-lg">
      <div class=" attends-wrap">
        <TheSearchbar/>
        <div class="tab-content m-t-lg ibox-content">
          <div class="result-top-area">
            <p class="sort-result pull-left">전체 58 개</p>
            <p class="information pull-right">
              출석률과 출석수 기준은 어떻게 되나요
              <button type="button" class="btn-layer">
                <i class="fa fa-question-circle-o"></i>
                <div class="tootip-layer">
                  <strong>[출석률]</strong>
                  <div>현재까지 진행된 회차까지의 출석률을 표시합니다.</div>
                  <strong>[출석/지각/결석수]</strong>
                  <div>출석 : 수업 시작일시 이전에 입장한 경우<br>
                    지각 : 수업 시작일시까지 입장하지 않은 경우<br>
                    결석 : 수업 입장을 하지 않은 경우
                  </div>
                </div>
              </button>
            </p>
          </div>
        </div>
        <div>
          <table class="table table-striped table-bordered attends-list-table">
            <colgroup>
              <col width="7%">
              <col width="7%">
              <col width="7%">
              <col width="7%">
              <col width="7%">
              <col width="7%">
              <col>
              <col width="7%">
              <col width="7%">
              <col width="7%">
              <col width="7%">
              <col width="7%">
              <col width="7%">
            </colgroup>
            <thead>
            <tr>
              <th class="center">년도</th>
              <th class="center">월</th>
              <th class="center">학년</th>
              <th class="center">과목</th>
              <th class="center">요일</th>
              <th class="center">시간</th>
              <th class="center">수요일</th>
              <th class="center">수업회차</th>
              <th class="center">학생명</th>
              <th class="center">출결여부</th>
              <th class="center">작성현황</th>
              <th class="center">작성일</th>
              <th class="center"></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="center">
                2019년
              </td>
              <td class="center">
                7월
              </td>
              <td class="center">
                1학년
              </td>
              <td class="center">
                수학
              </td>
              <td class="center">
                목
              </td>
              <td class="center">
                17:00
              </td>
              <td class="center">
                2019-07-04
              </td>
              <td class="center">
                1회차
              </td>
              <td class="center">
                남가은
              </td>
              <td class="center">
                출석
              </td>
              <td class="center">
                미작성
              </td>
              <td class="center">
                -
              </td>
              <td class="center">
                <a class="btn btn-primary btn-block" data-remote="true" href="/tutor/reports/100/edit"
                   onclick="$('#apply-modal-form').modal('toggle');">작성하기</a>
              </td>
            </tr>
            <tr>
              <td class="center">
                2019년
              </td>
              <td class="center">
                7월
              </td>
              <td class="center">
                1학년
              </td>
              <td class="center">
                수학
              </td>
              <td class="center">
                목
              </td>
              <td class="center">
                17:00
              </td>
              <td class="center">
                2019-07-04
              </td>
              <td class="center">
                1회차
              </td>
              <td class="center">
                남가은
              </td>
              <td class="center">
                출석
              </td>
              <td class="center">
                미작성
              </td>
              <td class="center">
                -
              </td>
              <td class="center">
                <a class="btn btn-primary btn-block" data-remote="true" href="/tutor/reports/100/edit"
                   onclick="$('#apply-modal-form').modal('toggle');">작성하기</a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <TheReportModal/>
    </div>

  </layout-sub>
</template>

<script>
import LayoutSub from '@/components/admin/layout-sub'
import TheSearchbar from '@/components/admin/TheSearchbar'
import TheReportModal from '@/components/admin/TheReportModal'

export default {
  name: 'report',
  components: { TheReportModal, TheSearchbar, LayoutSub },
  data () {
    return {
      heading: '학습 리포트 관리'
    }
  }
}
</script>

<style lang=scss>
#report {
  .tab-content {
    border: none;
    margin: 0;
    padding: 0;
  }
}
</style>
