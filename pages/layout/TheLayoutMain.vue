<template>
  <main class="content-wrapper white-bg">
    <div id="page-wrapper" style="min-height: 800px;">
      <div class="elementary-wrapper">
        <div class="class-timetable-search-section pc-view">
          <div class="content-box">
            <slot/>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'TheLayoutMain'
}
</script>

<style scoped lang=scss>
.TheLayoutMain {
}
</style>
