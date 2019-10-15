<template>
  <article id="attendance">
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
import BaseTable from '../../BaseTable2'
import Pagenation from '@/components/temp/admin/classes/pagenation'
import TheSearchBox from '@/components/TheSearchBox'

const colHeaderNames = [
  '년도', '월', '학년', '과목', '요일', '시간','학생이름', '학생 ID', '1회','2회','3회', '4회', '출석률'
]
const seed = [
  {
    year: '2019년',
    month: '7월',
    grade: '1학년',
    subject: '수학',
    day: '목',
    time: '17:00',
    name: '홍길동',
    id: 'hong11',
    lesson1: '<span>2019-07-04 17:00</span><span class="attendance">출석</span>',
    lesson2: '<span>2019-07-04 17:00</span><span class="attendance">출석</span>',
    lesson3: '<span>2019-07-04 17:00</span><span class="late">지각</span>',
    lesson4: '<span>2019-07-04 17:00</span><span class="absence">결석</span>',
    ratio: '100% (4/4)',
  },
  {
    year: '2019년',
    month: '7월',
    grade: '1학년',
    subject: '수학',
    day: '목',
    time: '17:00',
    name: '홍길동',
    id: 'hong11',
    lesson1: '<span>2019-07-04 17:00</span><span class="attendance">출석</span>',
    lesson2: '<span>2019-07-04 17:00</span><span class="attendance">출석</span>',
    lesson3: '<span>2019-07-04 17:00</span><span class="attendance">출석</span>',
    lesson4: '<span>2019-07-04 17:00</span><span class="attendance">출석</span>',
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
.late {
  display: flex;
  float: left;
  line-height: 1;
  align-items: center;

  &:before {
    content: '';
    display: block;
    background: url('assets/history.svg') no-repeat center center;
    background-size: contain;
    width: 1.5rem;
    height: 1.5rem;
  }
}

.absence {
  display: flex;
  float: left;
  line-height: 1;
  align-items: center;

  &:before {
    content: '';
    display: block;
    background: url('assets/cancel.svg') no-repeat center center;
    background-size: contain;
    width: 1.5rem;
    height: 1.5rem;
  }
}

.attendance {
  display: flex;
  float: left;
  line-height: 1;
  align-items: center;

  &:before {
    content: '';
    display: block;
    background: url('assets/circle.svg') no-repeat center center;
    background-size: contain;
    width: 1.5rem;
    height: 1.5rem;
  }
}

#attendance {
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
      font-size: 0.9em;
      td {
        flex-flow: column;
      }
      tr > th, tr > td {
        &:nth-child(1), &:nth-child(n+6):nth-child(-n+8) {
          flex:0 0 6rem;
        }
        &:nth-child(n+2):nth-child(-n+5){
          flex: 0 0 5rem;
        }
        &:nth-child(n+9):nth-child(-n+12){
          .attendance, .late, .absence {
            font-size:0
          }
        }
      }
    }
  }
}

</style>
