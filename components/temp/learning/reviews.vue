<template>
  <article class="review">
    <h1 v-html="heading"/>
    <TheSearchBox
      :has-permit-search="false"
      :keyword-types="['전체', '클래스명', '선생님 이름']"
    />
    <BaseTable
      id="attendance-table"
      :colHeader = "colHeader"
      :tableData = "tableData"
    />
    <TheReviewForm/>

  </article>
</template>

<script>
import BaseTable from '../../BaseTable2'
import TheReviewForm from '@/components/TheReviewForm'
import TheSearchBox from '@/components/TheSearchBox'

const colHeaderNames = [
  '수강클래스', '1회차', '2회차', '3회차', '4회차', '후기등록률'
]
const seed = [
  {
    className: '[일간대치동]2기 튜터 실습',
    lesson1: `<div>수업일자 2018-10-22</div><button onclick="$('#review-form').modal('toggle');" class="update">수정하기</button>`,
    lesson2: `<div>수업일자 2018-10-22</div><button onclick="$('#review-form').modal('toggle');"<button class="write">작성하기</button>`,
    lesson3: `<div>수업일자 2018-10-22</div><button onclick="$('#review-form').modal('toggle');"<button class="update">작성하기</button>`,
    lesson4: `<div>수업일자 2018-10-22</div><button onclick="$('#review-form').modal('toggle');"<button class="update">작성하기</button>`,
    reviewRatio: '25% (1/4)'
  },
]
export default {
  data() {
    return {
      heading: '리뷰작성하기',
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
    TheSearchBox,
    TheReviewForm,
    BaseTable
  }
}
</script>

<style lang=scss>
.review {
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
