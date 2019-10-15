<template>
  <article class="report">
    <h1 v-html="heading"/>
    <BaseTable
      id="attendance-table"
      :colHeader = "colHeader"
      :tableData = "tableData"
    />

  </article>
</template>

<script>
import BaseTable from '../../BaseTable2'
const colHeaderNames = [
  '수강클래스', '출석', '1회차', '2회차', '3회차', '4회차', '출석률', ''
]
const seed = [
  {
    className: '[일간대치동]2기 튜터 실습',
    statusInfo: '<span class="attendance">출석</span> <span class="late">지각</span> <span class="absence">결석</span>',
    lesson1: '<span class="attendance"/>',
    lesson2: '<span class="attendance"/>',
    lesson3: '<span class="attendance"/>',
    lesson4: '<span class="attendance"/>',
    ratio: '100% (4/4)',
    expandMark: '<'
  },
  {
    className: '[일간대치동]2기 튜터 실습',
    statusInfo: '<span class="attendance">출석</span> <span class="late">지각</span> <span class="absence">결석</span>',
    lesson1: '<span class="attendance"/>',
    lesson2: '<span class="attendance"/>',
    lesson3: '<span class="late"/>',
    lesson4: '<span class="absence"/>',
    ratio: '100% (4/4)',
    expandMark: '<'
  }
]
export default {
  data() {
    return {
      heading: '출결현황',
      searchForm: {
        searchKeyword: {
          legend: '검색어',
          type: [
            '클래스명',
            '선생님명'
          ],
          placeHolder: '검색어를 입력해 주세요'
        },
        searchDate: {
          legend: '기간검색',
          type: [
            '수강시작일',
            '수강신청일',
          ]
        },
        searchBtn: '검색'
      },
      tableData: [...Array(3)].flatMap(()=>seed),
      colHeader: Object.keys(seed[0]).map((v,i)=>{
        return {
          id:v,
          label: colHeaderNames[i]
        }
      })
    }
  },
  components: {
    BaseTable
  }
}
</script>

<style lang=scss>
.report {
  @media(min-width: 641px) {
    display: grid;
    /*@formatter:off*/
    grid-template:
      "header" auto
      "table" auto/
      auto;
    /* @formatter:on*/
    font-size: 1.6rem;
    line-height: 1.56;
    letter-spacing: normal;
    color: #6e737d;

    h1, h2 {
      color: #000000;
    }

    > h1 {
      grid-area: header;
      display: initial;
      font-size: 3.4rem;
      font-weight: bolder;
      line-height: 1;
      padding-bottom: 1.8rem;
      border-bottom: 2px solid #000000;
    }

    > #attendance-table {
      margin-top: 3rem;
    }
  }
}

</style>
