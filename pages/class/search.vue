<template>
  <article class="search">
    <TheClassSearchBox/>
    <TheClassTimeTable/>
  </article>
</template>

<script>
import TheClassSearchBox from '@/components/class/TheClassSearchBox'
import TheClassTimeTable from '@/components/class/TheClassTimeTable'

export default {
  props: ['page', 'users'],
  layout:'tutor',
  components: {
    TheClassSearchBox,
    TheClassTimeTable,
  },
  data () {
    return {}
  },
}
</script>

<style lang=scss>
.search {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto;
  grid-row-gap: 4.4rem;
}
</style>
