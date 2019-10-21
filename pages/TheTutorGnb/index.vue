<template>
  <nav class="the-tutor-gnb">
    <ul id="b2c-navi-list">
      <li>
        <a href="#">과목 안내</a>
        <ul>
          <li>궁금해요! 일간대치동</li>
          <li>일간대치동수학</li>
          <li>일간대치동국어</li>
          <li>일간대치동사회</li>
          <li>일간대치동과학</li>
        </ul>
      </li>
      <li><a href="#">멤버십 구매</a></li>
      <li><a href="#">수업권 구매</a></li>
      <li><a href="#">수업신청</a></li>
      <li><a href="#">배우기</a></li>
      <li><a href="#">가르치기</a></li>
      <li><a href="#">공지사항</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'the-tutor-gnb',
  mounted () {
    this.$nextTick(function () {
      const menu = document.querySelector('.the-tutor-gnb')
      const list = document.querySelector('.the-tutor-gnb>ul')
      menu.addEventListener('click', function (e) {
        e.stopImmediatePropagation()
        if(e.target===menu){
          list.classList.toggle('active')
          menu.classList.toggle('active')
        }
      })
    })
  }
}
</script>

<style lang="scss">
.the-tutor-gnb {
  background: url('./assets/menu-button.svg') no-repeat;
  background-size: 3rem 3rem;
  background-position-y: top;
  background-position-x: left;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  position: absolute;

  &.active {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  > ul {
    display: none;

    &.active {
      line-height: 1;
      display: grid;
      /*grid-template-columns: repeat(auto-fit, minmax(3rem, auto));*/
      /*grid-template-rows: 3rem;*/
      grid-auto-rows: 5rem;
      align-items: stretch;
      width: 80%;
      height: 100%;
      background-color: #ffffff;
      box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
      li {
        display: flex;

        a {
          flex: 1;
          display: flex;
          align-items: center;
          text-indent: 3rem;

          &:hover {
            background: #e0e0e0;
          }
        }
      }
    }
  }

  li ul {
    display: none;
  }
}
</style>
