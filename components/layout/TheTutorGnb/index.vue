<template>
  <div class="gnb-wrap-box">
    <h1 class="gnb-title"><a href="/elementary/main/">일간 대치동</a></h1>
    <nav id="theTutorGnb">
      <ul id="b2c-navi-list">
        <li><a href="#">일간대치동 안내</a>
          <div class="sub_menu guidance">
            <i class="ic"></i>
            <ul>
              <li><a href="/elementary/intro/daechi">소개</a></li>
              <li><a href="/elementary/ip/daechi_math_release">수학</a></li>
              <li><a href="/elementary/ip/daechi_korean_release">국어</a></li>
              <li><a href="/elementary/ip/daechi_society_release">사회</a></li>
              <li><a href="/elementary/ip/daechi_science_release">과학</a></li>
            </ul>
          </div>
        </li>
        <li><a href="javascript:free_course();">무료수업 신청</a></li>
        <li><a href="/elementary/ticket/buy">수업권 구매</a></li>

        <li><a href="/elementary/ip/daechi_promotion">튜터소개</a></li>
        <li class="gnb_pc">
          <a href="/elementary/learning/class/this/month">배우기<span class="balloon"><img src="/elementary/resources/img/common/icon_balloon_02.png" alt="신청한 수업 듣기"></span> <span class="ic_sub"></span></a>

        </li>

        <li class="gnb_pc">
          <a href="#">가르치기</a>
          <div class="sub_menu teaching">
            <i class="ic"></i>
            <ul>
              <li><a href="/elementary/teaching/class/this/month">일간대치동 수업 하러가기</a></li>
              <li><a href="#" onclick="window.open('/tutor/courses', '_blank');return false;">튜터닷컴 수업 하러가기</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">이벤트</a>
          <div class="sub_menu event">
            <i class="ic"></i>
            <ul>
              <li><a href="/elementary/dyn/evt/january_event">월별&nbsp;이벤트</a></li>
            </ul>
          </div>
        </li>
        <li class="gnb_pc"><a href="/elementary/main/frame?url=/help/notices">공지사항</a></li>
        <li class="gnb_pc" id="chatlist-form" data-user-num="321">
          <i class="icon-messege"></i>
        </li>
        <li class="gnb_m menu_customer"><a href="tel:1670-1485"><span>고객센터</span>1670-1485</a></li>
      </ul>
    </nav>
    <div class="btn_gnb_menu">gnb버튼</div>
  </div>
</template>

<script>
export default {
  name: 'the-tutor-gnb',
}
</script>

<style lang="scss">
.gnb-wrap-box {
  .gnb-title {
    font-size: 36px;
    font-weight: 700;
  }

}
</style>
