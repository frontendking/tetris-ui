<template>
  <article class="notice">
    <h1 v-html="heading"/>
    <BaseTable
      id="attendance-table"
      :colHeader = "colHeader"
      :tableData = "tableData"
    />

  </article>
</template>

<script>
import BaseTable from '../BaseTable2'

const colHeaderNames = [
  '글번호', '제목', '작성자', '작성일'
]
const seed = [
  {
    articleNo: '179',
    title:'[수업 가이드] 7월 2,3,4주차 수업 가이드 안내',
    author: 'tutor.com',
    writeDate: '2019.07.24'
  },
]
export default {
  data() {
    return {
      heading: '튜터 공지사항',
      searchForm: {
        searchKeyword: {
          legend: '검색어',
          type: [
            '전체',
            '클래스명',
            '선생님명'
          ],
          placeHolder: '검색어를 입력해 주세요'
        },
        searchBtn: '검색'
      },
      tableData:[
        {
          articleNo: '<span class="important">[중요한 공지사항]</span>',
          title:'[수업 가이드] 7월 2,3,4주차 수업 가이드 안내',
          author: 'tutor.com',
          writeDate: '2019.07.24'
        },
        ...[...Array(10)].flatMap(()=>seed),
      ],
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
.notice {
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
