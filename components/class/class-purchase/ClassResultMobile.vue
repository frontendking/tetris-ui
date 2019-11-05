<template>
  <div>
    <div class="timetable-result-section">
      <table>
        <colgroup>
          <col style="width:33.33333%">
          <col style="width:66.66666%">
        </colgroup>
        <tbody>
          <tr v-for="(timeLine, index) in timeLine" :key="index">
            <th scope="row">{{ timeLine.time }}</th>
            <td
              v-for="(classResult, idx) in classResult"
              :key="idx"
              v-if="classResult.class.length > 0"
            >
              <div
                v-for="(itemClass, idxClass) in classResult.class"
                :key="idxClass"
                v-if="classResult.class[idxClass].time == timeLine.time"
              >
                <a
                  class="btn-class-teacher-popup"
                  :class="{closed : itemCourse.remain_count <= 0}"
                  data-toggle="modal"
                  v-for="(itemCourse, idxCourses) in classResult.class[idxClass].courses"
                  :key="idxCourses"
                >
                  <img
                    v-if="itemCourse.remain_count <=2 && itemCourse.remain_count > 0"
                    class="icon-deadline"
                    alt="마감임박"
                  >
                  <span>{{ itemCourse.course_teacher.name }}</span>
                  <span class="first-date">
                      {{ String(new Date(itemCourse.first_step_time).getMonth() + 1).padStart(2, "0") }}.
                      {{ String(new Date(itemCourse.first_step_time).getDate()).padStart(2, "0") }}
                    <br>수업시작
                  </span>
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "class-timetable-mobile-component",
  components: {},
  props: {
    courseList: {
      type: Object,
      default: () => {
        return { courses: [] };
      }
    },
    classInfo: {
      type: Object,
      default: () => {
        return { courses: [] };
      }
    }
  },
  data() {
    return {
      timeLine: [],
      classResult: [
        { dayofweek: 1, nameofday: "Sun", koreanname: "일", class: [] },
        { dayofweek: 2, nameofday: "Mon", koreanname: "월", class: [] },
        { dayofweek: 3, nameofday: "Tue", koreanname: "화", class: [] },
        { dayofweek: 4, nameofday: "Wed", koreanname: "수", class: [] },
        { dayofweek: 5, nameofday: "Thu", koreanname: "목", class: [] },
        { dayofweek: 6, nameofday: "Fri", koreanname: "금", class: [] },
        { dayofweek: 7, nameofday: "Sat", koreanname: "토", class: [] }
      ],
      classPopupInfo: {
        courseId: "",
        coursePrice: "",
        tutorName: "",
        remainCount: "",
        teacherDomain: "",
        thumbnail: ""
      }
    };
  },
  methods: {
    classTableResult: function() {
      let classRemake = this.courseList.courses;
      let dayNum = this.classResult.length;
      let classNum = classRemake.length;
      let getDayOfWeek = classRemake.map(dayofweek => ({
        start_time: new Date(dayofweek.first_step_time)
          .toString()
          .split(" ")[4]
          .split(":")
          .splice(0, 2)
          .join(":"),
        dayofweek: new Date(dayofweek.first_step_time).toString().split(" ")[0]
      }));
      for (let index = 0; index < classNum; index++) {
        classRemake[index].start_time = getDayOfWeek[index].start_time;
        classRemake[index].dayofweek = getDayOfWeek[index].dayofweek;
      }
      for (let day = 0; day < dayNum; day++) {
        let classResult = this.classResult;
        let classInfo = classRemake
          .filter(function(k) {
            return k.dayofweek == classResult[day].nameofday.toString();
          })
          .sort(function(a, b) {
            return (
              new Date("1970/01/01 " + a.start_time) -
              new Date("1970/01/01 " + b.start_time)
            );
          });
        let getTimeline = classInfo.map(classes => ({
          start_time: classes.start_time.toString().split(":")[0] + ":00",
          time:
            classes.start_time.toString().split(":")[0] +
            ":00" +
            " ~ " +
            (parseInt(classes.start_time.toString().split(":")[0]) == 23
              ? "00"
              : classes.start_time.toString().split(":")[0] < 8
                ? (
                    "0" +
                    (parseInt(classes.start_time.toString().split(":")[0]) + 1)
                  ).toString()
                : parseInt(classes.start_time.toString().split(":")[0]) + 1) +
            ":" +
            "00"
        }));

        for (let classNum = 0; classNum < classInfo.length; classNum++) {
          classInfo[classNum].time = getTimeline[classNum].time;
          classInfo[classNum].start_time = getTimeline[classNum].start_time;
        }
        let timeList = classInfo.map(classInfo => {
          return {
            time: classInfo.time,
            start_time: classInfo.start_time,
            courses: []
          };
        });
        this.classResult[day].class = timeList;

        for (let idx = 0; idx < classInfo.length; idx++) {
          let courses = classInfo.filter(function(k) {
            return k.start_time == classInfo[idx].start_time;
          });
          for (let coursesIdx = 0; coursesIdx < courses.length; coursesIdx++) {
            this.classResult[day].class[idx].courses.push(courses[coursesIdx]);
          }
        }
        const filtered = this.classResult[day].class.filter(function({
          time,
          start_time
        }) {
          const key = `${time}${start_time}`;
          return !this.has(key) && this.add(key);
        },
        new Set());
        this.classResult[day].class = [];
        this.classResult[day].class = filtered;
      }
    },
    makeTimeTable: function() {
      let classresult = this.classResult.filter(function(k) {
        return k.class.length != 0;
      });
      let classTimeArr = [];
      let classNum = classresult[0].class.length;
      for (let index = 0; index < classNum; index++) {
        classTimeArr.push({
          time: classresult[0].class[index].time
        });
      }
      classTimeArr.sort(function(a, b) {
        return (
          new Date("1970/01/01 " + a.time.split("~")[0]) -
          new Date("1970/01/01 " + b.time.split("~")[0])
        );
      });

      let timeArr = classTimeArr.filter(function({ time }) {
        const key = `${time}`;
        return !this.has(key) && this.add(key);
      }, new Set());

      this.timeLine = timeArr;
    },
    sendPopupData: function(course_id) {
      this.$emit("classReserveOnPopup", course_id);
    }
  },
  created() {},
  watch: {
    courseList: function() {
      this.timeLine.splice(0, this.timeLine.length);
      this.classResult = [
        { dayofweek: 1, nameofday: "Sun", koreanname: "일", class: [] },
        { dayofweek: 2, nameofday: "Mon", koreanname: "월", class: [] },
        { dayofweek: 3, nameofday: "Tue", koreanname: "화", class: [] },
        { dayofweek: 4, nameofday: "Wed", koreanname: "수", class: [] },
        { dayofweek: 5, nameofday: "Thu", koreanname: "목", class: [] },
        { dayofweek: 6, nameofday: "Fri", koreanname: "금", class: [] },
        { dayofweek: 7, nameofday: "Sat", koreanname: "토", class: [] }
      ];
    }
  },
  mounted() {
    this.classTableResult();
    this.makeTimeTable();
  }
};
</script>
