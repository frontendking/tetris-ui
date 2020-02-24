<template>
  <dl class="wrap">
    <dt>
      <span>함께해요</span>
    </dt>
    <dd>
      <a href="https://www.conects.com/archives/together/study?category_id=167" target="_self" class="new">
        <!-- 새글 등록 시 class="new" -->
        <img
          src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/lnb_icon/b7f3a2fdca8e90fe3a5d04315ebde259.png"
          alt="" class="ico mCS_img_loaded">
        스터디 / 모임
      </a>
    </dd>
    <dd>
      <a href="https://www.conects.com/archives/together/winner?category_id=167" target="_self" class="new">
        <!-- 새글 등록 시 class="new" -->
        <img
          src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/lnb_icon/1337fc50bf02acd85d9a3cf9b8759a76.png"
          alt="" class="ico mCS_img_loaded">
        고수맘
      </a>
    </dd>
    <dd>
      <a href="https://www.conects.com/archives/together/diary/type/card?category_id=167" target="_self" class="new">
        <!-- 새글 등록 시 class="new" -->
        <img
          src="//s3.ap-northeast-2.amazonaws.com/st.conects/myconects/img/lnb_icon/a6cc87a47501cd8225d7cb41a3011026.png"
          alt="" class="ico mCS_img_loaded">
        일상공유
      </a>
    </dd>
  </dl>
</template>

<script>
export default {
  name: 'TheLayoutHeaderLNBList'
}
</script>

<style lang=scss>
.wrap.st-conects_banner {
  padding: 10px 0;

  + {
    .wrap {
      margin-top: 0;

      dt {
        border-top: 0;
      }
    }
  }

  .conects-banner-cover {
    overflow: hidden;
    height: 109px;

    .bx-wrapper {
      margin: 0 auto;

      .banner-slide {
        a {
          display: block;
        }
      }
    }

    .bx-control {
      display: none;
      position: relative;

      > a {
        overflow: hidden;
        display: block;
        position: absolute;
        top: -60px;
        left: 50%;
        width: 8px;
        height: 13px;
        text-indent: -9999em;
        background: url("//s3.ap-northeast-2.amazonaws.com/st.dangidata/static_conects/public/img/gnb/btn-banner-arrow.png?v=4dd0638") no-repeat;
      }

      > a.btn-prev {
        margin-left: -80px;
        background-position: 0 0;
      }

      > a.btn-next {
        margin-left: 70px;
        background-position: -23px 0;
      }
    }
  }
}

.wrap {
  &:nth-child(n+2) {
    margin-top: 20px;
  }

  dt {
    margin-bottom: 20px;
    border: 1px solid #e5e5e5;
    border-right: 0;
    border-left: 0;
    color: #333;
    font-size: 14px;
    font-weight: bold;

    .ico-tag {
      margin-top: 6px;
      vertical-align: top;
    }

    > a {
      display: block;
      padding: 10px 24px;
      background-color: #fff;
      padding-right: 35px;
      background: #fff url("//s3.ap-northeast-2.amazonaws.com/st.dangidata/static_conects/public/img/gnb/bul-business-arrow.png?v=4dd0638") no-repeat 136px 50%;
    }

    > span {
      display: block;
      padding: 10px 24px;
      background-color: #fff;
    }
  }

  dd {
    margin-top: 5px;
    padding: 0 24px;

    a {
      position: relative;
      padding-right: 9px;
      color: #333;
      font-size: 13px;

      .ico {
        width: 26px;
        height: 26px;
        margin-right: 4px;
        vertical-align: middle;
      }

      &:hover {
        color: #29b6f6;
      }
    }

    a.active {
      color: #29b6f6;
    }

    a.new {
      &:after {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #29b6f6;
      }
    }
  }
}

</style>
