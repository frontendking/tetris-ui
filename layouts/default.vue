<template>
 <nuxt/>
</template>

<style lang="scss">
@import '~destyle.css';
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap&subset=korean');

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
</style>
