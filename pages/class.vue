<template>
  <article class="class-info">
    <h1 id="page-heading">수업신청</h1>
    <the-class-header
      id="class-summary"
      :teacherName="theTeacher.Name"
      :teacherImageSrc="theTeacher.imgSrc"
      :classTitle="classTitle"
      :classTime="classTime"
      :summaries="summaries"
    />
    <nav id="class-info-nav">
      <ul>
        <li v-for="v in subPages">
          <a :href="`${v.to}`">
            {{v.label}} {{$route.params.subpage}}
          </a>
        </li>
      </ul>
    </nav>
    <nuxt-child :page="page" :users="users"/>
    <the-class-footer id="the-class-footer" :class="isSticky?'sticky':''" :data="footer"/>
  </article>
</template>
<script>
import TheClassHeader from '@/components/class/TheClassHeader'
import { getClasses, users } from '../store/class-info'
import TheClassFooter from '@/components/class/TheClassFooter'
import { map } from 'fxjs/Strict'

export default {
  name: 'ClassMain',
  async asyncData (context) {
    const { params, route } = context
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
        }
      ],
      activeLink: 'class',
      isSticky: false
    }
  },
  watchQuery: ['id'],
  components: {
    TheClassHeader,
    TheClassFooter
  },
  methods: {
    date (date) {
      const dateObj = new Date(date)
      return `${dateObj.getFullYear()}.${dateObj.getMonth()}.${dateObj.getDate()}`
    }
  },
  computed: {
    classTitle () {
      return `[${this.theClass.targetGrade}학년 ${this.theClass.targetSubject}]`
    },
    classTime () {
      const date = new Date(this.theClass.schedule[0].start,)
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
          paragraph: '자체교재'
          // paragraph: this.theClass.book.type,
        },
        {
          heading: '모집기간',
          paragraph: '~2019.08.31'
          // paragraph: `${this.date(this.theClass.recuritment.period.start)}~${this.date(this.theClass.recuritment.period.end)}`,
        },
        {
          heading: '수강기간',
          paragraph: '2019.08.01~08.31'
          // paragraph: `${this.date(this.theClass.schedule[0].start)}~${this.date(this.theClass.schedule[this.theClass.schedule.length - 1].end)}`
        },
      ]
    },
  },
  mounted(){
/*    const footer = document.getElementById("the-class-footer")
    const sticky = footer.offsetTop
    window.onscroll = function(e) {
      if(window.pageYOffset + window.innerHeight === document.body.scrollHeight) {
        footer.classList.remove('sticky')
      }
    }*/
  }
}
</script>

<style lang=scss>
@import '~@/assets/style/global.scss';

article.class-info {
  position: relative;
  font-size: 2rem;
  display: grid;
  grid-template-columns: auto;
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
    padding: 2rem;
    #page-heading {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 5.9rem 0 8.1rem 0;
      font-size: 4rem;
      line-height: 1;
      background-color: #f5f5f5;
    }
    #class-summary {
      margin-top: 18rem;
    }
  }
}

</style>
