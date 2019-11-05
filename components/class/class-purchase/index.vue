<template>
  <TheTutorLayout id="class-purchase">
    <div class="class-timetable-search-section mobile">
      <div>
        <div class="got-style mobile-got-style elementary">
          <div class="mobile-container">
            <div class="class-timetable-search-section mobile">
              <div class="content-box">
                <div class="timetable-search-section">
                  <div class="search-box">
                    <class-timetable-search-mobile
                      @classReserveQuery="getChildMessage"
                      @chooseSearchButton="clearResult"
                    ></class-timetable-search-mobile>
                    <button class="btn-timetable-search" @click="checkSelectedData">검색</button>
                  </div>
                  <div class="result-box" v-if="this.weekOfDayData.courses.length > 0">
                    <h3 class="tit-class-timetable">
                      <span>STEP 04</span>시간 선택
                    </h3>
                    <p class="txt-no-result" v-if="this.weekOfDayData.courses.length <= 0">검색 결과가 없습니다.</p>
                    <class-timetable-mobile-component
                      :courseList="this.weekOfDayData"
                      @classReserveOnPopup="setPopupMessage"
                    ></class-timetable-mobile-component>
                  </div>
                  <div
                    class="result-box text-center"
                    v-if="this.weekOfDayData.courses.length <= 0"
                  >검색 결과가 없습니다
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </TheTutorLayout>
</template>

<script>
import TheTutorLayout from '@/components/layout/TheTutorLayout'
import ClassTimetableSearchMobile from '@/components/class/class-purchase/ClassSearchMobile'
import $ from 'jquery'
import ClassTimetableMobileComponent from '@/components/class/class-purchase/ClassResultMobile'

export default {
  name: 'elementary-class-reserve-mobile-screen',
  props: {},
  components: {
    ClassTimetableMobileComponent,
    TheTutorLayout,
    ClassTimetableSearchMobile,
  },
  methods: {
    clearResult: function () {
      this.searchResult.splice(0, this.searchResult.length)
    },
    setPopupMessage: function (course_id) {
      const popupInfoData = this.searchResult.map(subject => subject.courses.find(c => c.id === course_id)).
        filter(e => e)[0]
      if (popupInfoData) {
        const popupData = {
          courseId: popupInfoData.id + '',
          coursePrice: popupInfoData.price + '',
          remainCount: popupInfoData.remain_count + '',
          teacherDomain: popupInfoData.course_teacher.domain,
          thumbnail: popupInfoData.course_teacher.avatar.url,
          tutorName: popupInfoData.course_teacher.name,
          is_trial: popupInfoData.is_trial,
        }
        this.classPopupInfo = popupData
      }
    },

    getChildMessage: function (arr) {
      this.checkArr = arr
    },
    checkSelectedData: function () {
      this.searchResult.splice(0, this.searchResult.length)
      let makeQuery = this.checkArr
      if (makeQuery.target.length == 0 && makeQuery.subject.length == 0) {
        alert('학년과 과목을 선택해주세요')
        return false
      } else if (
        (makeQuery.target.length == 0 && makeQuery.subject.length != 0) ||
        (makeQuery.target.length == 0 && makeQuery.dayofweek.length != 0)
      ) {
        alert('학년을 선택해주세요')
        return false
      } else if (
        (makeQuery['subject'].indexOf('32') != -1 &&
          makeQuery['target'].indexOf('34') != -1) ||
        (makeQuery['subject'].indexOf('32') != -1 &&
          makeQuery['target'].indexOf('35') != -1)
      ) {
        alert('사회/과학 수업은 <3학년>, <4학년>만 신청가능 합니다.')
        return false
      } else if (
        (makeQuery.subject.length == 0 && makeQuery.target.length != 0) ||
        (makeQuery.subject.length == 0 && makeQuery.dayofweek.length != 0)
      ) {
        alert('과목을 선택해주세요')
        return false
      } else if (
        (makeQuery.dayofweek.length == 0 && makeQuery.target.length != 0) ||
        (makeQuery.dayofweek.length == 0 && makeQuery.subject.length != 0)
      ) {
        alert('요일을 선택해주세요')
      } else {
        this.target = makeQuery['target'].toString()
        this.subject = makeQuery['subject'].toString()
        this.dayofweek = makeQuery['dayofweek'].toString()
        // this.getQueryUrl = "http://localhost:3000/search";

        this.subject = makeQuery['subject'].toString()
        this.target = makeQuery['target'].toString()
        const subjects = makeQuery['subject']
        const root = this.root
        const target = this.target
        const searchResult = this.searchResult
        // const subjectList = this.subjectList;
        for (const subject of subjects) {

          const data = {}
          data.courses = data_b2c.courses.map(function (v) {
            const [month, day] = v.start_class_date.split('.')
            return {
              id: v.cls_dtl_id,
              name: v.program_name,
              price: '',
              step_count: '',
              enroll_duration: '',
              course_duration: '',
              remain_count: '',
              course_teacher: {
                user_id: '',
                name: v.tutor_name,
              },
              category: '',
              subject: v.program_name,
              goal: '',
              target: '',
              first_step_time: `2019-${month}-${day}T${v.start_time}:00:00+09:00`,
              is_trial: '',
            }
          })
          let filterTimeNull = data.courses.filter(function (k) {
            return k.first_step_time != null
          })
          // const subjectInfo = subjectList.find(
          //   l => l.value === parseInt(subject)
          // );
          if (filterTimeNull.length == 0) {
            console.warn('클래스 예약 검색에 대한 서버 응답 결과가 0입니다.')
            searchResult.push({
              subject: subject,
              courses: [],
              order: 99999,
            })
          } else {
            searchResult.push({
              subject: subject,
              courses: filterTimeNull,
              order: 99999,
            })
          }
          searchResult.sort((before, after) => before.order - after.order)
          const query = 'https://qa-got.conects.com/elementary/class/apply/schedule/list'
/*          $.ajax({
            type: 'POST',
            url: query,
            dataType: 'json',
            data: JSON.stringify({
              'grade_id': 'GD1001',
              'subject_id': 'SJ1003'
            }),
            contentType: "application/json",
            headers: {
              Accepts: '*!/!*',
              'Content-Type': 'application/json; charset=utf8'
            }
          })*/
/*
          $.ajax({
            type: 'get',
            url: 'https://httpbin.org/get',
          }).done(function(data){
             console.log(data)
          })
*/
        }
      }
    },
  },
  data () {
    return {
      modal_uuid: 'mobile-class-confirm',
      q: '',
      root: 'jr',
      category: null,
      subject: '',
      target: '',
      classPopupInfo: {
        courseId: '',
        coursePrice: '',
        tutorName: '',
        remainCount: '',
        teacherDomain: '',
        thumbnail: '',
        is_trial: false,
      },
      courseData: {
        courses: [],
      },
      checkArr: {
        target: [],
        subject: [],
      },
      searchResult: [],
      classList: [],
      result: [],
      isActiveTarget: false,
      isActiveSubject: false,
      isActiveDay: false,
      targetList: [
        // { name: "예비초등", text: "예비초1", value: 75 },
        { name: '초1', text: '1학년', value: 34 },
        { name: '초2', text: '2학년', value: 35 },
        { name: '초3', text: '3학년', value: 36 },
        { name: '초4', text: '4학년', value: 37 },
      ],
      subjectList: [
        { name: '국어', text: '국어', value: 29 },
        // { name: "영어", text: "영어", value: 30 },
        { name: '수학', text: '수학', value: 31 },
        { name: '사회/과학', text: '사회/과학', value: '32' },
      ],
      dayOfWeekList: [
        // { name: "일요일", text: "일", value: 1 },
        { name: '월요일', text: '월', value: 2 },
        { name: '화요일', text: '화', value: 3 },
        { name: '수요일', text: '수', value: 4 },
        { name: '목요일', text: '목', value: 5 },
        { name: '금요일', text: '금', value: 6 },
        // { name: "토요일", text: "토", value: 7 }
      ],
    }
  },
  computed: {
    weekOfDayData: function () {
      let target = this.searchResult.length > 0 ? this.searchResult[0] : null
      let resultCourses = { subject: 0, courses: [], order: 99999 }
      if (target) {
        resultCourses.order = 99999
        resultCourses.courses = target.courses.map(c => {
          if (!c.first_step_time) {
            return null
          }
          const date = new Date(c.first_step_time)
          if (
            this.checkArr.dayofweek &&
            this.checkArr.dayofweek.length > 0 &&
            this.checkArr.dayofweek[0].split(',').includes(date.getDay() + 1 + '')
          ) {
            return c
          }
          return null
        }).filter(e => e)
      }
      return resultCourses
    },
  },
  created () {
  },
  mounted () {},
}

</script>
<style lang="scss">
/*@import "./assets/application.css";*/
/*@import "./assets/tutor.css";*/
</style>

