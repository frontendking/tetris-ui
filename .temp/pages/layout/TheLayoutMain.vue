<template>
  <main class="content-wrapper white-bg">
    <div id="page-wrapper" style="min-height: 800px;">
      <div class="elementary-wrapper">
        <div class="class-timetable-search-section pc-view">
          <TheTutorGnb/>
          <div class="content-box">
            <slot/>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import TheTutorGnb from '@/components/layout/TheTutorGnb/index'

export default {
  name: 'TheLayoutMain',
  components: { TheTutorGnb }
}
</script>

<style lang=scss>
.TheLayoutMain {

}
</style>
