<template>
  <form id="searchConectsParams" role="form" action="//www.conects.com/common/template/search" method="get">
    <div class="st_bi-search">
      <h1 class="bi"><a href="//www.conects.com">CONECTS</a></h1>
      <div class="search-box">
        <input id="gnb_conects_search_text" type="text" placeholder="학원과 독서실을 검색해보세요" value="" class="inpt-search" name="keyword">
        <button type="button" class="btn-search" id="conects-search-btn">검색</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'TheLayoutHeaderGNBSearchBar'
}
</script>

<style scoped lang=scss>
.TheLayoutHeaderGNBSearchBar {
}
</style>
