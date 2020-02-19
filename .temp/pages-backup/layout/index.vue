<template>
  <div id="wrap">
    <link rel="stylesheet" href="/elementary/resources/css/st-comm-v4.0.0.css">
    <link rel="stylesheet" href="/elementary/resources/css/st_conects.css">
    <link rel="stylesheet" href="/elementary/resources/css/common.css">
    <link rel="stylesheet" href="/elementary/resources/css/modal.css">
    <link rel="stylesheet" href="/elementary/resources/css/chosen.css">
<!--    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>-->
<!--    <script src="https://cdnjs.cloudflare.com/ajax/libs/chosen/1.8.7/chosen.jquery.min.js"></script>-->
<!--    <script src="/elementary/resources/js/user/teaching/register-schedule.js"></script>-->
    <script src="/elementary/resources/js/application.js"></script>
    <TheLayoutHeader/>
    <TheLayoutMain>
      <div id="b2c-wrapper">
        <slot/>
      </div>
    </TheLayoutMain>
    <TheLayoutFooter/>
  </div>
</template>

<script>
import TheLayoutHeader from '@/pages/layout/TheLayoutHeader'
import TheLayoutFooter from '@/pages/layout/TheLayoutFooter'
import TheLayoutMain from '@/pages/layout/TheLayoutMain'

export default {
  name: 'TheLayoutConects',
  components: { TheLayoutMain, TheLayoutFooter, TheLayoutHeader }
}
</script>

<style lang="scss">

html {
  font-size: 10px;
}

/*모바일 디자인 파일(PSD) 사이즈 = 640px*/
@media (min-width: 320px) {
  html {
    /* 10 / 640 * 100 */
    font-size: 1.5625vw;
  }
}

/* PC디자인 파일(PSD) 사이즈 = 1280px */
@media (min-width: 960px) {
  html {
    font-size: calc(1.5625vw - 10px);
  }
}

/*무한으로 커지지 않도록 15px로 고정시키기*/
@media (min-width: 1600px) {
  html {
    font-size: 15px;
  }
}

body {
  font-family: 'Noto Sans KR', Sans-serif, serif;
  font-weight: normal;
  text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</style>

<style lang=scss>
.main-modal {
}
</style>
