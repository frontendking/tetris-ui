<template>
  <div class="sort-wrap">
    <form class="form-horizontal" id="teach-filter-form" action="/tutor/courses" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="✓">
      <input type="hidden" name="status" id="status" value="progresses">
      <div class="col-sm-1">
        <select id="category-selector" class="category-selector form-control chosen-select" name="root" style="display: none;">
          <option value="">년도</option>
          <option value="year1">2017</option>
          <option value="year2">2018</option>
          <option value="year3">2019</option>
        </select>
      </div>
      <div class="col-sm-1">
        <select id="sub-category-selector" class="sub-category-selector form-control chosen-select" name="category" style="display: none;">
          <option value="">월</option>
          <option value="jr">1월</option>
          <option value="mid">2월</option>
          <option value="high">3월</option>
        </select>
      </div>
      <div class="col-sm-1">
        <select id="grade-selector" class="subject-selector form-control chosen-select" name="subject" style="display: none;">
          <option value="">학년</option>
          <option value="grade1">1학년</option>
          <option value="grade2">2학년</option>
          <option value="grade3">3학년</option>
          <option value="grade4">4학년</option>
        </select>
      </div>
      <div class="col-sm-1">
        <select id="subject-selector" class="subject-selector form-control chosen-select" name="subject" style="display: none;">
          <option value="">과목</option>
          <option value="jr_sub01">국어</option>
          <option value="jr_sub02">영어</option>
          <option value="jr_sub03">수학</option>
          <option value="jr_sub04">사회/과학</option>
        </select>
      </div>
      <div class="col-sm-1">
        <select id="day-selector" class="subject-selector form-control chosen-select" name="subject" style="display: none;">
          <option value="">요일</option>
          <option value="day1">월</option>
          <option value="day2">화</option>
          <option value="day3">수</option>
          <option value="day4">목</option>
        </select>
      </div>
      <div class="col-sm-1">
        <select id="lesson-selector" class="subject-selector form-control chosen-select" name="subject" style="display: none;">
          <option value="">회차</option>
          <option value="lesson1">1회차</option>
          <option value="lesson2">2회차</option>
          <option value="lesson3">3회차</option>
          <option value="lesson4">4회차</option>
        </select>
      </div>
      <div class="col-sm-2">
        <button type="submit" class="btn btn-sm btn-primary"><i class="fa fa-search"></i>&nbsp;검색</button>
      </div>
    </form>
    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  name: 'TheClassAlignUI'
}
</script>

<style lang=scss>
.TheClassAlignUI {
}
</style>
