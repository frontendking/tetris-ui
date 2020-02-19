<template>
  <footer class="st-conects-footer-v3-2">
    <div class="wrap-bi">
      <img src="https://static.conects.com/common/img/st-comm-v3/img-bi-conects-footer-01.png" alt="" class="bi">
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
  </footer>
</template>

<script>
export default {
  name: 'TheLayoutFooter'
}
</script>

<style lang=scss>
.st-conects-footer-v3-2 {
  padding: 30px 0;
  border-top: 1px solid #e5e5e5;
  background-color: #fff;
  font-size: 12px;
  line-height: 2em;
  font-family: 'Noto Sans KR', 'Malgun Gothic', '맑은고딕', '돋움', Dotum, Helvetica, 'Apple SD Gothic Neo', Sans-serif;
  text-align: center;
  .wrap-bi {
    margin-bottom: 18px;
    .bi {
      vertical-align: top;
    }
    .txt {
      display: inline-block;
      margin: 2px 0 0 15px;
      color: #29b6f6;
      font-size: 13px;
      vertical-align: top;
    }
    .conects-sns {
      display: inline-block;
      margin: 0 0 0 15px;
      vertical-align: top;
      .icon {
        overflow: hidden;
        display: inline-block;
        width: 19px;
        height: 19px;
        margin: 0 0 0 4px;
        text-indent: -9999em;
        vertical-align: top;
        background: url(//static.conects.com/common/img/st-comm-v3/icon-conects-sns.png) no-repeat;
        &:first-child {
          margin: 0;
        }
      }
      .icon.ico-facebook {
        background-position: 0 0;
      }
      .icon.ico-naver-post {
        background-position: -26px 0;
      }
      .icon.ico-naver-blog {
        background-position: -52px 0;
      }
      .icon.ico-youtube {
        width: 21px;
        background-position: -78px 0;
      }
      .icon.ico-naver-tv {
        background-position: -106px 0;
      }
      .icon.ico-instagram {
        background-position: -132px 0;
      }
    }
  }
  .link-info {
    position: relative;
    ul {
      display: inline-block;
      height: 18px;
    }
    li {
      display: inline-block;
      position: relative;
      padding: 0 8px 0 9px;
      height: 18px;
      &:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        width: 1px;
        height: 10px;
        margin-top: -5px;
        background-color: #999;
      }
      &:first-child {
        &:before {
          display: none;
        }
      }
      a {
        position: relative;
        color: #666;
        font-size: 12px;
        line-height: 18px;
        vertical-align: top;
      }
      span {
        position: relative;
        color: #666;
        font-size: 12px;
        line-height: 18px;
        vertical-align: top;
      }
      a.odd {
        color: #000;
        font-weight: 700;
      }
      span.odd {
        color: #000;
        font-weight: 700;
      }
      a.modify {
        margin-left: 4px;
        text-decoration: underline;
      }
      span.modify {
        margin-left: 4px;
        text-decoration: underline;
      }
    }
    .link-isms {
      display: inline-block;
      position: relative;
      margin-top: 2px;
      vertical-align: top;
    }
    .ico-isms {
      display: block;
      position: relative;
      width: 14px;
      height: 14px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .isms-conects {
      display: none;
      position: absolute;
      right: 0;
      bottom: -9px;
    }
  }
  .address {
    margin-top: 15px;
    + {
      .address {
        margin-top: 8px;
      }
    }
    span {
      position: relative;
      padding: 0 8px 0 9px;
      color: #999;
      font-size: 12px;
      line-height: 21px;
      &:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        width: 1px;
        height: 10px;
        margin-top: -5px;
        background-color: #999;
      }
      &:first-child {
        &:before {
          display: none;
        }
      }
    }
    .btn-kakao {
      display: inline-block;
      height: 15px;
      padding: 0 3px;
      border: 1px solid #f0d605;
      border-radius: 2px;
      background-color: #ffdc00;
      -webkit-box-sizing: content-box;
      box-sizing: content-box;
      color: #3b1e1e;
      font-weight: 700;
      font-size: 10px;
      line-height: 15px;
    }
    .link-seller {
      display: inline-block;
      height: 15px;
      padding: 0 3px;
      border: 1px solid #999;
      border-radius: 2px;
      -webkit-box-sizing: content-box;
      box-sizing: content-box;
      color: #999;
      font-size: 10px;
      line-height: 15px;
    }
  }
}
</style>
