<template>
  <div id="calss-detail-layout" class="program-wrapper">
    <TheCourseInfo/>
    <div class="tab-content courses-detail-layout">
      <TheLnbSub
        :navList="navList"
      />
      <nuxt-child/>
    </div>
  </div>
</template>

<script>
import TheLnbSub from '@/components/admin/TheLnbSub'
import TheCourseInfo from '@/components/admin/classes/class/TheCourseInfo'

export default {
  name: 'calss-detail-layout',
  components: { TheCourseInfo, TheLnbSub },
  layout: 'tutor',
  props: ['navList']
}
</script>

<style  lang=scss>
.calss-detail {
}
</style>
