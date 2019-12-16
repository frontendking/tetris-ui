<template>
  <div id="hgroup">
    <div class="st_conects-nav personal">
      <TheLayoutHeaderGNB/>
      <TheLayoutHeaderLNB/>
    </div>
  </div>
</template>

<script>

import TheLayoutHeaderGNB from '@/pages/layout/TheLayoutHeaderGNB/index'
import TheLayoutHeaderLNB from '@/pages/layout/TheLayoutHeaderLNB'
export default {
  name: 'TheLayoutHeader',
  components: { TheLayoutHeaderLNB, TheLayoutHeaderGNB }
}
</script>

<style scoped lang=scss>
.TheLayoutHeader {
}
</style>
