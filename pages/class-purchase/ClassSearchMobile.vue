<template>
  <div class="search-area">
    <!-- [s] 학년선택 -->
    <div>
      <h3 class="tit-class-timetable">
        <span>STEP 01</span>학년 선택
        <span
          style="font-weight:400; color:black; padding:10px 5px;"
        >{{this.commentGradeChoice()}}</span>
      </h3>
      <div class="select-filter">
        <button
          type="button"
          v-for="(targetList, targetIdx) in targetList"
          class="btn-select"
          :class="{active: targetList.value == isActiveTarget}"
          :target="targetList.value"
          :key="targetIdx"
          @click="checkTargetInfo($event); isActiveTarget = targetList.value"
        >{{ targetList.text }}</button>
      </div>
    </div>
    <!-- //[e] 학년선택 -->
    <!-- [s] 과목선택 -->
    <div>
      <h3 class="tit-class-timetable">
        <span>STEP 02</span>과목 선택
      </h3>
      <div class="select-filter">
        <button
          type="button"
          v-for="(subjectList, subjectIdx) in subjectList"
          class="btn-select"
          :class="{active: subjectList.value == isActiveSubject }"
          :subject="subjectList.value"
          :key="subjectIdx"
          @click="checkSubjectInfo($event); isActiveSubject = subjectList.value"
        >{{ subjectList.text }}</button>
      </div>
    </div>
    <!-- //[e] 과목선택 -->
    <div>
      <h3 class="tit-class-timetable">
        <span>STEP 03</span>요일 선택
      </h3>
      <div class="select-filter">
        <button
          type="button"
          v-for="(dayOfWeekList, dayIdx) in dayOfWeekList"
          class="btn-select"
          :class="{active: dayOfWeekList.value == isActiveDay}"
          :dayofweek="dayOfWeekList.value"
          :key="dayIdx"
          @click="checkDayInfo($event); isActiveDay = dayOfWeekList.value"
        >{{ dayOfWeekList.text }}</button>
      </div>
    </div>
    <!-- <button @click="getCheckData">검색</button> -->
  </div>
</template>

<script>
export default {
  name: "class-timetable-search-mobile",
  components: {},
  data() {
    return {
      checkArr: {
        target: [],
        subject: [],
        dayofweek: []
      },
      result: [],
      isActiveTarget: false,
      isActiveSubject: false,
      isActiveDay: false,
      targetList: [
        // { name: "예비초등", text: "예비초1", value: 75 },
        { name: "초1", text: "1학년", value: 34 },
        { name: "초2", text: "2학년", value: 35 },
        { name: "초3", text: "3학년", value: 36 },
        { name: "초4", text: "4학년", value: 37 }
      ],
      subjectList: [
        { name: "국어", text: "국어", value: 29 },
        // { name: "영어", text: "영어", value: 30 },
        { name: "수학", text: "수학", value: 31 },
        { name: "사회/과학", text: "사회/과학", value: 32 }
      ],
      dayOfWeekList: [
        // { name: "일요일", text: "일", value: 1 },
        { name: "월요일", text: "월", value: 2 },
        { name: "화요일", text: "화", value: 3 },
        { name: "수요일", text: "수", value: 4 },
        { name: "목요일", text: "목", value: 5 },
        { name: "금요일", text: "금", value: 6 }
        // { name: "토요일", text: "토", value: 7 }
      ]
    };
  },
  methods: {
    commentGradeChoice: function() {
      return "";
    },
    checkTargetInfo: function(event) {
      let target = this.checkArr.target;
      let buttonInfo = event.target.attributes["target"].value;
      if (target.length != 0) {
        target.shift();
      }
      target.push(buttonInfo);
      this.$emit("chooseSearchButton");
      return JSON.parse(JSON.stringify(target));
    },
    checkSubjectInfo: function(event) {
      let subject = this.checkArr.subject;
      let buttonInfo = event.target.attributes["subject"].value;
      if (subject.length != 0) {
        subject.shift();
      }
      subject.push(buttonInfo);
      this.checkArr.dayofweek = [];
      this.isActiveDay = false;
      switch (buttonInfo) {
        case "31":
          // this.dayOfWeekList = [
          //   { name: "월요일,수요일", text: "월/수", value: "2,4" },
          //   { name: "화요일,목요일", text: "화/목", value: "3,5" },
          //   { name: "금요일", text: "금", value: 6 },
          //   { name: "토요일", text: "토", value: 7 }
          // ];
          this.dayOfWeekList = [
            { name: "월요일", text: "월", value: 2 },
            { name: "화요일", text: "화", value: 3 },
            { name: "수요일", text: "수", value: 4 },
            { name: "목요일", text: "목", value: 5 },
            { name: "금요일", text: "금", value: 6 },
            { name: "토요일", text: "토", value: 7 }
          ];
          break;
        default:
          this.dayOfWeekList = [
            { name: "월요일", text: "월", value: 2 },
            { name: "화요일", text: "화", value: 3 },
            { name: "수요일", text: "수", value: 4 },
            { name: "목요일", text: "목", value: 5 },
            { name: "금요일", text: "금", value: 6 },
            { name: "토요일", text: "토", value: 7 }
          ];
          break;
      }
      return JSON.parse(JSON.stringify(subject));
    },
    checkDayInfo: function(event) {
      let dayofweek = this.checkArr.dayofweek;
      let buttonInfo = event.target.attributes["dayofweek"].value;
      if (dayofweek.length != 0) {
        dayofweek.shift();
      }
      dayofweek.push(buttonInfo);
      this.$emit("chooseSearchButton");
      return JSON.parse(JSON.stringify(dayofweek));
    }
  },
  created() {
    // console.log("SearchComponent Created");
    // this.getCheckData(event);
    this.$emit("classReserveQuery", this.checkArr);
  },
  mounted() {
    // console.log("SearchComponent Mounted");
  }
};
</script>
