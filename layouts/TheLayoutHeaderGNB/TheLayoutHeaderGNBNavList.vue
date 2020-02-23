<template>
  <div class="st_personal-service">
    <a href="//www.conects.com" class="bi">Conects</a>
    <dl class="this-service">
      <dt class="depth-01">
        <a id="current-interest" href="/elementary" class="link-service active" data-interest="167">유·초등</a>
      </dt>
      <dd class="depth-02">
        <a href="/elementary" class="selected">일간대치동</a>
        <ul class="list">
          <li>
            <a href="/elementary">일간대치동</a>
          </li>
          <li>
            <a href="https://www.kidsschole.com/" target="_blank">키즈스콜레</a>
          </li>
          <li>
            <a href="/edu" target="_blank">튜터닷컴 초등</a>
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
</template>

<script>
export default {
  name: 'TheLayoutHeaderGNBNavList',
  data () {
    return {
      data: [
        {
          label: '일간대치동',
          url: '/elementary'
        },
        {
          label: '키즈스콜레',
          url: 'https://www.kidsschole.com/'
        },
        {
          label: '튜터닷컴 초등',
          url: '/edu'
        }
      ]
    }
  }
}
</script>

<style lang=scss>
.st_personal-service {
  padding: 24px 480px 3px 24px;
  border-bottom: 1px solid #e5e5e5;
  background-color: #f6f6f6;

  &:before {
    content: " ";
    display: table;
  }

  &:after {
    content: " ";
    display: table;
    clear: both;
  }

  .link-service {
    display: inline-block;
    height: 32px;
    padding: 0 13px;
    background-color: #fff;
    border-radius: 16px;
    -webkit-box-shadow: 0 3px 8px rgba(171, 171, 171, 0.4);
    box-shadow: 0 3px 8px rgba(171, 171, 171, 0.4);
    color: #7f7f7f;
    font-size: 15px;
    line-height: 32px;
    font-weight: bold;

    &:hover {
      background-color: #29b6f6;
      color: #fff;
    }
  }

  .link-service.active {
    background-color: #29b6f6;
    color: #fff;
  }

  .bi {
    display: none;
    position: relative;
    float: left;
    width: 36px;
    height: 24px;
    margin: 2px 0 0 0;
    background: url("//s3.ap-northeast-2.amazonaws.com/st.dangidata/static_conects/public/img/sprite/sprite.svg?v=4dd0638#bi-conects-sm") no-repeat 50%;
    background-size: cover;
    overflow: hidden;
    text-indent: -999px;
  }

  .this-service {
    position: relative;
    float: left;
    margin-left: 10px;

    .depth-01 {
      position: relative;
      float: left;
    }

    .depth-02 {
      position: relative;
      float: left;
      margin-left: -10px;
    }

    .depth-02.active {
      .selected {
        &:after {
          background-position: left bottom;
        }
      }

      .list {
        display: block;
      }
    }

    .selected {
      display: block;
      position: relative;
      height: 32px;
      padding: 0 25px 0 20px;
      border-radius: 0 16px 16px 0;
      background-color: #fff;
      -webkit-box-shadow: 0 3px 8px rgba(171, 171, 171, 0.4);
      box-shadow: 0 3px 8px rgba(171, 171, 171, 0.4);
      color: #333;
      font-size: 15px;
      line-height: 32px;
      font-weight: bold;

      &:after {
        content: '';
        display: block;
        position: absolute;
        right: 10px;
        top: 50%;
        width: 11px;
        height: 6px;
        margin-top: -3px;
        background: url("//s3.ap-northeast-2.amazonaws.com/st.dangidata/static_conects/public/img/gnb/bul-selecting-arrow.png?v=4dd0638") no-repeat left top;
      }
    }

    .list {
      display: none;
      position: absolute;
      left: 0;
      top: 32px;
      padding: 16px 34px 16px 23px;
      border: 1px solid #e5e5e5;
      background-color: #fff;

      li {
        &:nth-child(n+2) {
          margin-top: 6px;
        }
      }

      a {
        color: #333;
        font-size: 14px;
        white-space: nowrap;

        &:hover {
          color: #29b6f6;
        }
      }
    }
  }

  .interesting-service {
    position: relative;
    top: -10px;
    padding-right: 50px;
    overflow: hidden;
    text-align: left;

    &:before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 16px;
      height: 100%;
      background-image: -webkit-gradient(linear, left top, right top, from(#f6f6f6), to(rgba(246, 246, 246, 0)));
      background-image: -webkit-linear-gradient(left, #f6f6f6, rgba(246, 246, 246, 0));
      background-image: linear-gradient(to right, #f6f6f6, rgba(246, 246, 246, 0));
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      right: 50px;
      top: 0;
      width: 16px;
      height: 100%;
      background-image: -webkit-gradient(linear, left top, right top, from(rgba(246, 246, 246, 0)), to(#f6f6f6));
      background-image: -webkit-linear-gradient(left, rgba(246, 246, 246, 0), #f6f6f6);
      background-image: linear-gradient(to right, rgba(246, 246, 246, 0), #f6f6f6);
    }

    .interestings {
      position: relative;
      left: 0;
      top: 0;
      height: 32px;
      padding: 10px 10px 10px 12px;
      overflow: hidden;

      > div {
        display: inline-block;
        white-space: nowrap;
      }

      ul {
        display: inline-block;
        vertical-align: top;
      }

      li {
        display: inline-block;
        margin-right: 6px;
        vertical-align: top;
      }
    }

    .btn-add-interesting {
      display: inline-block;
      margin: 4px 0 0 0;
      color: #7f7f7f;
      font-size: 13px;
      font-weight: bold;
      vertical-align: top;

      &:before {
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-right: 4px;
        background: url("//s3.ap-northeast-2.amazonaws.com/st.dangidata/static_conects/public/img/gnb/btn-add-interesting.png?v=4dd0638") no-repeat left top;
        vertical-align: middle;
      }
    }

    .wrap-btn {
      position: absolute;
      right: 0;
      top: 9px;
      margin: 0;
    }

    .btn-prev {
      display: inline-block;
      width: 22px;
      height: 32px;
      background: url("//s3.ap-northeast-2.amazonaws.com/st.dangidata/static_conects/public/img/gnb/btn-interesting-paging.png?v=4dd0638") no-repeat left top;
      overflow: hidden;
      text-indent: -999px;
      float: left;
      background-position: left top;
    }

    .btn-next {
      display: inline-block;
      width: 22px;
      height: 32px;
      background: url("//s3.ap-northeast-2.amazonaws.com/st.dangidata/static_conects/public/img/gnb/btn-interesting-paging.png?v=4dd0638") no-repeat left top;
      overflow: hidden;
      text-indent: -999px;
      float: right;
      background-position: right top;
    }
  }
}

</style>
