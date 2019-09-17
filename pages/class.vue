<template>
  <article class="class-info">
    <h1 id="page-heading">수업신청</h1>
    <the-class-header
      v-if="$route.name!=='class-search'"
      id="class-summary"
      :teacherName="theTeacher.Name"
      :teacherImageSrc="theTeacher.imgSrc"
      :classTitle="classTitle"
      :classTime="classTime"
      :summaries="summaries"
    />
    <nav id="class-info-nav" v-if="$route.name!=='class-search'">
      <h2 class="hidden">class page nav</h2>
      <ul>
        <li v-for="v in subPages">
          <a :href="`${v.to}`">
            {{v.label}} {{$route.params.subpage}}
          </a>
        </li>
      </ul>
    </nav>
    <nuxt-child :page="page" :users="users"/>
    <the-class-footer
      v-if="$route.name!=='class-search'"
      id="the-class-footer"
      :class="isSticky?'sticky':''"
      :data="footer"
    />
  </article>
</template>
<script>
import TheClassHeader from '@/components/class/TheClassHeader/TheClassHeader'
import { getClasses, users } from '../store/class-info'
import TheClassFooter from '@/components/class/TheClassFooter'
import { map } from 'fxjs/Strict'

export default {
  name: 'ClassMain',
  // layout: 'tutor',
  data() {
    const classId = 1
    const page = getClasses(classId)
    const { theClass, theTeacher, theReviews } = page
    return {
      ...page,
      users,
      page,
      classId,
      subPages: [
        {
          id: 'class',
          label: '수업 소개',
          to: `/class/class`,
        },
        {
          id: 'teacher',
          label: '튜터 소개',
          to: `/class/teacher`,
        },
        {
          id: 'reviews',
          label: '수업 리뷰',
          to: `/class/reviews`,
        },
      ],
      activeLink: 'class',
      isSticky: false,
    }
  },
  watchQuery: ['id'],
  // layout:'tutor',
  components: {
    TheClassHeader,
    TheClassFooter,
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
  mounted () {
    /*    const footer = document.getElementById("the-class-footer")
        const sticky = footer.offsetTop
        window.onscroll = function(e) {
          if(window.pageYOffset + window.innerHeight === document.body.scrollHeight) {
            footer.classList.remove('sticky')
          }
        }*/
  },
}
</script>

<style lang=scss>

$heading-font: 4.2rem;
$heading-p-t: 5.9rem;
$heading-p-b: 8.1rem;
$heading-b-m: 6rem;

article.class-info {
  position: relative;
  font-size: 2rem;
  display: grid;
  margin: 0 auto;
  grid-template-rows: repeat(4, auto);

  #page-heading {
    display: none;
  }

  .sticky {
    position: fixed;
    bottom: 0;
  }

  #class-info-nav ul {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    font-size: 2.2rem;

    li {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      padding: 2.4rem 0;
      font-weight: bolder;

      &.active {
        border-bottom: #34b4f9 solid 4px;
      }

      &:active, &:hover {
        border-bottom: #34b4f9 solid 4px;
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
  }
}

</style>
