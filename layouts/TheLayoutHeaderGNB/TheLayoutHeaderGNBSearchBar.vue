<template>
  <form id="searchConectsParams" role="form" action="//www.conects.com/common/template/search" method="get">
    <div class="st_bi-search">
      <h1 class="bi">
        <a href="//www.conects.com">CONECTS</a>
      </h1>
      <div class="search-box">
        <input
          id="gnb_conects_search_text"
          type="text"
          placeholder="학원과 독서실을 검색해보세요"
          value=""
          class="inpt-search"
          name="keyword"
        >
        <button id="conects-search-btn" type="button" class="btn-search">
          검색
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'TheLayoutHeaderGNBSearchBar'
}
</script>

<style lang=scss>
.st_bi-search {
  position: relative;
  float: left;
  margin: 0 0 0 0;
  padding: 24px 0 0 20px;

  .bi {
    float: left;

    a {
      display: block;
      width: 36px;
      height: 24px;
      margin: 2px 10px 0 0;
      background: url("//s3.ap-northeast-2.amazonaws.com/st.dangidata/static_conects/public/img/sprite/sprite.svg?v=4dd0638#bi-conects-sm") no-repeat 50%;
      background-size: cover;
      overflow: hidden;
      text-indent: -999px;
    }
  }

  .search-box {
    float: left;
    padding: 3px 8px 3px 10px;
    border: 2px solid #29b6f6;
    border-radius: 16px;
    background-color: #fff;
    font-size: 0;
    line-height: 0;

    > * {
      border: none;
    }
  }

  .inpt-search {
    width: 181px;
    height: 22px;
    color: #7f7f7f;
    font-size: 13px;
    line-height: 22px;
    vertical-align: middle;
  }

  .btn-search {
    width: 22px;
    height: 22px;
    background: url("//s3.ap-northeast-2.amazonaws.com/st.dangidata/static_conects/public/img/gnb/btn-search-sm.png?v=4dd0638") no-repeat 50% 50%;
    overflow: hidden;
    text-indent: -999px;
    vertical-align: middle;
  }
}

</style>
