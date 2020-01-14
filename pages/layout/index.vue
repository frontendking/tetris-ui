<template>
  <div id="wrap">
    <link rel="stylesheet" href="/elementary/resources/css/st-comm-v4.0.0.css">
    <link rel="stylesheet" href="/elementary/resources/css/st_conects.css">
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

<style scoped lang=scss>
.index {
}
</style>
