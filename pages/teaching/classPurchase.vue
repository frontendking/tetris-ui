<template>
  <article class="class-purchase">
    <h1 v-html="heading"/>
    <BaseTable
      id="attendance-table"
      :colHeader="colHeader"
      :tableData="tableData"
    />

  </article>
</template>

<script>
import BaseTable from '@/components/base/BaseTable2'

const colHeaderNames = [
  '년도', '월', '수강상태', '수업신청 유형', '신청일시', '학생이름', '커넥츠ID', '전화번호', '클래스 ID', '수업명', '수강기간', '결제유형'
]
const seed = [
  {
    year: '2019년',
    month: '7월',
    state: '수강중',
    type: '멤버십',
    orderDate: '2018-08-28 14:03',
    userName: '추경아(추경아)',
    userId: 'choco',
    userPhone: '010-7672-9595',
    classId: '123456',
    className: '2기 튜터 실습(0828)',
    period: '2018.08.28-2018.08.31',
    orderType: '유료',
  },
]
export default {
  data () {
    return {
      heading: '수강신청 내역',
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
      tableData: [...Array(10)].flatMap(() => seed),
      colHeader: Object.keys(seed[0]).map((v, i) => {
        return {
          id: v,
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

  > #attendance-table {
    margin-top: 3rem;

    td {
      flex-flow: column;
    }

    tr > th, tr > td {
      flex: 1 0 5rem;
      font-size: 0.9em;
      text-align: center;
      padding: 0 0.5rem;

      &:nth-child(n):nth-child(-n+4), &:nth-last-child(1) {
        flex: 0 0 7rem;
      }

      &:nth-child(5), &:nth-child(8), &:nth-child(10), &:nth-child(11) {
        flex: 1 0 14rem;
      }
    }
  }

}

</style>
