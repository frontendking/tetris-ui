<template>
  <article class="class-info">
    <h1 hidden>{{page.heading}}</h1>
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
        <li v-for="v in subPages" @click="activeLink=v.id" :class="v.id===activeLink?'active':''">
          <nuxt-link :to="`${v.to}`">
            {{v.label}}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <nuxt-child :page="page" :users="users"/>
    <the-class-footer id="the-class-footer" :class="isSticky?'sticky':''" :data="footer"/>
  </article>
</template>
<script>
import TheClassHeader from '@/components/class/TheClassHeader'
import { getClasses, users } from '../../store/class-info'
import TheClassFooter from '@/components/class/TheClassFooter'
import { map } from 'fxjs/Strict'

export default {
  name: 'ClassMain',
  async asyncData (context) {
    const { params, route } = context
    const classId = params.id
    const page = getClasses(classId)
    const _subPageName = route.path.split('/')[3]
    const subPageName = _subPageName || 'class'
    const { theClass, theTeacher, theReviews } = page
    return {
      ...page,
      users,
      page,
      classId,
      subPageName,
      subPages: [
        {
          id: 'class',
          label: '수업 소개',
          to: `/class/${classId}`,
          page: { theClass }
        },
        {
          id: 'teacher',
          label: '튜터 소개',
          to: `/class/${classId}/teacher`,
          page: { theTeacher }
        },
        {
          id: 'reviews',
          label: '수업 리뷰',
          to: `/class/${classId}/reviews`,
          page: { theReviews }
        }
      ],
      activeLink: 'class',
      isSticky: true
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
    const footer = document.getElementById("the-class-footer")
    const sticky = footer.offsetTop
    window.onscroll = function(e) {
      if(window.pageYOffset + window.innerHeight === document.body.scrollHeight) {
        footer.classList.remove('sticky')
      }
    }
  }
}
</script>

<style lang=scss>
@import '~@/assets/style/global.scss';

.class-info {
  font-size: 2rem;

  .sticky {
    position: fixed;
    bottom: 0;
  }

  #class-info-nav ul {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin: 0 2.4rem;
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
}

</style>
