<template>
  <div class="st_conects-gnb">
    <TheLayoutHeaderGNBSearchBar/>
    <TheLayoutHeaderGNBNavList/>
    <TheLayoutHeaderGNBUserInfo/>
  </div>
</template>

<script>
import TheLayoutHeaderGNBSearchBar from '@/pages/layout/TheLayoutHeaderGNB/TheLayoutHeaderGNBSearchBar'
import TheLayoutHeaderGNBNavList from '@/pages/layout/TheLayoutHeaderGNB/TheLayoutHeaderGNBNavList'
import TheLayoutHeaderGNBUserInfo from '@/pages/layout/TheLayoutHeaderGNB/TheLayoutHeaderGNBUserInfo'
export default {
  name: 'TheLayoutHeaderGNB',
  components: {
    TheLayoutHeaderGNBUserInfo, TheLayoutHeaderGNBNavList, TheLayoutHeaderGNBSearchBar
  }
}
</script>

<style scoped lang=scss>
.TheLayoutHeaderGNB {
}
</style>

