<template>
  <layout-sub
    id="report"
    :heading="heading"
  >
    <div class="program-wrapper p-lg">
      <div class="col-md-3">
        <a
          onclick="$('#apply-modal-form').modal('toggle');"
          style="color:#ffffff;" data-remote="true" href="/tutor/reports/101/edit">
          <div class="product-card">
            <div class="card-front cover12">
              <div class="card-head">
                목차명을 입력해 주세요.
                <span class="label label-absent">결석</span>
              </div>
              <div class="card-content">
                <strong class="title">cccc</strong>
                <span class="sub-title">[무료체험 테스트]</span>
              </div>
              <div class="card-foot">
                <span class="user-name">student_130</span>
                <span class="user-nickname">student_130</span>
                <img width="60" height="60" alt="avatar image" class="profile-img img-circle"
                     src="/assets/avatars/no_avatar-8054b60d17bd7f8064cee31d95be5323867237a66f88c2971a2e3f7caed1f37c.png">
              </div>
            </div>
          </div>
        </a>
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
