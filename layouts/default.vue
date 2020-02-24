<template>
  <div id="root">
    <div id="hgroup">
      <div class="st_conects-nav personal">
        <TheLayoutHeaderGNB class="TheLayoutHeaderGNB" />
        <TheLayoutHeaderLNB class="TheLayoutHeaderLNB" />
      </div>
    </div>
    <TheLayoutWrapper>
      <TheLayoutHeaderTutor />
      <nuxt />
    </TheLayoutWrapper>
    <TheLayoutFooter class="TheLayoutFooter" />
  </div>
</template>

<script>
import TheLayoutFooter from './TheLayoutFooter'
import TheLayoutHeaderGNB from './TheLayoutHeaderGNB/index'
import TheLayoutHeaderLNB from './TheLayoutHeaderLNB/index'
import TheLayoutWrapper from './TheLayoutWrapper'
import TheLayoutHeaderTutor from './TheLayoutHeaderGNBTutor'

export default {
  components: { TheLayoutHeaderTutor, TheLayoutWrapper, TheLayoutFooter, TheLayoutHeaderLNB, TheLayoutHeaderGNB }
}
</script>
<style lang="scss">
@import '~destyle.css';
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap&subset=korean');

html, body, #__nuxt, #__layout {
  height: 100%;
}

/*모바일 디자인 파일(PSD) 사이즈 = 640px*/
html {
  /* 10 / 640 * 100 */
  font-size: 1.5625vw;
}

/* PC디자인 파일(PSD) 사이즈 = 1280px */
@media (min-width: 960px) {
  html {
    font-size: calc(1.5625vw - 10px);
  }
}

/*무한으로 커지지 않도록 15px로 고정시키기*/
@media (min-width: 1280px) {
  html {
    font-size: 10px;
  }
}

body {
  font-family: 'Noto Sans KR', Sans-serif, serif;
  font-weight: normal;
  text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

#hgroup {
  display: contents;

  & * {
    box-sizing: content-box;
  }

  .st_conects-nav {
    display: contents;
  }
}
</style>

<style lang="scss">
#root {
  display: grid;
  min-height: 100%;
  /*@formatter:off*/
  grid-template:
    "a a" auto
    "b c" 1fr
    "b d" auto /
    1fr 7fr;
  /*@formatter:on*/

  .TheLayoutHeaderGNB {
    grid-area: a;
  }

  .TheLayoutHeaderLNB {
    grid-area: b;
  }

  .TheLayoutFooter {
    grid-area: d;
  }

  #main {
    grid-area: c;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
