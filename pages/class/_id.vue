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
    <ul v-for="v in subPages">
      <li>
        <nuxt-link :to="`${v.to}`">
          {{v.label}}
        </nuxt-link>
      </li>
    </ul>
    <nuxt-child />
    <!--    <the-class-footer :page="page.footer"/>-->
  </article>
</template>
<script>
import TheClassHeader from '@/components/class/TheClassHeader'
import { getClasses } from '../../store/class-info'
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
      ]
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
          heading: '교재',
          paragraph: this.theClass.book.type,
        },
        {
          heading: '수강기간',
          paragraph: `${this.date(this.theClass.schedule[0].start)}~${this.date(this.theClass.schedule[this.theClass.schedule.length - 1].end)}`

        },
        {
          heading: '모집인원',
          paragraph: `${this.theClass.recuritment.personal.start}~${this.theClass.recuritment.personal.end}`,
        },
        {
          heading: '모집기간',
          paragraph: `${this.date(this.theClass.recuritment.period.start)}~${this.date(this.theClass.recuritment.period.end)}`,
        },
      ]
    },
  }
}
</script>

<style scoped lang=scss>
@import 'destyle.css';

.class-info {
  font-size: 2rem;
}
</style>
