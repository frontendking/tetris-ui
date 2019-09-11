<template>
  <nav class="TheTutorGnb">
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
  name: 'TheLnbB2c'
}
</script>

<style lang=scss>
.TheTutorGnb {
  display: flex;
  justify-content: space-between;
  #b2c-navi-title {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
  #b2c-navi-list {
    display: flex;
    justify-content: space-around;
    width: 80%;

    a {
      font-size: 1rem;
      letter-spacing: 1px;
      color: black
    }
  }
  @media(min-width: 641px) {
    display: none;
  }
}
</style>
