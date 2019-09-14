<template>
  <header class="the-conects-header">
    <img id="mobile-header" src="../../assets/img/mobile-header.png" alt="mobile-header"/>
    <div id="hgroup" class="st_conects-nav personal">
      <div class="st_conects-gnb">
        <div class="st_bi-search">
          <h1 class="bi"><a href="//www.conects.com">CONECTS</a></h1>
          <div class="search-box">
            <input id="gnb_conects_search_text" type="text" placeholder="학원과 독서실을 검색해보세요" value="" class="inpt-search"
                   onkeyup="_GNB_SEARCH_ENTER_(event)">
            <button type="button" class="btn-search" onclick="_GNB_SEARCH_()">검색</button>
          </div>
        </div>
        <TheConectsHeaderGnb></TheConectsHeaderGnb>
        <div class="st_conects-util">
          <ul>
            <li>
              <a
                href="https://member.conects.com/member/login?redirect_url=https://kr.tutor.com/daechi/ip/9900pass">로그인</a>
            </li>
            <li>
              <a
                href="https://member.conects.com/member/join?redirect_url=https://kr.tutor.com/daechi/ip/9900pass">회원가입</a>
            </li>
            <li>
              <a href="https://my.conects.com/cart/cart">장바구니</a>
            </li>
            <li>
              <a href="http://eng.conects.com/board/customer/customer_main" class="link-cs">고객섬김센터</a>
            </li>
            <li><a href="https://my.conects.com">내보관함</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import TheConectsHeaderGnb from './TheConectsHeaderGnb'

export default {
  name: 'the-conects-header',
  components: { TheConectsHeaderGnb },
}
</script>

<style lang=scss>

.the-conects-header {
  #hgroup button {
    border:none;
  }
  img#mobile-header {
    width: 100%;
  }
  #hgroup {
    display: none;
  }
  @media(min-width: 641px) {
    img#mobile-header {
      display: none;
    }
    #hgroup {
      display: block;
    }
  }
}
</style>
