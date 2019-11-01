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
import TheTutorLayout from '@/pages/TheTutorLayout'
import ClassTimetableSearchMobile from '@/pages/class-purchase/ClassSearchMobile'
import $ from 'jquery'
import ClassTimetableMobileComponent from '@/pages/class-purchase/ClassResultMobile'

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
          const data_b2c = {
            'courses': [
              {
                'cls_dtl_id': 153,
                'start_day_name': '월요일',
                'start_day': 'WD1001',
                'time_index': 0,
                'subject': 'SJ1003',
                'program_name': '1학년 수학',
                'start_class_date': '11.04',
                'start_time': '17',
                'tutor_name': '전길',
                'during_time': '50',
                'grade': 'GD1001',
                'cls_user_mem_cnt': 4,
                'day_index': '1',
                'next_class_date': '10.29',
                'seq': 1,
                'group_seq': 1911,
              },
              {
                'cls_dtl_id': 189,
                'start_day_name': '목요일',
                'start_day': 'WD1004',
                'time_index': 0,
                'subject': 'SJ1003',
                'program_name': '1학년 수학',
                'start_class_date': '11.07',
                'start_time': '17',
                'tutor_name': '전길',
                'during_time': '50',
                'grade': 'GD1001',
                'cls_user_mem_cnt': 4,
                'day_index': '4',
                'seq': 1,
                'group_seq': 1911,
              },
              {
                'cls_dtl_id': 201,
                'start_day_name': '수요일',
                'start_day': 'WD1003',
                'time_index': 1,
                'subject': 'SJ1003',
                'program_name': '1학년 수학',
                'start_class_date': '11.06',
                'start_time': '18',
                'tutor_name': '전길',
                'during_time': '50',
                'grade': 'GD1001',
                'cls_user_mem_cnt': 4,
                'day_index': '3',
                'next_class_date': '11.06',
                'seq': 1,
                'group_seq': 1911,
              },
            ],
          }
          /*          const data = {
                      'courses': [{
                        'id': 19352,
                        'name': '[11월 수학] 1학년 수 20:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.06',
                        'course_duration': '19.11.06 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 306225, 'name': '이소미 ', 'domain': '2teacher', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1433/%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1433/thumb_%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1433/mobile_%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-06T20:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18865,
                        'name': '[11월 수학] 1학년 토 10:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.02',
                        'course_duration': '19.11.02 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 149821, 'name': '김지혜', 'domain': 'somedaysjh', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/77/KakaoTalk_20190811_220856402__2_.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/77/thumb_KakaoTalk_20190811_220856402__2_.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/77/mobile_KakaoTalk_20190811_220856402__2_.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-02T10:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18830,
                        'name': '[11월 수학] 1학년 목 17:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.07',
                        'course_duration': '19.11.07 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 149821, 'name': '김지혜', 'domain': 'somedaysjh', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/77/KakaoTalk_20190811_220856402__2_.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/77/thumb_KakaoTalk_20190811_220856402__2_.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/77/mobile_KakaoTalk_20190811_220856402__2_.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-07T17:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18833,
                        'name': '[11월 수학] 1학년 목 18:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.07',
                        'course_duration': '19.11.07 ~ 19.11.30',
                        'remain_count': 2,
                        'course_teacher': { 'user_id': 306631, 'name': '정경훈', 'domain': 'jkh889211', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1449/3472406648377261344_20190725192552662.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1449/thumb_3472406648377261344_20190725192552662.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1449/mobile_3472406648377261344_20190725192552662.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-07T18:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18837,
                        'name': '[11월 수학] 1학년 목 18:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.07',
                        'course_duration': '19.11.07 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 234274, 'name': '윤미정', 'domain': 'ippny747', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/582/2--3-.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/582/thumb_2--3-.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/582/mobile_2--3-.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-07T18:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18838,
                        'name': '[11월 수학] 1학년 목 19:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.07',
                        'course_duration': '19.11.07 ~ 19.11.30',
                        'remain_count': 4,
                        'course_teacher': { 'user_id': 298979, 'name': '박하정', 'domain': 'phj8446', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1332/%EB%B0%95%ED%95%98%EC%A0%9512.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1332/thumb_%EB%B0%95%ED%95%98%EC%A0%9512.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1332/mobile_%EB%B0%95%ED%95%98%EC%A0%9512.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-07T19:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18839,
                        'name': '[11월 수학] 1학년 목 19:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.07',
                        'course_duration': '19.11.07 ~ 19.11.30',
                        'remain_count': 2,
                        'course_teacher': { 'user_id': 306311, 'name': '고금순', 'domain': 'babara549158', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1461/KakaoTalk_20190830_105910065.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1461/thumb_KakaoTalk_20190830_105910065.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1461/mobile_KakaoTalk_20190830_105910065.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-07T19:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18840,
                        'name': '[11월 수학] 1학년 목 19:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.07',
                        'course_duration': '19.11.07 ~ 19.11.30',
                        'remain_count': 2,
                        'course_teacher': { 'user_id': 302889, 'name': '최민정', 'domain': 'cmj6363', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1395/untitled.png', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1395/thumb_untitled.png' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1395/mobile_untitled.png' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-07T19:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18841,
                        'name': '[11월 수학] 1학년 목 19:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.07',
                        'course_duration': '19.11.07 ~ 19.11.30',
                        'remain_count': 4,
                        'course_teacher': { 'user_id': 306225, 'name': '이소미 ', 'domain': '2teacher', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1433/%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1433/thumb_%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1433/mobile_%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-07T19:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18843,
                        'name': '[11월 수학] 1학년 목 20:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.07',
                        'course_duration': '19.11.07 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 149821, 'name': '김지혜', 'domain': 'somedaysjh', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/77/KakaoTalk_20190811_220856402__2_.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/77/thumb_KakaoTalk_20190811_220856402__2_.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/77/mobile_KakaoTalk_20190811_220856402__2_.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-07T20:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18846,
                        'name': '[11월 수학] 1학년 목 20:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.07',
                        'course_duration': '19.11.07 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 303830, 'name': '김단비', 'domain': 'ekswnd', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1415/%EB%8B%A8%EB%B9%84__2_.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1415/thumb_%EB%8B%A8%EB%B9%84__2_.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1415/mobile_%EB%8B%A8%EB%B9%84__2_.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-07T20:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18848,
                        'name': '[11월 수학] 1학년 목 20:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.07',
                        'course_duration': '19.11.07 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 301617, 'name': '권효준', 'domain': 'hjun1220', 'avatar': { 'url': null, 'thumb': { 'url': null }, 'mobile': { 'url': null } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-07T20:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18849,
                        'name': '[11월 수학] 1학년 목 21:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.07',
                        'course_duration': '19.11.07 ~ 19.11.30',
                        'remain_count': 3,
                        'course_teacher': { 'user_id': 298979, 'name': '박하정', 'domain': 'phj8446', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1332/%EB%B0%95%ED%95%98%EC%A0%9512.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1332/thumb_%EB%B0%95%ED%95%98%EC%A0%9512.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1332/mobile_%EB%B0%95%ED%95%98%EC%A0%9512.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-07T21:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18808,
                        'name': '[11월 수학] 1학년 수 17:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.06',
                        'course_duration': '19.11.06 ~ 19.11.30',
                        'remain_count': 2,
                        'course_teacher': {
                          'user_id': 310546,
                          'name': '손진아',
                          'domain': 'sjina0304',
                          'avatar': {
                            'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1535/%EC%86%90%EC%A7%84%EC%95%84_%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84.jpg',
                            'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1535/thumb_%EC%86%90%EC%A7%84%EC%95%84_%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84.jpg' },
                            'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1535/mobile_%EC%86%90%EC%A7%84%EC%95%84_%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84.jpg' }
                          }
                        },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-06T17:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18810,
                        'name': '[11월 수학] 1학년 수 17:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.06',
                        'course_duration': '19.11.06 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 263675, 'name': '박지은', 'domain': 'audrb08', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/930/KakaoTalk_20190412_153703768.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/930/thumb_KakaoTalk_20190412_153703768.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/930/mobile_KakaoTalk_20190412_153703768.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-06T17:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18811,
                        'name': '[11월 수학] 1학년 수 18:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.06',
                        'course_duration': '19.11.06 ~ 19.11.30',
                        'remain_count': 2,
                        'course_teacher': {
                          'user_id': 309331,
                          'name': '신하윤',
                          'domain': 'tdt020',
                          'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1533/%ED%8A%9C%ED%84%B0%EC%9A%A9_%EC%82%AC%EC%A7%84.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1533/thumb_%ED%8A%9C%ED%84%B0%EC%9A%A9_%EC%82%AC%EC%A7%84.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1533/mobile_%ED%8A%9C%ED%84%B0%EC%9A%A9_%EC%82%AC%EC%A7%84.jpg' } }
                        },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-06T18:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18814,
                        'name': '[11월 수학] 1학년 수 18:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.06',
                        'course_duration': '19.11.06 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 302816, 'name': '윤현식', 'domain': 'yoonhs0502', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1399/KakaoTalk_20190729_141037619.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1399/thumb_KakaoTalk_20190729_141037619.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1399/mobile_KakaoTalk_20190729_141037619.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-06T18:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18816,
                        'name': '[11월 수학] 1학년 수 19:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.06',
                        'course_duration': '19.11.06 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 234274, 'name': '윤미정', 'domain': 'ippny747', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/582/2--3-.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/582/thumb_2--3-.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/582/mobile_2--3-.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-06T19:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18817,
                        'name': '[11월 수학] 1학년 수 19:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.06',
                        'course_duration': '19.11.06 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': {
                          'user_id': 309331,
                          'name': '신하윤',
                          'domain': 'tdt020',
                          'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1533/%ED%8A%9C%ED%84%B0%EC%9A%A9_%EC%82%AC%EC%A7%84.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1533/thumb_%ED%8A%9C%ED%84%B0%EC%9A%A9_%EC%82%AC%EC%A7%84.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1533/mobile_%ED%8A%9C%ED%84%B0%EC%9A%A9_%EC%82%AC%EC%A7%84.jpg' } }
                        },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-06T19:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18819,
                        'name': '[11월 수학] 1학년 수 19:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.06',
                        'course_duration': '19.11.06 ~ 19.11.30',
                        'remain_count': 4,
                        'course_teacher': { 'user_id': 306225, 'name': '이소미 ', 'domain': '2teacher', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1433/%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1433/thumb_%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1433/mobile_%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-06T19:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18820,
                        'name': '[11월 수학] 1학년 수 19:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.06',
                        'course_duration': '19.11.06 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 263675, 'name': '박지은', 'domain': 'audrb08', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/930/KakaoTalk_20190412_153703768.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/930/thumb_KakaoTalk_20190412_153703768.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/930/mobile_KakaoTalk_20190412_153703768.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-06T19:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18822,
                        'name': '[11월 수학] 1학년 수 19:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.06',
                        'course_duration': '19.11.06 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 275292, 'name': '조원태', 'domain': 'wt10003', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/984/%EC%A1%B0%EC%9B%90%ED%83%9C%EB%8B%98-1.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/984/thumb_%EC%A1%B0%EC%9B%90%ED%83%9C%EB%8B%98-1.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/984/mobile_%EC%A1%B0%EC%9B%90%ED%83%9C%EB%8B%98-1.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-06T19:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18823,
                        'name': '[11월 수학] 1학년 수 20:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.06',
                        'course_duration': '19.11.06 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 306311, 'name': '고금순', 'domain': 'babara549158', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1461/KakaoTalk_20190830_105910065.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1461/thumb_KakaoTalk_20190830_105910065.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1461/mobile_KakaoTalk_20190830_105910065.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-06T20:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18826,
                        'name': '[11월 수학] 1학년 수 20:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.06',
                        'course_duration': '19.11.06 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 272469, 'name': '김선혁', 'domain': 'monian', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/924/KakaoTalk_20190521_174820222.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/924/thumb_KakaoTalk_20190521_174820222.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/924/mobile_KakaoTalk_20190521_174820222.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-06T20:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18827,
                        'name': '[11월 수학] 1학년 수 21:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.06',
                        'course_duration': '19.11.06 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 302339, 'name': '최다혜', 'domain': 'stacker', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1393/dahye.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1393/thumb_dahye.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1393/mobile_dahye.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-06T21:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18829,
                        'name': '[11월 수학] 1학년 수 21:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.06',
                        'course_duration': '19.11.06 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 307485, 'name': '임유원', 'domain': 'youwon1121', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1464/KakaoTalk_20190824_234544663.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1464/thumb_KakaoTalk_20190824_234544663.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1464/mobile_KakaoTalk_20190824_234544663.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-06T21:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18792,
                        'name': '[11월 수학] 1학년 화 17:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.05',
                        'course_duration': '19.11.05 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 292934, 'name': '정 샘', 'domain': 'coconamu', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1225/CROP_20191018_101309.JPG', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1225/thumb_CROP_20191018_101309.JPG' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1225/mobile_CROP_20191018_101309.JPG' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-05T17:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18794,
                        'name': '[11월 수학] 1학년 화 18:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.05',
                        'course_duration': '19.11.05 ~ 19.11.30',
                        'remain_count': 2,
                        'course_teacher': { 'user_id': 242336, 'name': '김윤희', 'domain': 'writeright', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/562/a.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/562/thumb_a.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/562/mobile_a.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-05T18:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18796,
                        'name': '[11월 수학] 1학년 화 18:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.05',
                        'course_duration': '19.11.05 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 303830, 'name': '김단비', 'domain': 'ekswnd', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1415/%EB%8B%A8%EB%B9%84__2_.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1415/thumb_%EB%8B%A8%EB%B9%84__2_.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1415/mobile_%EB%8B%A8%EB%B9%84__2_.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-05T18:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18797,
                        'name': '[11월 수학] 1학년 화 19:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.05',
                        'course_duration': '19.11.05 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 301645, 'name': '신경영', 'domain': 'brainyoung3', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1392/KakaoTalk_Photo_2019-10-26-21-32-58.jpeg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1392/thumb_KakaoTalk_Photo_2019-10-26-21-32-58.jpeg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1392/mobile_KakaoTalk_Photo_2019-10-26-21-32-58.jpeg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-05T19:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18799,
                        'name': '[11월 수학] 1학년 화 19:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.05',
                        'course_duration': '19.11.05 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 231051, 'name': '김성종', 'domain': 'sjkim1382', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/581/%EA%B9%80%EC%84%B1%EC%A2%85.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/581/thumb_%EA%B9%80%EC%84%B1%EC%A2%85.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/581/mobile_%EA%B9%80%EC%84%B1%EC%A2%85.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-05T19:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18800,
                        'name': '[11월 수학] 1학년 화 19:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.05',
                        'course_duration': '19.11.05 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 303830, 'name': '김단비', 'domain': 'ekswnd', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1415/%EB%8B%A8%EB%B9%84__2_.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1415/thumb_%EB%8B%A8%EB%B9%84__2_.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1415/mobile_%EB%8B%A8%EB%B9%84__2_.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-05T19:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18801,
                        'name': '[11월 수학] 1학년 화 19:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.05',
                        'course_duration': '19.11.05 ~ 19.11.30',
                        'remain_count': 4,
                        'course_teacher': {
                          'user_id': 312081,
                          'name': '서수지',
                          'domain': 'dhfpswl103',
                          'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1536/%EC%9D%B4%EB%A0%A5%EC%84%9C%EC%82%AC%EC%A7%84.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1536/thumb_%EC%9D%B4%EB%A0%A5%EC%84%9C%EC%82%AC%EC%A7%84.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1536/mobile_%EC%9D%B4%EB%A0%A5%EC%84%9C%EC%82%AC%EC%A7%84.jpg' } }
                        },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-05T19:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18802,
                        'name': '[11월 수학] 1학년 화 20:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.05',
                        'course_duration': '19.11.05 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 301617, 'name': '권효준', 'domain': 'hjun1220', 'avatar': { 'url': null, 'thumb': { 'url': null }, 'mobile': { 'url': null } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-05T20:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18804,
                        'name': '[11월 수학] 1학년 화 20:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.05',
                        'course_duration': '19.11.05 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 306631, 'name': '정경훈', 'domain': 'jkh889211', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1449/3472406648377261344_20190725192552662.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1449/thumb_3472406648377261344_20190725192552662.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1449/mobile_3472406648377261344_20190725192552662.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-05T20:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18806,
                        'name': '[11월 수학] 1학년 화 21:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.05',
                        'course_duration': '19.11.05 ~ 19.11.30',
                        'remain_count': 1,
                        'course_teacher': { 'user_id': 303830, 'name': '김단비', 'domain': 'ekswnd', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1415/%EB%8B%A8%EB%B9%84__2_.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1415/thumb_%EB%8B%A8%EB%B9%84__2_.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1415/mobile_%EB%8B%A8%EB%B9%84__2_.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-05T21:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18761,
                        'name': '[11월 수학] 1학년 월 17:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.04',
                        'course_duration': '19.11.04 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 271662, 'name': '최지현 쌤', 'domain': 'osungcjh', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/896/KakaoTalk_20190819_195635116.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/896/thumb_KakaoTalk_20190819_195635116.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/896/mobile_KakaoTalk_20190819_195635116.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-04T17:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18763,
                        'name': '[11월 수학] 1학년 월 17:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.04',
                        'course_duration': '19.11.04 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 234252, 'name': '김여운', 'domain': 'rlaywoon', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1335/EBD29F34-3F0E-4DCE-8F31-B81A60EA7241.jpeg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1335/thumb_EBD29F34-3F0E-4DCE-8F31-B81A60EA7241.jpeg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1335/mobile_EBD29F34-3F0E-4DCE-8F31-B81A60EA7241.jpeg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-04T17:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18765,
                        'name': '[11월 수학] 1학년 월 17:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.04',
                        'course_duration': '19.11.04 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 150111, 'name': '이재현', 'domain': 'audtls9', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/72/KakaoTalk_20190404_174558288.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/72/thumb_KakaoTalk_20190404_174558288.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/72/mobile_KakaoTalk_20190404_174558288.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-04T17:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18766,
                        'name': '[11월 수학] 1학년 월 18:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.04',
                        'course_duration': '19.11.04 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 306330, 'name': '김미라', 'domain': 'lipolab', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1458/KakaoTalk_20190825_225705679.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1458/thumb_KakaoTalk_20190825_225705679.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1458/mobile_KakaoTalk_20190825_225705679.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-04T18:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18767,
                        'name': '[11월 수학] 1학년 월 18:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.04',
                        'course_duration': '19.11.04 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 148011, 'name': '박성준', 'domain': '12tjdwns23', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/41/%EB%B0%95%EC%84%B1%EC%A4%803.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/41/thumb_%EB%B0%95%EC%84%B1%EC%A4%803.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/41/mobile_%EB%B0%95%EC%84%B1%EC%A4%803.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-04T18:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18768,
                        'name': '[11월 수학] 1학년 월 18:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.04',
                        'course_duration': '19.11.04 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': {
                          'user_id': 294075,
                          'name': '이준성 선생님',
                          'domain': 'keepitsimple',
                          'avatar': {
                            'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1195/_190619_%EC%88%98__%EC%9D%B4%EC%A4%80%EC%84%B1_%EC%82%AC%EC%A7%84.JPG',
                            'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1195/thumb__190619_%EC%88%98__%EC%9D%B4%EC%A4%80%EC%84%B1_%EC%82%AC%EC%A7%84.JPG' },
                            'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1195/mobile__190619_%EC%88%98__%EC%9D%B4%EC%A4%80%EC%84%B1_%EC%82%AC%EC%A7%84.JPG' }
                          }
                        },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-04T18:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18769,
                        'name': '[11월 수학] 1학년 월 18:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.04',
                        'course_duration': '19.11.04 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 272469, 'name': '김선혁', 'domain': 'monian', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/924/KakaoTalk_20190521_174820222.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/924/thumb_KakaoTalk_20190521_174820222.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/924/mobile_KakaoTalk_20190521_174820222.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-04T18:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18770,
                        'name': '[11월 수학] 1학년 월 19:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.04',
                        'course_duration': '19.11.04 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 147853, 'name': '위 쌤', 'domain': 'seretsm', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/81/KakaoTalk_20190310_130148762.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/81/thumb_KakaoTalk_20190310_130148762.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/81/mobile_KakaoTalk_20190310_130148762.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-04T19:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18772,
                        'name': '[11월 수학] 1학년 월 19:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.04',
                        'course_duration': '19.11.04 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 302889, 'name': '최민정', 'domain': 'cmj6363', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1395/untitled.png', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1395/thumb_untitled.png' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1395/mobile_untitled.png' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-04T19:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18773,
                        'name': '[11월 수학] 1학년 월 19:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.04',
                        'course_duration': '19.11.04 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 259823, 'name': '이향숙', 'domain': 'ddolddol02', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/843/tutor-2.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/843/thumb_tutor-2.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/843/mobile_tutor-2.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-04T19:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18774,
                        'name': '[11월 수학] 1학년 월 19:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.04',
                        'course_duration': '19.11.04 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 275292, 'name': '조원태', 'domain': 'wt10003', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/984/%EC%A1%B0%EC%9B%90%ED%83%9C%EB%8B%98-1.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/984/thumb_%EC%A1%B0%EC%9B%90%ED%83%9C%EB%8B%98-1.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/984/mobile_%EC%A1%B0%EC%9B%90%ED%83%9C%EB%8B%98-1.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-04T19:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18775,
                        'name': '[11월 수학] 1학년 월 19:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.04',
                        'course_duration': '19.11.04 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': {
                          'user_id': 294075,
                          'name': '이준성 선생님',
                          'domain': 'keepitsimple',
                          'avatar': {
                            'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1195/_190619_%EC%88%98__%EC%9D%B4%EC%A4%80%EC%84%B1_%EC%82%AC%EC%A7%84.JPG',
                            'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1195/thumb__190619_%EC%88%98__%EC%9D%B4%EC%A4%80%EC%84%B1_%EC%82%AC%EC%A7%84.JPG' },
                            'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1195/mobile__190619_%EC%88%98__%EC%9D%B4%EC%A4%80%EC%84%B1_%EC%82%AC%EC%A7%84.JPG' }
                          }
                        },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-04T19:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18776,
                        'name': '[11월 수학] 1학년 월 19:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.04',
                        'course_duration': '19.11.04 ~ 19.11.30',
                        'remain_count': 4,
                        'course_teacher': { 'user_id': 306311, 'name': '고금순', 'domain': 'babara549158', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1461/KakaoTalk_20190830_105910065.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1461/thumb_KakaoTalk_20190830_105910065.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1461/mobile_KakaoTalk_20190830_105910065.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-04T19:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18777,
                        'name': '[11월 수학] 1학년 월 20:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.04',
                        'course_duration': '19.11.04 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 231051, 'name': '김성종', 'domain': 'sjkim1382', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/581/%EA%B9%80%EC%84%B1%EC%A2%85.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/581/thumb_%EA%B9%80%EC%84%B1%EC%A2%85.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/581/mobile_%EA%B9%80%EC%84%B1%EC%A2%85.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-04T20:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18781,
                        'name': '[11월 수학] 1학년 월 20:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.04',
                        'course_duration': '19.11.04 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': {
                          'user_id': 308603,
                          'name': '변정연',
                          'domain': 'jung-movie',
                          'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1487/KakaoTalk_2017-12-14-03-45-34_Photo_47.jpeg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1487/thumb_KakaoTalk_2017-12-14-03-45-34_Photo_47.jpeg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1487/mobile_KakaoTalk_2017-12-14-03-45-34_Photo_47.jpeg' } }
                        },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-04T20:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18782,
                        'name': '[11월 수학] 1학년 월 20:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.04',
                        'course_duration': '19.11.04 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 301617, 'name': '권효준', 'domain': 'hjun1220', 'avatar': { 'url': null, 'thumb': { 'url': null }, 'mobile': { 'url': null } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-04T20:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18783,
                        'name': '[11월 수학] 1학년 월 20:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.04',
                        'course_duration': '19.11.04 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': {
                          'user_id': 310486,
                          'name': '최우영',
                          'domain': 'coach-with-owl',
                          'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1519/KakaoTalk_Photo_2019-08-28-00-03-18.jpeg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1519/thumb_KakaoTalk_Photo_2019-08-28-00-03-18.jpeg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1519/mobile_KakaoTalk_Photo_2019-08-28-00-03-18.jpeg' } }
                        },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-04T20:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18784,
                        'name': '[11월 수학] 1학년 월 20:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.04',
                        'course_duration': '19.11.04 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 262345, 'name': '엄현지', 'domain': 'skyehj137', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/887/44.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/887/thumb_44.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/887/mobile_44.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-04T20:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18785,
                        'name': '[11월 수학] 1학년 월 20:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.04',
                        'course_duration': '19.11.04 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 304692, 'name': '이선영', 'domain': 'psyche2007', 'avatar': { 'url': null, 'thumb': { 'url': null }, 'mobile': { 'url': null } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-04T20:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18786,
                        'name': '[11월 수학] 1학년 월 21:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.04',
                        'course_duration': '19.11.04 ~ 19.11.30',
                        'remain_count': 2,
                        'course_teacher': { 'user_id': 304692, 'name': '이선영', 'domain': 'psyche2007', 'avatar': { 'url': null, 'thumb': { 'url': null }, 'mobile': { 'url': null } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-04T21:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18864,
                        'name': '[11월 수학] 1학년 금 21:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.01',
                        'course_duration': '19.11.01 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 306644, 'name': '정한별', 'domain': 'hstar5817', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1450/KakaoTalk_20190823_004259889.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1450/thumb_KakaoTalk_20190823_004259889.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1450/mobile_KakaoTalk_20190823_004259889.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-01T21:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18863,
                        'name': '[11월 수학] 1학년 금 20:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.01',
                        'course_duration': '19.11.01 ~ 19.11.30',
                        'remain_count': 1,
                        'course_teacher': { 'user_id': 298979, 'name': '박하정', 'domain': 'phj8446', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1332/%EB%B0%95%ED%95%98%EC%A0%9512.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1332/thumb_%EB%B0%95%ED%95%98%EC%A0%9512.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1332/mobile_%EB%B0%95%ED%95%98%EC%A0%9512.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-01T20:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18861,
                        'name': '[11월 수학] 1학년 금 20:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.01',
                        'course_duration': '19.11.01 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 300263, 'name': '양미나', 'domain': 'minassam', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1313/20190709_211556.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1313/thumb_20190709_211556.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1313/mobile_20190709_211556.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-01T20:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18860,
                        'name': '[11월 수학] 1학년 금 19:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.01',
                        'course_duration': '19.11.01 ~ 19.11.30',
                        'remain_count': 3,
                        'course_teacher': { 'user_id': 306644, 'name': '정한별', 'domain': 'hstar5817', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1450/KakaoTalk_20190823_004259889.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1450/thumb_KakaoTalk_20190823_004259889.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1450/mobile_KakaoTalk_20190823_004259889.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-01T19:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18858,
                        'name': '[11월 수학] 1학년 금 19:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.01',
                        'course_duration': '19.11.01 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 304310, 'name': '황혜민', 'domain': 'hhm0820', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1412/KakaoTalk_20190729_120718702_01.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1412/thumb_KakaoTalk_20190729_120718702_01.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1412/mobile_KakaoTalk_20190729_120718702_01.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-01T19:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18857,
                        'name': '[11월 수학] 1학년 금 18:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.01',
                        'course_duration': '19.11.01 ~ 19.11.30',
                        'remain_count': 1,
                        'course_teacher': { 'user_id': 234252, 'name': '김여운', 'domain': 'rlaywoon', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1335/EBD29F34-3F0E-4DCE-8F31-B81A60EA7241.jpeg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1335/thumb_EBD29F34-3F0E-4DCE-8F31-B81A60EA7241.jpeg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1335/mobile_EBD29F34-3F0E-4DCE-8F31-B81A60EA7241.jpeg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-01T18:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18855,
                        'name': '[11월 수학] 1학년 금 18:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.01',
                        'course_duration': '19.11.01 ~ 19.11.30',
                        'remain_count': 4,
                        'course_teacher': { 'user_id': 303914, 'name': '이화경', 'domain': 'lhk2946', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1446/AirBrush_20190811165507.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1446/thumb_AirBrush_20190811165507.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1446/mobile_AirBrush_20190811165507.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-01T18:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18854,
                        'name': '[11월 수학] 1학년 금 17:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.01',
                        'course_duration': '19.11.01 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 148011, 'name': '박성준', 'domain': '12tjdwns23', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/41/%EB%B0%95%EC%84%B1%EC%A4%803.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/41/thumb_%EB%B0%95%EC%84%B1%EC%A4%803.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/41/mobile_%EB%B0%95%EC%84%B1%EC%A4%803.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-01T17:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18853,
                        'name': '[11월 수학] 1학년 금 17:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.01',
                        'course_duration': '19.11.01 ~ 19.11.30',
                        'remain_count': 3,
                        'course_teacher': { 'user_id': 234252, 'name': '김여운', 'domain': 'rlaywoon', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1335/EBD29F34-3F0E-4DCE-8F31-B81A60EA7241.jpeg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1335/thumb_EBD29F34-3F0E-4DCE-8F31-B81A60EA7241.jpeg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/1335/mobile_EBD29F34-3F0E-4DCE-8F31-B81A60EA7241.jpeg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-01T17:00:00.000+09:00',
                        'is_trial': false
                      }, {
                        'id': 18851,
                        'name': '[11월 수학] 1학년 금 17:00 (50분수업)',
                        'price': 55000,
                        'step_count': '총 4 회',
                        'enroll_duration': '19.10.11 ~ 19.11.01',
                        'course_duration': '19.11.01 ~ 19.11.30',
                        'remain_count': 0,
                        'course_teacher': { 'user_id': 242336, 'name': '김윤희', 'domain': 'writeright', 'avatar': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/562/a.jpg', 'thumb': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/562/thumb_a.jpg' }, 'mobile': { 'url': 'https://st-kr-tutor.s3.amazonaws.com/uploads/teacher/avatar/562/mobile_a.jpg' } } },
                        'category': '초등\u003e일간대치동',
                        'subject': '수학',
                        'goal': '개념완성',
                        'target': '초등\u003e초1',
                        'first_step_time': '2019-11-01T17:00:00.000+09:00',
                        'is_trial': false
                      }]
                    }*/
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
                      data: {
                        'grade_id': 'GD1001',
                        'subject_id': 'SJ1003'
                      },
                      headers: {
                        Accepts: '*!/!*',
                        'Content-Type': 'application/json; charset=utf8'
                      }
                    }).done(function () {
                    })*/

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

