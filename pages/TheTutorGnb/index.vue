<template>
  <nav class="the-tutor-gnb">
    <ul id="b2c-navi-list">
      <li>
        <a href="#">과목 안내</a>
        <ul>
          <li><a>궁금해요! 일간대치동</a></li>
          <li><a>일간대치동수학</a></li>
          <li><a>일간대치동국어</a></li>
          <li><a>일간대치동사회</a></li>
          <li><a>일간대치동과학</a></li>
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
      const ul = document.querySelector('.the-tutor-gnb>ul')
      const topLists = document.querySelectorAll('.the-tutor-gnb > ul > li')
      const lists = document.querySelectorAll('.the-tutor-gnb li')
      let nestUl
      function toggleMenu () {
        ul.classList.toggle('active')
        menu.classList.toggle('active')
      }

      function closeMenu () {
        ul.classList.remove('active')
        menu.classList.remove('active')
      }

      function openMenu () {
        ul.classList.toggle('active')
        menu.classList.toggle('active')
      }

      menu.addEventListener('click', function (e) {
        e.stopPropagation()
        if (e.target === menu) {
          toggleMenu()
        }
      })
      Array.prototype.map.call(lists, function (li) {
        li.addEventListener('click', function (e) {
          const clieckedList = e.target
          const curList = e.currentTarget
          e.stopPropagation()

          nestUl = curList.querySelector('ul')
          if (nestUl) {
            nestUl.classList.toggle('active')
          } else {
            Array.prototype.forEach.call(topLists, function (li) {
              const nestUl = li.querySelector('ul')
              if (nestUl) {
                nestUl.classList.remove('active')
              }
            })
            closeMenu()
          }
        })
      })
    })
  }
}
</script>

<style lang="scss">
.the-tutor-gnb {
  background: url('./assets/menu-button.svg') no-repeat;
  background-size: 3rem 3rem;
  background-position-y: 3rem;
  background-position-x: 3rem;
  height: 9rem;
  width: 39em;
  cursor: pointer;
  position: absolute;

  &.active {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  > ul {
    display: none;
    margin-top: 9rem;
    &.active {
      line-height: 1;
      display: grid;
      grid-auto-rows: minmax(5rem, auto);
      align-content: flex-start;
      align-items: stretch;
      width: 80%;
      height: 100%;
      background-color: #ffffff;
      box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);

      li {
        display: flex;
        flex-flow: column;

        a {
          flex: 1 5rem;
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

  li > ul {
    display: none;

    &.active {
      display: grid;
      grid-auto-rows: minmax(5rem, auto);
      align-content: flex-start;
      align-items: stretch;
      background-color: #ffffff;

      li {
        display: flex;
        flex-flow: column;

        a {
          flex: 1;
          display: flex;
          align-items: center;
          text-indent: 6rem;

          &:hover {
            background: #e0e0e0;
          }
        }
      }
    }
  }
}
</style>
