<template>
  <header class="TheClassSummaryCard">
    <h2>classs-summary</h2>
    <img :src="teacherImageSrc"/>
    <p>{{teacherName}}</p>
    <p>{{classTitle}}</p>
    <p>{{classTime}}</p>
    <dl v-for="v in summaries">
      <dt>{{v.heading}}</dt>
      <dd>{{v.paragraph}}</dd>
    </dl>
  </header>
</template>

<script>
export default {
  props: [
    'teacherImageSrc',
    'teacherName',
    'classTitle',
    'classTime',
    'summaries'
  ],
}
</script>

<style scoped lang=scss>
.TheClassSummaryCard {
}
</style>
