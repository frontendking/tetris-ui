<template>
  <article class="class-info">
    <h1>{{pageTitle}}</h1>
    <the-class-summary-card/>
    <nuxt-child/>
  </article>
</template>
<script>
import TheClassSummaryCard from '@/components/class/TheClassSummaryCard'
export default {
  name: 'ClassMain',
  asyncData({params}){
    return {
      pageTitle: params.id
    }
  },
  watchQuery: ['id'],
  components:{
    TheClassSummaryCard,
  }
}
</script>

<style scoped lang=scss>
@import 'destyle.css';

.class-info {
  font-size: 2rem;
}
</style>
