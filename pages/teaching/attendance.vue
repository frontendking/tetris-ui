<template>
  <article class="attendance">
    <h1 v-html="heading"/>
    <TheSearchBox
      :has-permit-search="false"
      :keyword-types="['전체', '클래스명', '학생 이름']"
      :has-date-search="false"
    />
    <BaseTable
      id="attendance-table"
      :colHeader="colHeader"
      :tableData="tableData"
    />
  </article>
</template>

<script>
import BaseTable from '../../components/BaseTable2'
import Pagenation from '@/pages/admin/classes/pagenation'
import TheSearchBox from '@/components/TheSearchBox'

const colHeaderNames = [
  '학년', '과목', '요일', '시간', '학생이름', '학생ID', '1회', '2회', '3회', '4회', '출석률'
]
const seed = [
  {
    grade: '1학년',
    subject: '수학',
    day: '요일',
    time: '17:00',
    name: '홍길동',
    id: 'hong11',
    lesson1: '<span>2019-07-04 17:00</span><span class="attendance"/>',
    lesson2: '<span>2019-07-04 17:00</span><span class="attendance"/>',
    lesson3: '<span>2019-07-04 17:00</span><span class="attendance"/>',
    lesson4: '<span>2019-07-04 17:00</span><span class="attendance"/>',
    ratio: '100% (4/4)',
  },
  {
    grade: '1학년',
    subject: '수학',
    day: '요일',
    time: '17:00',
    name: '홍길동',
    id: 'hong11',
    lesson1: '<span>2019-07-04 17:00</span><span class="attendance"/>',
    lesson2: '<span>2019-07-04 17:00</span><span class="attendance"/>',
    lesson3: '<span>2019-07-04 17:00</span><span class="late"/>',
    lesson4: '<span>2019-07-04 17:00</span><span class="absence"/>',
    ratio: '100% (4/4)',
  },
]
export default {
  data () {
    return {
      heading: '출결현황',
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
      tableData: [...Array(3)].flatMap(() => seed),
      colHeader: Object.keys(seed[0]).map((v, i) => {
        return {
          id: v,
          label: colHeaderNames[i]
        }
      })
    }
  },
  components: {
    TheSearchBox,
    Pagenation,
    BaseTable
  }
}
</script>

<style lang=scss>
.attendance {
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
