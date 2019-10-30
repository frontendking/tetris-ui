<template>
  <div id="TheStBiSearch" class="st_bi-search">
    <h1 class="bi"><a href="//www.conects.com">CONECTS</a></h1>
    <div class="search-box">
      <input id="gnb_conects_search_text" type="text" placeholder="학원과 독서실을 검색해보세요" value="" class="inpt-search"
             onkeyup="_GNB_SEARCH_ENTER_(event)">
      <button type="button" class="btn-search" onclick="_GNB_SEARCH_()">검색</button>
    </div>
  </div></template>

<script>
export default {
  name: 'TheStBiSearch'
}
</script>
