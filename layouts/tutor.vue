<template>
  <div id="tutor-layout">
    <link rel="stylesheet" type="text/css" href="https://s3.ap-northeast-2.amazonaws.com/st.dangidata/common/css/st-comm-v4/st-comm-v4.0.0.css">
    <link rel="stylesheet" type="text/css" href="//s3.ap-northeast-2.amazonaws.com/st.dangidata/common/css/jquery.mCustomScrollbar.concat/jquery.mCustomScrollbar.css">
    <link rel="stylesheet" href="https://static.conects.com/static/css/dangi/common/st_common.css" type="text/css" media="all">
    <link rel="stylesheet" href="https://s3.ap-northeast-2.amazonaws.com/st.dangidata/static_conects/public/css/st_conects.css" type="text/css" media="all">
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
import TheConectsHeader from '../components/layout/TheConectsHeader'
import TheTutorGnb from '../components/layout/TheTutorGnb'
import TheConectsLnb from '../components/layout/TheConectsLnb'
import TheConectsFooter from '../components/layout/TheConectsFooter'

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

    #conects-header, #conects-lnb, #tutor-lnb, #conects-footer {
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

    #tutor-header {
      height: 12vw;
      max-height: 13rem;
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
