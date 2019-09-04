<template>
  <div id="tutor-layout">
    <TheHeader id="conects-header"></TheHeader>
    <TheConectsLnb id="conects-lnb"></TheConectsLnb>
    <main id="tutor-contents">
      <TheTutorGnb id="tutor-gnb"></TheTutorGnb>
      <TheTutorLnb id="tutor-lnb"></TheTutorLnb>
      <nuxt id=""/>
    </main>
    <TheFooter class="footer"></TheFooter>
  </div>
</template>
<script>
import TheHeader from './TheHeader'
import TheTutorGnb from './TheTutorGnb'
import TheTutorLnb from './TheTutorLnb'
import TheConectsLnb from './TheConectsLnb'
import TheFooter from './TheFooter'

export default {
  components: {
    TheConectsLnb,
    TheTutorGnb,
    TheTutorLnb,
    TheHeader,
    TheFooter
  }
}
</script>
<style lang="scss">
@import '~@/assets/style/global.scss';
html {
  font-size: 10px;
}
body {
  font-family: 'Noto Sans KR', 'Malgun Gothic', '맑은고딕', '돋움', 'Dotum', 'Helvetica', 'Apple SD Gothic Neo', Sans-serif, serif;
}
</style>

<style scoped lang="scss">

@media(min-width: 600px) {
  #tutor-layout {
    display: grid;
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: auto 1fr;

    #conects-header, #conects-lnb, #tutor-gnb, #tutor-lnb, .footer {
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

    #tutor-contents {
      grid-column: 2/3;
      grid-row: 2/4;
    }

    .footer {
      grid-column: 1/3;
      grid-row: 5/6;
    }

    main {
      grid-column: 2/3;
      grid-row: 3/4;
      padding: 2rem;
    }
  }
}


/*conects css 초기화*/
#conects-header {
  margin-left: 0;
}

#conects-lnb {
  padding-bottom: 5rem;
}

#tutor-layout > footer {
  min-width: initial;
}

#conects-header, #conects-lnb, #tutor-gnb, #tutor-lnb, .footer {
  display: none;
}

</style>
