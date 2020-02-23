<template>
  <nav id="theTutorGnb">
    <ul id="b2c-navi-list">
      <li><a href="#">일간대치동 안내</a></li>
      <li><a href="javascript:free_course();">무료수업 신청</a></li>
      <li><a href="/elementary/ticket/buy">수업권 구매</a></li>
      <li>
        <a href="/elementary/class/apply/schedule">수업신청
          <span class="balloon gnb_pc"><img
            src="/elementary/resources/img/common/icon_balloon_01_v2.gif"
            alt="2월 수업 OPEN!"
          ></span>
          <span class="balloon_m gnb_m"><img
            src="/elementary/resources/img/common/icon_balloon_01_v2_m.gif"
            alt="2월 수업 OPEN!"
          ></span>
          <span class="ic_sub" /></a>
      </li>
      <li><a href="#">1%튜터(선생님)</a></li>
      <li class="gnb_pc">
        <a href="/elementary/learning/class/this/month">배우기<span class="balloon"><img
          src="/elementary/resources/img/common/icon_balloon_02.png"
          alt="신청한 수업 듣기"
        ></span></a>
      </li>
      <li class="gnb_pc">
        <a href="#">가르치기</a>
      </li>
      <li><a href="#">이벤트</a></li>
      <li class="gnb_pc">
        <a href="/elementary/main/frame?url=/help/notices">공지사항</a>
      </li>
      <li id="chatlist-form" class="gnb_pc" data-user-num="321">
        <i class="icon-messege" />
      </li>
      <li class="gnb_m menu_customer">
        <a href="tel:1670-1485"><span>고객센터</span>1670-1485</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import TheLayoutHeaderGNBTutorNavSubMenu from './TheLayoutHeaderGNBTutorNavSubMenu'

export default {
  name: 'TheLayoutHeaderGNBTutorNav',
  components: { TheLayoutHeaderGNBTutorNavSubMenu }
}
</script>

<style scoped lang=scss>
@media (min-width: 960px) {

  #theTutorGnb {
    margin-left: 180px;
    padding: 40px 0;
    position: relative;
    #b2c-navi-list {
      margin-right: 0;
      display: block;

      &:after {
        content: '';
        display: block;
        clear: both;
      }

      > li {
        float: left;
        margin-left: 25px;
      }

      .gnb_m {
        display: none;
      }

      li {
        a {
          font-size: 14px;
          font-weight: bold;
        }
      }

      .sub_menu.guidance {
        margin-left: -22px;
      }

      .sub_menu.tutor {
        margin-left: -60px;
        width: 135px;
      }

      .sub_menu.study {
        margin-left: -60px;
        width: 175px;
      }

      .sub_menu.teaching {
        margin-left: -60px;
        width: 130px;
      }

      .sub_menu.event {
        margin-left: -39px;
      }
    }

  }
}
</style>
