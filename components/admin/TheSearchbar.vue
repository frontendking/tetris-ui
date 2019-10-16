<template>
  <div class="TheSearchbar sort-wrap">
    <form class="form-horizontal" id="code-search-form" action="/tutor/attends" accept-charset="UTF-8"
          method="get"><input name="utf8" type="hidden" value="✓">
      <div class="form-group">
        <strong class="col-md-1">학생이름</strong>
        <div class="col-md-2">
          <input type="text" name="q" id="q" class="input form-control" placeholder="이름을 입력해 주세요.">
        </div>
        <strong class="col-md-1">작성현황</strong>
        <div class="col-md-2">
          <select name="condition" id="condition" class="chosen-select">
            <option value="">전체</option>
            <option value="">리스트1</option>
            <option value="">리스트2</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <strong class="col-md-1">수업일</strong>
        <div class="col-md-2">
          <div class="input-group">
            <div class="input-group-addon">
              <i class="fa fa-calendar"></i>
            </div>
            <input type="text" name="start_date" id="start_date" class="form-control datepicker"
                   autocomplete="off">
          </div>
        </div>
        <div class="col-md-2">
          <div class="input-group">
            <div class="input-group-addon">
              <i class="fa fa-calendar"></i>
            </div>
            <input type="text" name="end_date" id="end_date" class="form-control datepicker"
                   autocomplete="off">
          </div>
        </div>
        <div class="col-md-2">
          <button type="submit" class="btn btn-sm btn-primary">
            <i class="fa fa-search"></i>&nbsp;검색
          </button>
        </div>
      </div>
    </form>
  </div>

</template>

<script>
export default {
  name: 'TheSearchbar'
}
</script>

<style lang=scss>
.TheSearchbar {
}
</style>
