<template>
  <div id="wrap" class="the-tutor-layout">
    <TheStConectsNav/>
    <TheStConectsContents/>
    <TheStConectsFooter/>
  </div>
</template>
<script>
// import TheConectsHeader from '../components/layout/TheConectsHeader'
import TheStConectsNav from '@/components/layout/TheStConectsNav'
import TheStConectsContents from '@/components/layout/TheStConectsContents'
import TheStConectsFooter from '@/components/layout/TheStConectsFooter'

export default {
  components: {
    TheStConectsFooter,
    TheStConectsContents,
    TheStConectsNav,
  },
}
</script>


<style lang="scss">
@import '../assets-conects/st-comm-v4.0.0.css';
@import '../assets-conects/st_conects.css';
@import 'destyle.css';
@import '../assets/style/b2c-reset.css';

html {
  font-size: 10px;
}

body {
  font-family: 'Noto Sans KR', 'Malgun Gothic', '맑은고딕', '돋움', 'Dotum', 'Helvetica', 'Apple SD Gothic Neo', Sans-serif, serif;
  font-size: 2.2rem;
  letter-spacing: 0.079rem;
  font-weight: normal;
  color: #8d8d8d;
  word-break: keep-all;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

#wrap > div.content-wrapper.white-bg {
  padding: 0;
}

#b2c-wrapper {
  padding-top: 9rem;

  > article {
    > h1 {
      display: none
    }
  }
}

#theTutorGnb {
  z-index: 1;
}

@media(min-width: 960px) {
  #b2c-wrapper {
    padding-top: 9rem;

    > article {
      padding: 0 5rem;

      > h1 {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  #tutor-header {
    display: flex;
    justify-content: flex-end;
    position: relative;
    width: 100%;
  }

  #theTutorGnb {
    margin-top: 2rem;
    width: 80%;
  }

}
</style>
