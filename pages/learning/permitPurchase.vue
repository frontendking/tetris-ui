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
import BaseTable from '@/components/base/BaseTable2'
const colHeaderNames = [
  '주문번호', '결제일시','수업권', '클래스수', '결제수단', '결제금액', '결제상태'
]
const seed = [
  {
    orderId: '12950293',
    purchaseDate: '2018-08-28 14:03',
    permitName: '일간대치동 2과목 수업권 3개월 수업권',
    classCount: '6',
    method: '신용카드',
    price: '230,000원',
    state: '결제완료'
  },
]
export default {
  data() {
    return {
      heading: '수업권 내역',
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
