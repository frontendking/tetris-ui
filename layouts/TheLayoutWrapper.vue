<template>
  <div class="content-wrapper white-bg">
    <div id="page-wrapper">
      <div class="elementary-wrapper">
        <div class="class-timetable-search-section pc-view">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"TheLayoutWrapper"
}
</script>

<style scoped lang=scss>
.TheLayoutWrapper {
}
</style>
