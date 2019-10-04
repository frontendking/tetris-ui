<template>
  <section class="TheSearchBox" >
    <form class="form-horizontal" id="code-search-form" method="post">
      <div class="form-group">
        <strong class="col-md-1">수업권</strong>
        <div class="col-md-2">
          <select id="category-selector" class="category-selector form-control chosen-select" name="order_id" style="display: none;">
            <option value="">수업권명</option>
            <option value="1099">일간대치동 2과목 수업권 (6개월 수업권)</option>
            <option value="1286">초등 1학년 수업 이용권 (3개월)</option>
            <option value="1287">일간대치동 1학년 수학 (6개월 이용권1)</option>
            <option value="1295">일간대치동 1과목 수업권 (3개월 수업권)</option>
          </select>
          <div class="chosen-container chosen-container-single" style="width: 100%;" title="" id="category_selector_chosen">
            <div class="chosen-drop">
              <div class="chosen-search"><input type="text" autocomplete="off"></div>
              <ul class="chosen-results"></ul>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <strong class="col-md-1">검색어</strong>
        <div class="col-md-2">
          <select name="condition" id="condition" class="chosen-select" style="display: none;">
            <option value="course_name">클래스명</option>
            <option value="tutor_name">선생님명</option>
          </select>
          <div class="chosen-container chosen-container-single" style="width: 100%;" title="" id="condition_chosen">
            <div class="chosen-drop">
              <div class="chosen-search"><input type="text" autocomplete="off"></div>
              <ul class="chosen-results"></ul>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <input type="text" name="q" id="q" class="input form-control" placeholder="검색어를 입력해 주세요.">
        </div>
      </div>
      <div class="form-group">
        <strong class="col-md-1">기간검색</strong>
        <div class="col-md-2">
          <select name="period" id="period" class="chosen-select" style="display: none;">
            <option value="course_start_at">수강시작일</option>
            <option value="created_at">수강신청일</option>
          </select>
          <div class="chosen-container chosen-container-single" style="width: 100%;" title="" id="period_chosen">
            <div class="chosen-drop">
              <div class="chosen-search"><input type="text" autocomplete="off"></div>
              <ul class="chosen-results"></ul>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="input-group">
            <div class="input-group-addon">
              <i class="fa fa-calendar"></i>
            </div>
            <input type="text" name="start_date" id="start_date" class="form-control datepicker" autocomplete="off">
          </div>
        </div>
        <div class="col-md-2">
          <div class="input-group">
            <div class="input-group-addon">
              <i class="fa fa-calendar"></i>
            </div>
            <input type="text" name="end_date" id="end_date" class="form-control datepicker" autocomplete="off">
          </div>
        </div>
        <div class="col-md-2">
          <button type="submit" class="btn btn-sm btn-primary">
            <i class="fa fa-search"></i>&nbsp;검색
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'TheSearchBox',
  layout: 'tutor'
}
</script>

<style lang=scss>
.TheSearchBox {
  width: 100%;
  #code-search-form {
    input[placeholder] {
      width: 235px;
    }
    .form-group {
      margin-bottom: 0;
    }
  }
}
</style>
