<template>
  <article id="teaching">
    <h1 id="page-heading" v-html="heading"/>
    <the-tutor-local-nav :navItems="subPages"/>
    <nuxt-child/>
  </article>
</template>

<script>
import { map } from 'fxjs/Strict'
import TheTutorLocalNav from '@/components/class/TheTutorLocalNav'
import { getClasses, users } from '../store/class-info'

export default {
  name: 'teaching',
  data () {
    const classId = 1
    const page = getClasses(classId)
    const { theClass, theTeacher, theReviews, footer } = page
    return {
      heading: '가르치기',
      footer,
      classId,
      subPages: [
        {
          id: 'my-class',
          label: '내 클래스',
          to: `/teaching/my-class`,
          active: true,
        },
        {
          id: 'calender',
          label: '수업 캘린더',
          to: `/teaching/calender`,
        },
        {
          id: 'report',
          label: '학습 리포트',
          to: `/teaching/report`,
        },
        {
          id: 'attendence',
          label: '출결현황',
          to: `/teaching/attendence`,
        },
        {
          id: 'review',
          label: '수강신청 내역',
          to: `/teaching/review`,
        },
        {
          id: 'purchase-class',
          label: '튜터 공지사항',
          to: `/teaching/purchase-class`,
        },
        {
          id: 'free-class',
          label: '모니터링',
          to: `/class/report`,
        },
        {
          id: 'purchase-permit',
          label: '스케쥴 등록',
          to: `/class/purchase-permit`,
        },
        {
          id: 'profile',
          label: '프로필',
          to: `/class/profile`,
        },
      ],
      activeLink: 'class',
    }
  },
  // layout:'tutor',
  components: {
    TheTutorLocalNav,
  },
}
</script>

<style lang=scss>
/*@import "@/assets-c2c/stylesheets/application.scss";*/

$heading-font: 4.2rem;
$heading-p-t: 5.9rem;
$heading-p-b: 8.1rem;
$heading-b-m: 6rem;

#teaching {
  position: relative;
  font-size: 2.2rem;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  grid-row-gap: 5.9rem;

  #page-heading {
    display: none;
  }

  .sticky {
    position: fixed;
    bottom: 0;
  }

  #class-nav ul {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    font-size: 2.2rem;

    li {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      font-weight: bolder;

      &.active {
        border-bottom: #34b4f9 solid 4px;
      }

      &:active, &:hover {
        border-bottom: #34b4f9 solid 4px;
      }

      a {
        display: block;
        padding: 2.4rem 0;
        width: 100%;
        text-align: center;
      }
    }
  }

  #the-class-footer {
    width: 100%;
  }

  @media(min-width: 641px) {
    > *:nth-child(2) {
      margin-top: $heading-font + $heading-p-t + $heading-p-b + $heading-b-m;
    }
    #page-heading {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: $heading-p-t 0 $heading-p-b;
      font-size: $heading-font;
      line-height: 0.96;
      font-weight: 300;
      background-color: #f5f5f5;
    }
    #class-nav ul {
      background-color: #f7f7f7;
      color: #777;
      font-size: 1.6rem;
      font-weight: 500;
      border: none;

      li {
        display: flex;
        border: solid 1px #e0e0e0;
        border-right: none;

        &:last-child {
          border-right: solid 1px #e0e0e0;
        }
      ;

        &.active, &:hover, &:active {
          color: #fff;
          background-color: #6e737d;
          border-bottom: none;
        }
      }
    }
  }
}

</style>
