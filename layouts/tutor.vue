<template>
  <div id="conects-layout">
    <!--conects assets-->
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
    <script>
    window.gon = {}
    </script>
    <script src="https://qa-got.conects.com/assets/application-746623d4004bc34f0c05a7fcb9521700e2ba42009071b277490402130b185b65.js"></script>
    <link rel="stylesheet" media="all" href="https://qa-got.conects.com/assets/application-8bd78587f94aeea901d51927ee49c6373662625ab2ecb509fb6f6f24200dc144.css">
    <link rel="stylesheet" media="all" type="text/css" href="https://s3.ap-northeast-2.amazonaws.com/st-kr-tutor/frontweb/tutor-staging.css">
    <link rel="stylesheet" media="all" type="text/css" href="https://s3.ap-northeast-2.amazonaws.com/st-kr-tutor/frontweb/tutor-vender-staging.css">
    <style>

    #wrap > div.content-wrapper.white-bg {
      padding: 3.3rem 2rem;
    }
    #page-wrapper {
      margin: 0;
      min-height: initial;
    }
    .content-box {
      position: relative;
      margin: 0;
    }

    .st_business-nav {
      min-height: 1121px;
    }

    #wrap {
      min-width: initial;
      padding: 0;
    }

    .st_business-nav {
      padding-bottom: 0;
    }

    .hidden {
      visibility: hidden;
      position: absolute
    }

    #hgroup button, #hgroup input {
      border: none
    }

    img#mobile-header {
      width: 100%
    }

    #conects-footer, #conects-lnb {
      display: none
    }

    #hgroup {
      display: none
    }

    #b2c-wrapper {
      position: relative;
      margin: 0;
      display: flex;
      flex-flow: column;
      /*align-items: center;*/
      min-width: 102rem;
      max-width: initial;
      width: 100%;
    }

    @media (min-width: 641px) {
      #wrap {
        min-width: 1120px;
        padding-left: 167px;
      }

      img#mobile-header {
        display: none
      }

      #hgroup, #conects-footer {
        display: block
      }
    }

    .the-tutor-gnb {
      display: none;
      line-height: 1
    }

    @media (min-width: 641px) {

      .the-tutor-gnb #b2c-navi-title {
        font-size: 3.2rem;
        font-weight: 700;
        letter-spacing: 1px
      }

      .the-tutor-gnb #b2c-navi-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 64vw;
        min-width: 69rem;
        font-size: 1.6rem
      }

      .the-tutor-gnb #b2c-navi-list li {
        display: flex;
        align-items: center;
        justify-content: flex-start
      }

      .the-tutor-gnb #b2c-navi-list li a {
        letter-spacing: 1px;
        font-weight: 700;
        color: #000
      }

      .the-tutor-gnb #b2c-navi-list li span {
        display: inline-block;
        font-size: .8rem;
        margin-left: .4rem;
        transform: scaleX(2)
      }
    }




    #page-wrapper {
      margin: 0;
      min-height: initial;
    }
    .content-box {
      position: relative;
      margin: 0;
    }

    .st_business-nav {
      min-height: 1121px;
    }

    #wrap {
      min-width: initial;
      padding: 0;
    }

    .st_business-nav {
      padding-bottom: 0;
    }

    .hidden {
      visibility: hidden;
      position: absolute
    }

    #hgroup button, #hgroup input {
      border: none
    }

    img#mobile-header {
      width: 100%
    }

    #conects-footer, #conects-lnb {
      display: none
    }

    #hgroup {
      display: none
    }

    @media (min-width: 641px) {
      #wrap {
        min-width: 1120px;
        padding-left: 167px;
      }

      img#mobile-header {
        display: none
      }

      #hgroup, #conects-footer {
        display: block
      }
    }

    .the-tutor-gnb {
      display: none;
      line-height: 1
    }

    @media (min-width: 641px) {
      .the-tutor-gnb {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 0;
      }

      .the-tutor-gnb #b2c-navi-title {
        font-size: 3.2rem;
        font-weight: 700;
        letter-spacing: 1px
      }

      .the-tutor-gnb #b2c-navi-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 64vw;
        min-width: 69rem;
        font-size: 1.6rem
      }

      .the-tutor-gnb #b2c-navi-list li {
        display: flex;
        align-items: center;
        justify-content: flex-start
      }

      .the-tutor-gnb #b2c-navi-list li a {
        letter-spacing: 1px;
        font-weight: 700;
        color: #000
      }

      .the-tutor-gnb #b2c-navi-list li span {
        display: inline-block;
        font-size: .8rem;
        margin-left: .4rem;
        transform: scaleX(2)
      }
    }
    </style>
    <style>
    #wrap {
      min-width: initial;
    }

    #page-wrapper > div {
      min-width: initial;
    }

    #page-wrapper {
      padding: 0;
    }

    #b2c-wrapper caption {
      display: table-caption;
      padding-top: initial;
      padding-bottom: initial;
      color: initial;
      text-align: initial;
    }

    .got-style {
      position: relative;
      font-size: 1.6rem;
      color: #333;
      letter-spacing: 0.05rem;
    }

    .class-timetable-search-section.pc-view {
      padding: 0;
    }

    #page-wrapper > div > div > div {
      width: initial;
      margin: 0;
    }

    /*front에서 수정할 것*/

    #b2c-navi-title {
      word-break: keep-all;
      padding-right: 1rem;
    }

    #the-class-footer > div.modal-dimm.active > form {
      max-width: 70rem;
    }

    #the-class-footer > div.modal-dimm.active > form .choose-permit {
      max-height: 80rem;
    }

    #the-class-footer > div.modal-dimm.active > form > fieldset input {
      justify-self: center
    }

    #the-class-footer > div.modal-dimm.active > form > fieldset > div {
      overflow: scroll;
    }

    #b2c-wrapper legend {
      width: initial;
    }

    #tutor-header {
      /*max-width: 102rem;*/
      width: 102rem;
      margin: 0 auto;
    }

    .the-tutor-gnb #b2c-navi-list {
      width: 77rem;
    }

    #tutor-gnb {
      padding: 2rem 0;
    }

    #the-class-footer > div.modal-dimm.active > form > fieldset > div > div {
      grid-template-columns: 1fr 7fr;
    }

    #the-class-footer > div.modal-dimm.active > form > fieldset > .choose-permit {
    }

    #ticketCardList .permit-card input {
      justify-self: center;
    }

    /*
    ::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 7rem;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 4rem;
      background-color: rgba(0,0,0,.5);
      -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
    }
    */
    </style>
    <div id="wrap">
      <div id="hgroup">
        <div class="st_conects-nav personal">
          <!-- 분기: social, personal -->
          <!-- GNB -->
          <div class="st_conects-gnb">
            <!-- 검색영역 -->
            <div class="st_bi-search">
              <h1 class="bi"><a href="//www.conects.com">CONECTS</a></h1>
              <div class="search-box">
                <input id="gnb_conects_search_text" type="text" placeholder="학원과 독서실을 검색해보세요" value="" class="inpt-search"
                       onkeyup="_GNB_SEARCH_ENTER_(event)">
                <button type="button" class="btn-search" onclick="_GNB_SEARCH_()">검색</button>
              </div>
            </div>
            <!-- //검색영역 -->
            <div class="st_personal-service">
              <a href="//www.conects.com" class="bi">Conects</a>
              <dl class="this-service">
                <dt class="depth-01">
                  <a href="" target="_self" class="link-service active" id="current-interest" data-interest="167">초등교육</a>
                </dt>
                <dd class="depth-02">
                  <a href="/daechi/ip/9900pass" class="selected">일간대치동</a>
                  <ul class="list">
                    <li>
                      <a href="" target="_self">일간대치동</a>
                    </li>
                    <li>
                      <a href="https://kr.tutor.com/elementary" target="_blank">튜터닷컴 초등</a>
                    </li>
                    <li>
                      <a href="https://www.conects.com/common/template/feed?category_id=167" target="_blank">커뮤니티</a>
                    </li>
                  </ul>
                </dd>
              </dl>
              <div class="interesting-service">
                <div class="interestings">
                  <div>
                    <ul id="gnb-interests-list">
                      <li style="display: inline-block;" data-interest-code="38">
                        <a href="https://skyedu.conects.com/go3/main" class="link-service">대입·수능</a>
                      </li>
                      <li style="display: inline-block;" data-interest-code="55">
                        <a href="https://eng.conects.com/" class="link-service">어학·회화</a>
                      </li>
                      <li style="display: inline-block;" data-interest-code="160">
                        <a href="https://gongin.conects.com/" class="link-service">공인중개사</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="st_social-service">
              <ul class="tab">
                <li><a>SCHOOL</a></li>
                <li><a>UNIVERSITY</a></li>
                <li><a>CAREER</a></li>
                <li><a>LIFE</a></li>
              </ul>
              <div class="list">
                <dl>
                  <dt>School</dt>
                  <dd>
                    <a href="https://www.kidsschole.com/main/main/renew"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/60cb696bdf9a445b9c410423a63df040.png"
                      alt="">육아교육</a>
                  </dd>
                  <dd>
                    <a href="https://www.conects.com/common/template/feed?category_id=167"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/96a5a7a11f3693899eaf3ada08c2d3fd.png"
                      alt="">초등교육</a>
                  </dd>
                  <dd>
                    <a href="https://www.conects.com/common/template/feed?category_id=157"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/ad81885a252c8d5d3fb0268f813a9417.png"
                      alt="">중등·특목</a>
                  </dd>
                  <dd>
                    <a href="https://skyedu.conects.com/go3/main"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/3d31e116ccf2a953e6759526df5ec396.png"
                      alt="">대입·수능</a>
                  </dd>
                </dl>
                <dl>
                  <dt>University</dt>
                  <dd>
                    <a href="https://public.conects.com/"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/193591ba5366aac68066e4487f9a46bb.png"
                      alt="">취업</a>
                  </dd>
                  <dd>
                    <a href="https://gong.conects.com/"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/a2671caf40b924e85d061cd898d18e05.png"
                      alt="">공무원·임용</a>
                  </dd>
                  <dd>
                    <a href="https://eng.conects.com/"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/24c049f7f2ac747a5dc80b8c336e17db.png"
                      alt="">어학·회화</a>
                  </dd>
                  <dd>
                    <a href="https://imyong.conects.com/"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/e61cb275368d8f127850b7eaa8ed3e8a.png"
                      alt="">임용고시</a>
                  </dd>
                </dl>
                <dl>
                  <dt>Career</dt>
                  <dd>
                    <a href="https://www.schole.ac/"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/fc7b85d4532237f7b9f0f5ef3aeee8ef.png"
                      alt="">직무·프로젝트</a>
                  </dd>
                  <dd>
                    <a href="https://www.conects.com/common/template/feed?category_id=118"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/5113203b1f92399be875a948c3c92833.png"
                      alt="">창업·스타트업</a>
                  </dd>
                  <dd>
                    <a href="https://peet.conects.com/"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/5403eb816aa42fbe78e0cb16debad451.png"
                      alt="">의사·약사</a>
                  </dd>
                  <dd>
                    <a href="https://www.conects.com/common/template/feed?category_id=159"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/734fc2b37b0fabe5047fd17846982e94.png"
                      alt="">변호사</a>
                  </dd>
                  <dd>
                    <a href="https://www.conects.com/common/template/feed?category_id=96"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/c71701a9c11306d67a1eac27642a2fef.png"
                      alt="">회계사</a>
                  </dd>
                  <dd>
                    <a href="https://gongin.conects.com/"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/0e5a898aa23b1af4a209158fbd10d19a.png"
                      alt="">공인중개사</a>
                  </dd>
                  <dd>
                    <a href="https://ja.conects.com/"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/baa458f24b73d70b61e969a630769f0e.png"
                      alt="">자격증</a>
                  </dd>
                  <dd>
                    <a href="https://nomu.conects.com/"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/9542e5e111264faf00b4a7ef25b36833.png"
                      alt="">노무사</a>
                  </dd>
                  <dd>
                    <a href="https://bupmu.conects.com/"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/3cc8229ca08549b1032c3a70511e28ff.png"
                      alt="">법무사</a>
                  </dd>
                  <dd>
                    <a href="https://customs.conects.com/"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/b65e0d2fdc2dfb33822f20dd440b4fb0.png"
                      alt="">관세사</a>
                  </dd>
                  <dd>
                    <a href="https://ca.conects.com/"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/6ba114b6f128da83304822b77ea37047.png"
                      alt="">감평사</a>
                  </dd>
                  <dd>
                    <a href="https://beauty.conects.com/"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/873c70b2b9e0eb086867f690efcabf88.png"
                      alt="">뷰티아카데미</a>
                  </dd>
                </dl>
                <dl>
                  <dt>Life</dt>
                  <dd>
                    <a href="https://www.conects.com/common/template/feed?category_id=128"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/2c4c70fecf167a46d8bbf6bca94c6db0.png"
                      alt="">건강/다이어트</a>
                  </dd>
                  <dd>
                    <a href="https://www.conects.com/common/template/feed?category_id=136"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/26e32f5a6b705186efae3309e8b66011.png"
                      alt="">독서</a>
                  </dd>
                  <dd>
                    <a href="https://www.conects.com/common/template/feed?category_id=171"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/54f11ca840af5050b08acb65f2e26567.png"
                      alt="">반려동물</a>
                  </dd>
                  <dd>
                    <a href="https://www.conects.com/common/template/feed?category_id=173"><img
                      src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/category_banner/dev/188e18c694c8e7a7ddc4335b455c999e.png"
                      alt="">뷰티/패션</a>
                  </dd>
                  <dd>
                    <a href=""><img src="" alt="">취미</a>
                  </dd>
                </dl>
              </div>
            </div>
            <div class="st_conects-util">
              <ul>
                <li>
                  <a href="https://member.conects.com/member/login?redirect_url=https://kr.tutor.com/daechi/ip/9900pass">로그인</a>
                </li>
                <li>
                  <a href="https://member.conects.com/member/join?redirect_url=https://kr.tutor.com/daechi/ip/9900pass">회원가입</a>
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
          <!-- //GNB -->
          <!-- LNB -->
          <div class="st_business-nav mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar" style="overflow: visible;">
            <div id="mCSB_1" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" style="max-height: none;"
                 tabindex="0">
              <div id="mCSB_1_container" class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                   style="position:relative; top:0; left:0;" dir="ltr">
                <div id="mCSB_1" class="mCustomScrollBox mCS-st_lnb-scrollbar mCSB_vertical mCSB_outside"
                     style="max-height: none;" tabindex="0">
                  <div id="mCSB_1_container" class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                       style="position:relative; top:0; left:0;" dir="ltr">
                    <iframe src="//www.conects.com/common/st_lnb_banner" frameborder="0" width="166" height="130"
                            scrolling="no" style="overflow:hidden;vertical-align:top;"></iframe>
                    <a href="https://kr.tutor.com/elementary" class="link-home">튜터닷컴<br>메인가기</a>
                    <dl class="wrap">
                      <dt>
                        <span>함께해요</span>
                      </dt>
                      <dd>
                        <a href="https://www.conects.com/archives/together/study?category_id=165" target="_self"
                           class="new">
                          <!-- 새글 등록 시 class="new" -->
                          <img
                            src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/lnb_icon/b7f3a2fdca8e90fe3a5d04315ebde259.png"
                            alt="" class="ico mCS_img_loaded">
                          스터디 / 모임
                        </a>
                      </dd>
                      <dd>
                        <a href="https://www.conects.com/archives/together/winner?category_id=165" target="_self"
                           class="new">
                          <!-- 새글 등록 시 class="new" -->
                          <img
                            src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/lnb_icon/1337fc50bf02acd85d9a3cf9b8759a76.png"
                            alt="" class="ico mCS_img_loaded">
                          고수맘
                        </a>
                      </dd>
                      <dd>
                        <a href="https://www.conects.com/archives/together/diary/type/card?category_id=165" target="_self"
                           class="new">
                          <!-- 새글 등록 시 class="new" -->
                          <img
                            src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/lnb_icon/a6cc87a47501cd8225d7cb41a3011026.png"
                            alt="" class="ico mCS_img_loaded">
                          일상공유
                        </a>
                      </dd>
                    </dl>
                    <dl class="wrap">
                      <dt>
                        <span>물어봐요</span>
                      </dt>
                      <dd>
                        <a href="https://www.conects.com/archives/ask/qna?category_id=165" target="_self" class="new">
                          <!-- 새글 등록 시 class="new" -->
                          <img
                            src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/lnb_icon/cc89f150b5849d0b9005ec69e79e9b7b.png"
                            alt="" class="ico mCS_img_loaded">
                          Q&amp;A
                        </a>
                      </dd>
                      <dd>
                        <a href="https://www.conects.com/archives/ask/anonymous?category_id=165" target="_self"
                           class="new">
                          <!-- 새글 등록 시 class="new" -->
                          <img
                            src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/lnb_icon/1b3c3a133c1d7927c6d32a412c5d9662.png"
                            alt="" class="ico mCS_img_loaded">
                          대나무숲
                        </a>
                      </dd>
                    </dl>
                    <dl class="wrap">
                      <dt>
                        <span>배워봐요</span>
                      </dt>
                      <dd>
                        <a href="https://www.conects.com/archives/study/academy?category_id=165" target="_self"
                           class="new">
                          <!-- 새글 등록 시 class="new" -->
                          <img
                            src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/lnb_icon/cd570f1592ff64b4c4e8bbe153d4ff89.png"
                            alt="" class="ico mCS_img_loaded">
                          학원
                        </a>
                      </dd>
                      <dd>
                        <a href="https://www.conects.com/archives/study/room?category_id=165" target="_self" class="new">
                          <!-- 새글 등록 시 class="new" -->
                          <img
                            src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/lnb_icon/4e3ddacce5a3188d59fb933be47c5110.png"
                            alt="" class="ico mCS_img_loaded">
                          북까페
                        </a>
                      </dd>
                    </dl>
                    <dl class="wrap">
                      <dt>
                  <span>
                    비밀이에요
                    <span class="ico-tag">event</span>
                  </span>
                      </dt>
                      <dd>
                        <a href="https://www.conects.com/archives/secret/group?category_id=165" target="_self"
                           class="new">
                          <!-- 새글 등록 시 class="new" -->
                          <img
                            src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/lnb_icon/45526df1a13bdebe351de4296b6c7812.png"
                            alt="" class="ico mCS_img_loaded">
                          비밀모임
                        </a>
                      </dd>
                      <dd>
                        <a href="https://www.conects.com/archives/secret/pds?category_id=165" target="_self" class="new">
                          <!-- 새글 등록 시 class="new" -->
                          <img
                            src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/lnb_icon/a439af97493ba120e48aab2b940114c6.png"
                            alt="" class="ico mCS_img_loaded">
                          비밀자료
                        </a>
                      </dd>
                    </dl>
                    <dl class="wrap">
                      <dt>
                        <a href="//www.conects.com/archives/best">베스트</a>
                      </dt>
                    </dl>
                    <dl class="add">
                      <dt><span>FAMILY SITE</span></dt>
                      <dd><a href="//book.conects.com">커넥츠북</a></dd>
                      <dd><a href="//studycenter.conects.com">공부장소</a></dd>
                      <dd><a href="//device.conects.com">커넥츠 디바이스</a></dd>
                      <dd><a href="//tutor.conects.com">커넥츠튜터</a></dd>
                      <dd><a href="//kr.tutor.com">튜터닷컴</a></dd>
                    </dl>
                    <div class="ban">
                      <a href="//www.conects.com/support/toceo" target="_blank">
                        <img
                          src="//s3.ap-northeast-2.amazonaws.com/st.dangidata/static_conects/public/img/banner/ban_ceo.gif"
                          alt="회원님의 목소리를 들려주세요." class="mCS_img_loaded">
                      </a>
                    </div>
                  </div>
                </div>
                <div id="mCSB_1_scrollbar_vertical"
                     class="mCSB_scrollTools mCSB_1_scrollbar mCS-st_lnb-scrollbar mCSB_scrollTools_vertical"
                     style="display: none;">
                  <div class="mCSB_draggerContainer">
                    <div id="mCSB_1_dragger_vertical" class="mCSB_dragger"
                         style="position: absolute; min-height: 0px; display: block; height: 0px; max-height: 1155px; top: 0px;">
                      <div class="mCSB_dragger_bar" style="line-height: 0px;"></div>
                    </div>
                    <div class="mCSB_draggerRail"></div>
                  </div>
                </div>
              </div>
              <div id="mCSB_1_scrollbar_vertical"
                   class="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical">
                <div class="mCSB_draggerContainer">
                  <div id="mCSB_1_dragger_vertical" class="mCSB_dragger" style="position:absolute;">
                    <div class="mCSB_dragger_bar"></div>
                  </div>
                  <div class="mCSB_draggerRail"></div>
                </div>
              </div>
            </div>
          </div>
          <!-- //LNB -->
          <!-- popup -->
          <div id="st_conects-interesting-popup" class="st_conects-interesting-popup mfp-hide">
            <p class="txt-state">
              <strong class="num"></strong>어떤
              분야에 관심 있으신가요?<br>
              <strong>관심사를 선택</strong>하고, 맨 아래의 <strong>관심사 저장하기</strong>를 눌러보세요!
            </p>
            <dl class="list-interesting" id="interest-selection-area">
              <dt>
                <strong class="tit">School</strong>
                <!-- <em class="num">(1,003,427)</em> -->
              </dt>
              <dd>
                <input type="checkbox" value="165" id="gnb_interest_check_165">
                <label for="gnb_interest_check_165">육아교육</label>
              </dd>
              <dd>
                <input type="checkbox" value="167" id="gnb_interest_check_167">
                <label for="gnb_interest_check_167">초등교육</label>
              </dd>
              <dd>
                <input type="checkbox" value="157" id="gnb_interest_check_157">
                <label for="gnb_interest_check_157">중등·특목</label>
              </dd>
              <dd>
                <input type="checkbox" value="38" id="gnb_interest_check_38">
                <label for="gnb_interest_check_38">대입·수능</label>
              </dd>
              <dt>
                <strong class="tit">University</strong>
                <!-- <em class="num">(1,003,427)</em> -->
              </dt>
              <dd>
                <input type="checkbox" value="85" id="gnb_interest_check_85">
                <label for="gnb_interest_check_85">취업</label>
              </dd>
              <dd>
                <input type="checkbox" value="69" id="gnb_interest_check_69">
                <label for="gnb_interest_check_69">공무원·임용</label>
              </dd>
              <dd>
                <input type="checkbox" value="55" id="gnb_interest_check_55">
                <label for="gnb_interest_check_55">어학·회화</label>
              </dd>
              <dd>
                <input type="checkbox" value="175" id="gnb_interest_check_175">
                <label for="gnb_interest_check_175">임용고시</label>
              </dd>
              <dt>
                <strong class="tit">Career</strong>
                <!-- <em class="num">(1,003,427)</em> -->
              </dt>
              <dd>
                <input type="checkbox" value="169" id="gnb_interest_check_169">
                <label for="gnb_interest_check_169">직무·프로젝트</label>
              </dd>
              <dd>
                <input type="checkbox" value="118" id="gnb_interest_check_118">
                <label for="gnb_interest_check_118">창업·스타트업</label>
              </dd>
              <dd>
                <input type="checkbox" value="158" id="gnb_interest_check_158">
                <label for="gnb_interest_check_158">의사·약사</label>
              </dd>
              <dd>
                <input type="checkbox" value="159" id="gnb_interest_check_159">
                <label for="gnb_interest_check_159">변호사</label>
              </dd>
              <dd>
                <input type="checkbox" value="96" id="gnb_interest_check_96">
                <label for="gnb_interest_check_96">회계사</label>
              </dd>
              <dd>
                <input type="checkbox" value="160" id="gnb_interest_check_160">
                <label for="gnb_interest_check_160">공인중개사</label>
              </dd>
              <dd>
                <input type="checkbox" value="177" id="gnb_interest_check_177">
                <label for="gnb_interest_check_177">자격증</label>
              </dd>
              <dd>
                <input type="checkbox" value="179" id="gnb_interest_check_179">
                <label for="gnb_interest_check_179">노무사</label>
              </dd>
              <dd>
                <input type="checkbox" value="181" id="gnb_interest_check_181">
                <label for="gnb_interest_check_181">법무사</label>
              </dd>
              <dd>
                <input type="checkbox" value="183" id="gnb_interest_check_183">
                <label for="gnb_interest_check_183">관세사</label>
              </dd>
              <dd>
                <input type="checkbox" value="185" id="gnb_interest_check_185">
                <label for="gnb_interest_check_185">감평사</label>
              </dd>
              <dd>
                <input type="checkbox" value="187" id="gnb_interest_check_187">
                <label for="gnb_interest_check_187">뷰티아카데미</label>
              </dd>
              <dt>
                <strong class="tit">Life</strong>
                <!-- <em class="num">(1,003,427)</em> -->
              </dt>
              <dd>
                <input type="checkbox" value="128" id="gnb_interest_check_128">
                <label for="gnb_interest_check_128">건강/다이어트</label>
              </dd>
              <dd>
                <input type="checkbox" value="136" id="gnb_interest_check_136">
                <label for="gnb_interest_check_136">독서</label>
              </dd>
              <dd>
                <input type="checkbox" value="171" id="gnb_interest_check_171">
                <label for="gnb_interest_check_171">반려동물</label>
              </dd>
              <dd>
                <input type="checkbox" value="173" id="gnb_interest_check_173">
                <label for="gnb_interest_check_173">뷰티/패션</label>
              </dd>
              <dd>
                <input type="checkbox" value="194" id="gnb_interest_check_194">
                <label for="gnb_interest_check_194">취미</label>
              </dd>
            </dl>
            <button type="button" class="btn-confirm"
                    onclick="if(_CONECTS_GNB_.setInterests($('#interest-selection-area input[type=checkbox]:checked').map(function(){return $(this).val()*1}).get()))$.magnificPopup.instance.close()">
              관심사 저장하기
            </button>
            <button type="button" class="btn-close-popup mfp-close">닫기</button>
          </div>
        </div>
      </div>
      <div class="content-wrapper white-bg">
        <div id="page-wrapper">
          <div class="elementary-wrapper">
            <div class="class-timetable-search-section pc-view">
              <div class="content-box">
                <header id="tutor-header">
                  <the-tutor-gnb/>
                </header>
                <div id="b2c-wrapper">
                  <!--                여기에 개별 패이지 넣습니다.-->
                  <nuxt/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="conects-footer" class="st-conects-footer-v3-2">
        <div class="wrap-bi">
          <img src="//static.conects.com/common/img/st-comm-v3/img-bi-conects-footer-01.png" alt="" class="bi">
          <p class="txt">전 국민 필수 공부앱</p>
          <div class="conects-sns">
            <a class="icon ico-facebook" href="http://facebook.com/myconects">커넥츠 페이스북</a>
            <a class="icon ico-naver-post" href="https://post.naver.com/conects">커넥츠 네이버 포스트</a>
            <a class="icon ico-naver-blog" href="http://blog.naver.com/conects">커넥츠 네이버 블로그</a>
            <a class="icon ico-youtube" href="https://www.youtube.com/channel/UCq6gcyfvYSAJuEQvVZYzklw">커넥츠 유튜브</a>
            <a class="icon ico-naver-tv" href="http://tv.naver.com/conects">커넥츠 네이버 TV</a>
            <a class="icon ico-instagram" href="http://instagram.com/conects.office">커넥츠 인스타그램</a>
          </div>
        </div>
        <div class="link-info">
          <ul>
            <li><a href="http://www.stunitas.com/" target="_blank">회사소개</a></li>
            <li><a href="http://www.conects.com/intro">커넥츠소개</a></li>
            <li><span>커넥츠</span><a href="#" class="modify"
                                   onclick="window.open('http://member.dangi.co.kr/common/terms/use_terms', 'popup_notice1', 'width=880,height=700,scrollbars=yes,top=0,left=0,location=0,resizable=no,status=no,directories=no');return false;">이용약관</a>
            </li>
            <li><a href="https://member.dangi.co.kr/member/popup_info/private_agree" target="_blank"
                   class="odd">개인정보처리방침</a><a href="#" class="modify"
                                              onclick="window.open('http://member.dangi.co.kr/common/terms/private_terms', 'popup_notice2', 'width=880,height=700,scrollbars=yes,top=0,left=0,location=0,resizable=no,status=no,directories=no');return false;">변경내용</a>
            </li>
          </ul>
          <div class="link-isms"><a href="#isms-conects" class="ico-isms" onclick="$(this).next('.isms-conects').show();"><img
            src="//static.conects.com/common/img/st-comm-v3/ISMS.png" alt="ISMS"></a><img
            src="//static.conects.com/common/img/st-comm-v3/popup_isms.gif" id="isms-conects" alt="정보보호 관리체계 인증서"
            usemap="#map-isms-conects" class="isms-conects">
            <map name="map-isms-conects" id="map-isms-conects">
              <area shape="rect" coords="349,7,393,54" href="#" alt="닫기"
                    onclick="$('.isms-conects').hide();return false;">
            </map>
          </div>
        </div>
        <div class="address">
          <div class="wrap"><span class="company">㈜에스티유니타스</span><span>대표이사 : <em class="ceo">윤성혁</em></span><span
            class="address-txt">서울시 강남구 대치동 영동대로 417 오토웨이타워 3층</span></div>
          <div class="wrap"><span>고객센터 : <em class="cs"> <a
            href="/customer/board/customer_main/">[바로가기]</a></em></span><span>Fax : 02-6442-9932</span><span>개인정보보호 책임자 : 이윤석(privacy@stunitas.com)</span>
          </div>
          <div class="wrap"><span>사업자등록번호 : <em class="licensee-num">277-85-00460</em></span><span>통신판매업신고 : <em
            class="licensee-txt">2014-서울강남-01131</em><a href="#"
                                                        class="link-seller">사용자 정보확인</a></span><span>ⓒ ST Unitas.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import TheConectsHeader from '../components/layout/TheConectsHeader'
import TheTutorGnb from '../components/layout/TheTutorGnb'
// import TheConectsLnb from '../components/layout/TheConectsLnb'
// import TheConectsFooter from '../components/layout/TheConectsFooter'

export default {
  components: {
    // TheConectsLnb,
    TheTutorGnb,
    // TheConectsHeader,
    // TheConectsFooter
  },
  mounted () {
    this.$nextTick(() => {
      const conectsLayout = document.querySelector('#conects-layout')
      conectsLayout.classList.add('cource', 'pages', 'ip', 'got-style', 'no-skin-config', 'pace-done')
      // conectsLayout.classList.add('cource pages ip got-style landing-page no-skin-config pace-done pace-done modal-open body-small')
    })
  }
}
</script>


<style lang="scss">
/*conects css 초기화*/
/*@import '@/assets-c2c/stylesheets/application.scss';*/


</style>
