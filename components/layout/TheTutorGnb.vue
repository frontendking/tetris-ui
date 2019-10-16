<template>
  <nav class="the-tutor-gnb">
    <h1 id="b2c-navi-title">일간 대치동</h1>
    <ul id="b2c-navi-list">
      <li><a href="#">과목안내</a> <span>V</span></li>
      <li><a href="#">멤버십 구매</a></li>
      <li><a href="#">수업권 구매</a></li>
      <li><a href="#">수업신청</a></li>
      <li><a href="#">배우기</a></li>
      <li><a href="#">소개</a> <span>V</span></li>
      <li><a href="#">이벤트</a> <span>V</span></li>
      <li><a href="#">가르치기</a></li>
      <li><a href="#">공지사항</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'the-tutor-gnb'
}
</script>

<style lang=scss>
.the-tutor-gnb {
  display: none;
  line-height: 1;

}
</style>
<style lang="scss">
.the-tutor-gnb {
  @media(min-width: 641px) {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    #b2c-navi-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 64vw;
      min-width: 69rem;
      font-size: 1.6rem;
      li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        a {
          letter-spacing: 1px;
          font-weight: bold;
          color: black
        }
        span {
          display: inline-block;
          font-size: 0.8rem;
          margin-left: 0.4rem;
          transform: scaleX(2);
        }
      }
    }
  }
}
</style>
