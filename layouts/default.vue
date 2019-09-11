<template>
  <div id="tutor-layout">
    <TheConectsHeader id="conects-header"></TheConectsHeader>
    <TheConectsLnb id="conects-lnb"></TheConectsLnb>
    <main id="conects-main">
      <header id="tutor-header">
        <TheTutorGnb id="tutor-gnb"></TheTutorGnb>
      </header>
      <main id="tutor-main">
        <nuxt/>
      </main>
    </main>
    <TheConectsFooter id="conects-footer"></TheConectsFooter>
  </div>
</template>
<script>
import TheConectsHeader from './TheConectsHeader'
import TheTutorGnb from './TheTutorGnb'
import TheConectsLnb from './TheConectsLnb'
import TheConectsFooter from './TheConectsFooter'

export default {
  components: {
    TheConectsLnb,
    TheTutorGnb,
    TheConectsHeader,
    TheConectsFooter
  }
}
</script>
<style lang="scss">
@import '~@/assets/style/global.scss';
@import 'destyle.css';
html {
  font-size: 10px;
}
body {
  font-family: 'Noto Sans KR', 'Malgun Gothic', '맑은고딕', '돋움', 'Dotum', 'Helvetica', 'Apple SD Gothic Neo', Sans-serif, serif;
}
</style>

<style lang="scss">

@media(min-width: 641px) {
  #tutor-layout {
    display: grid;
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: auto 1fr;

    #conects-header, #conects-lnb, #tutor-gnb, #tutor-lnb, #conects-footer {
      display: initial;
    }

    #conects-header {
      grid-column: 1/3;
      grid-row: 1/2;
    }

    #conects-lnb {
      grid-column: 1/2;
      grid-row: 2/4;
    }

    #conects-main {
      grid-column: 2/3;
      grid-row: 2/4;
    }

    #conects-footer {
      grid-column: 1/3;
      grid-row: 5/6;
    }

    #conects-main {
      grid-column: 2/3;
      grid-row: 3/4;
    }
  }
}


/*conects css 초기화*/
#tutor-layout {
  #conects-header {
    margin-left: 0;
  }

  #conects-lnb {
    padding-bottom: 5rem;
  }
  #tutor-main {
    position: relative;
  }
  #conects-footer {
    min-width: initial;
  }
}
#conects-lnb, #conects-footer {
  display: none;
}

</style>
