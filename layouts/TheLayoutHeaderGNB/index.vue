<template>
  <div class="st_conects-gnb">
    <TheLayoutHeaderGNBSearchBar />
    <TheLayoutHeaderGNBNavList />
    <TheLayoutHeaderGNBUserInfo />
  </div>
</template>

<script>
import TheLayoutHeaderGNBSearchBar from './TheLayoutHeaderGNBSearchBar'
import TheLayoutHeaderGNBNavList from './TheLayoutHeaderGNBNavList'
import TheLayoutHeaderGNBUserInfo from './TheLayoutHeaderGNBUserInfo'
export default {
  name: 'TheLayoutHeaderGNB',
  components: { TheLayoutHeaderGNBUserInfo, TheLayoutHeaderGNBNavList, TheLayoutHeaderGNBSearchBar }
}
</script>

<style lang=scss scoped>
.st_conects-gnb {
  position: relative;
  &:before {
    content: " ";
    display: table;
  }

  &:after {
    content: " ";
    display: table;
    clear: both;
  }

}
</style>
