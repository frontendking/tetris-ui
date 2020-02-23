<template>
  <div class="st_business-nav mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar" style="overflow: visible;">
    <div id="mCSB_1" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" style="max-height: none;" tabindex="0">
      <div id="mCSB_1_container" class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y" style="position:relative; top:0; left:0;" dir="ltr">
        <div id="mCSB_1" class="mCustomScrollBox mCS-st_lnb-scrollbar mCSB_vertical mCSB_outside" style="max-height: none;" tabindex="0">
          <div id="mCSB_1_container" class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y" style="position:relative; top:0; left:0;" dir="ltr">
            <a href="/elementary/main/" class="link-home">일간대치동<br>메인가기</a>
            <TheLayoutHeaderLNBList />
            <TheLayoutHeaderLNBListSite />
            <div class="ban">
              <a href="//www.conects.com/support/toceo" target="_blank">
                <img src="//s3.ap-northeast-2.amazonaws.com/st.dangidata/static_conects/public/img/banner/ban_ceo.gif" alt="회원님의 목소리를 들려주세요." class="mCS_img_loaded">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheLayoutHeaderLNBList from './TheLayoutHeaderLNBList'
import TheLayoutHeaderLNBListSite from './TheLayoutHeaderLNBListSite'
export default {
  name: 'TheLayoutHeaderLNB',
  components: { TheLayoutHeaderLNBListSite, TheLayoutHeaderLNBList }
}
</script>

<style lang=scss>
.st_business-nav {
  border-right: 1px solid #e5e5e5;
  background-color: #fbfbfb;

  .ico-tag {
    display: inline-block;
    height: 14px;
    padding: 0 3px;
    border-radius: 4px;
    background-color: #ff8a00;
    color: #fff;
    font-size: 9px;
    font-weight: normal;
    line-height: 14px;
  }

  .link-home {
    display: block;
    position: relative;
    margin: 0 -1px -20px 0;
    padding: 15px 18px 15px 56px;
    border-top: 1px solid #e5e5e5;
    border-right: 1px solid #fff;
    background-color: #fff;
    color: #333;
    font-size: 13px;
    line-height: 15px;
    font-weight: bold;

    &:before {
      content: '';
      display: block;
      position: absolute;
      left: 26px;
      top: 50%;
      width: 20px;
      height: 19px;
      margin-top: -10px;
      background: url("//s3.ap-northeast-2.amazonaws.com/st.dangidata/static_conects/public/img/gnb/ico-home.png?v=4dd0638") no-repeat left top;
    }

    &:hover {
      color: #29b6f6;

      &:before {
        background-position: left bottom;
      }
    }
  }

  iframe {
    + {
      .wrap {
        margin-top: 0;
      }
    }
  }

  .ban {
    padding: 0 24px;

    &:nth-child(n+2) {
      margin-top: 20px;
    }

    a {
      display: block;

      &:nth-child(n+2) {
        margin-top: 20px;
      }
    }
  }
}

</style>
