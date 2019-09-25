<template>
  <article class="class-info">
    <h1 id="page-heading">배우기</h1>
    <the-tutor-local-nav :navItems="subPages"/>
    <nuxt-child :page="page" :users="users"/>
  </article>
</template>

<script>
import { map } from 'fxjs/Strict'
import TheTutorLocalNav from '@/components/class/TheTutorLocalNav'
import { getClasses, users } from '../store/class-info'

export default {
  name: 'learn',
  data () {
    const classId = 1
    const page = getClasses(classId)
    const { theClass, theTeacher, theReviews, footer } = page
    return {
      footer,
      theClass,
      theTeacher,
      theReviews,
      users,
      page,
      classId,
      subPages: [
        {
          id: 'my-class',
          label: '수업 소개',
          to: `/learn/my-class`,
          active: true,
        },
        {
          id: 'calender',
          label: '튜터 소개',
          to: `/class/calender`,
        },
        {
          id: 'report',
          label: '학습 리포트 관리',
          to: `/class/report`,
        },
        {
          id: 'attendence',
          label: '출결현황',
          to: `/class/attendence`,
        },
        {
          id: 'review',
          label: '수강 후기 관리',
          to: `/class/review`,
        },
        {
          id: 'purchase-class',
          label: '수강신청 내역',
          to: `/class/purchase-class`,
        },
        {
          id: 'free-class',
          label: '무료체험 내역',
          to: `/class/report`,
        },
        {
          id: 'purchase-permit',
          label: '수업권 내역',
          to: `/class/purchase-permit`,
        },
      ],
      activeLink: 'class',
      isSticky: false,
    }
  },
  layout:'tutor',
  components: {
    TheTutorLocalNav,
  },
  methods: {
    date (date) {
      const dateObj = new Date(date)
      return `${dateObj.getFullYear()}.${dateObj.getMonth()}.${dateObj.getDate()}`
    },
  },
  computed: {
    classTitle () {
      return `${this.theClass.targetGrade}학년 ${this.theClass.targetSubject}`
    },
    classTime () {
      const date = new Date(this.theClass.schedule[0].start)
      const day = ['일', '월', '화', '수', '목', '금', '']
      return `${date.getMonth()}월 ${day[date.getDay()]}요일 ${date.getHours()}:${date.getMinutes()}`
    },
    summaries () {
      return [
        {
          heading: '대상',
          paragraph: `초등학교 ${this.theClass.targetGrade}학년`,
        },
        {
          heading: '모집인원',
          paragraph: `${this.theClass.recuritment.personal.start}명 ~ ${this.theClass.recuritment.personal.end}명`,
        },
        {
          heading: '교재',
          paragraph: '자체교재',
          // paragraph: this.theClass.book.type,
        },
        {
          heading: '모집기간',
          paragraph: '~2019.08.31',
          // paragraph: `${this.date(this.theClass.recuritment.period.start)}~${this.date(this.theClass.recuritment.period.end)}`,
        },
        {
          heading: '수강기간',
          paragraph: '2019.08.01~08.31',
          // paragraph: `${this.date(this.theClass.schedule[0].start)}~${this.date(this.theClass.schedule[this.theClass.schedule.length - 1].end)}`
        },
      ]
    },
  },
}
</script>

<style lang=scss>
/*@import "@/assets-c2c/stylesheets/application.scss";*/

$heading-font: 4.2rem;
$heading-p-t: 5.9rem;
$heading-p-b: 8.1rem;
$heading-b-m: 6rem;

article.class-info {
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
