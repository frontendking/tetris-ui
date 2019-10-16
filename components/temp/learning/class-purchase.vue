<template>
  <article class="class-purchase">
    <h1 v-html="heading"/>
    <BaseTable
      id="attendance-table"
      :colHeader = "colHeader"
      :tableData = "tableData"
    />

  </article>
</template>

<script>
import BaseTable from '../../base/BaseTable2'
const colHeaderNames = [
  '주문번호', '결제수단', '결제일시', '이름', '수강클래스', '선생님', '수강기간', '상품금액', '상태'
]
const seed = [
  {
    orderId: '-',
    method: '신용카드',
    applyDate: '2018-08-28 14:03',
    userName: '추경아',
    className: '2기 튜터 실습(0828)',
    teacherName: '최수용',
    period: '2018.08.28-2018.08.31',
    price: '0원',
    orderState: '<span class="complete">결제완료</span>'
  },
]
export default {
  data() {
    return {
      heading: '수업신청 내역',
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
      tableData: [...Array(10)].flatMap(()=>seed),
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
.class-purchase {
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
