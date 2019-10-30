<template>
  <div id="TheStConectsContents" class="content-wrapper white-bg">
    <div id="page-wrapper">
      <div class="elementary-wrapper">
        <div class="class-timetable-search-section pc-view">
          <div class="content-box">
            <header id="tutor-header">
              <TheTutorGnb/>
            </header>
            <slot id="b2c-wrapper"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheTutorGnb from '@/components/layout/TheTutorGnb/index'

export default {
  name: 'TheStConectsContents',
  components: { TheTutorGnb }
}
</script>

<style scoped lang=scss>
.TheStConectsContents {
}
</style>
