<template>
  <div id="conects-layout">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300&display=swap&subset=korean" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500&display=swap&subset=korean" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:700,900&display=swap&subset=korean" rel="stylesheet">
    <link rel="stylesheet" media="all" type="text/css" href="https://static.conects.com/static/css/dangi/common/st_common.css">
    <link rel="stylesheet" media="all" type="text/css" href="https://s3.ap-northeast-2.amazonaws.com/st.dangidata/common/css/st-comm-v4/st-comm-v4.0.0.css">
    <link rel="stylesheet" media="all" type="text/css" href="https://s3.ap-northeast-2.amazonaws.com/st.dangidata/common/css/jquery.mCustomScrollbar.concat/jquery.mCustomScrollbar.css">
    <link rel="stylesheet" media="all" type="text/css" href="https://s3.ap-northeast-2.amazonaws.com/st.dangidata/static_conects/public/css/st_conects.css">
    <link rel="stylesheet" media="all" type="text/css" href="https://cdn.jsdelivr.net/npm/destyle.css@1.0.10/destyle.min.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
    <!--tutor c2c assets = b2c모델에서 c2c모델의 패이지를 재사용하기 위한 assets-->
    <link rel="stylesheet" media="all" type="text/css" href="https://qa-got.conects.com/assets/application-27f0298e3ff83da2ebed14d59e85cf883344d6245d99f2022af3e23f28e68202.css">
    <link rel="stylesheet" media="all" type="text/css" href="https://s3.ap-northeast-2.amazonaws.com/st-kr-tutor/frontweb/tutor-staging.css">
    <link rel="stylesheet" media="all" type="text/css" href="https://s3.ap-northeast-2.amazonaws.com/st-kr-tutor/frontweb/tutor-vender-staging.css">
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
  },
  mounted(){
    this.$nextTick(()=> {
      const conectsLayout = document.querySelector('#conects-layout')
      conectsLayout.classList.add('program', 'courses', 'index', 'got-style', 'body-small', 'pace-done')
    })
  }
}
</script>
<style lang="scss">

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
