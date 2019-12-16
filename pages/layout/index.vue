<template>
  <div id="wrap">
    <TheLayoutHeader/>
    <TheLayoutMain>
      <slot/>
    </TheLayoutMain>
    <TheLayoutFooter/>
  </div>
</template>

<script>
import TheLayoutHeader from '@/pages/layout/TheLayoutHeader'
import TheLayoutFooter from '@/pages/layout/TheLayoutFooter'
import TheLayoutMain from '@/pages/layout/TheLayoutMain'
export default {
  name: 'index',
  components: { TheLayoutMain, TheLayoutFooter, TheLayoutHeader }
}
</script>

<style scoped lang=scss>
.index {
}
</style>
