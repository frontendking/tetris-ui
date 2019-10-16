<template>
  <article id="attendance">
    <h1 v-html="heading"/>
    <TheSearchBox
      :has-permit-search="false"
      :keyword-types="['전체', '클래스명', '선생님 이름']"
    />
    <div id="attendance-table-group">
      <BaseTable
        id="attendance-table"
        :colHeader="colHeader"
        :tableData="tableData"
      />
      <BaseTable
        v-for="v in tableData"
        :data-id="v.id"
        :colHeader="colHeaderNasted"
        :tableData="tableDataNasted"
      />
    </div>

  </article>
</template>

<script>
import BaseTable from '../../base/BaseTable2'
import TheSearchBox from '@/components/admin/TheSearchBox'

const colHeaderNames = [
  '수강클래스', '출석', '1회차', '2회차', '3회차', '4회차', '출석률', '',
]

const seed = [
  {
    className: '[일간대치동]2기 튜터 실습',
    statusInfo: '<span class="attendance">출석</span> <span class="late">지각</span> <span class="absence">결석</span>',
    lesson1: '<span class="attendance">출석</span>',
    lesson2: '<span class="attendance">출석</span>',
    lesson3: '<span class="attendance">출석</span>',
    lesson4: '<span class="attendance">출석</span>',
    ratio: '100% (4/4)',
    expandMark: '<button class="expand-button"></button>',
  },
  {
    className: '[일간대치동]2기 튜터 실습',
    statusInfo: '<span class="attendance">출석</span> <span class="late">지각</span> <span class="absence">결석</span>',
    lesson1: '<span class="attendance">출석</span>',
    lesson2: '<span class="attendance">출석</span>',
    lesson3: '<span class="late">지각</span>',
    lesson4: '<span class="absence">결석</span>',
    ratio: '100% (4/4)',
    expandMark: '<button class="expand-button"></button>',
  },
]
const colHeaderNasted = [
  '회차', '수업일시', '출결', '입장일시',
]
const seedNasted = [
  {
    lesson: 1,
    startDate: '2018-10-29 17:00',
    statue: '출석',
    enterDate: '2018:10-29 16:55',
  },
  {
    lesson: 2,
    startDate: '2018-10-29 17:00',
    statue: '출석',
    enterDate: '2018:10-29 16:55',
  },
  {
    lesson: 3,
    startDate: '2018-10-29 17:00',
    statue: '출석',
    enterDate: '2018:10-29 16:55',
  },
  {
    lesson: 4,
    startDate: '2018-10-29 17:00',
    statue: '출석',
    enterDate: '2018:10-29 16:55',
  },
]
export default {
  name: 'learning-attendance',
  data () {
    return {
      heading: '출결현황',
      searchForm: {
        searchKeyword: {
          legend: '검색어',
          type: [
            '클래스명',
            '선생님명',
          ],
          placeHolder: '검색어를 입력해 주세요',
        },
        searchDate: {
          legend: '기간검색',
          type: [
            '수강시작일',
            '수강신청일',
          ],
        },
        searchBtn: '검색',
      },
      tableData: [...Array(3)].flatMap(() => seed).map((v, k) => {
        return {
          ...v,
          id: k,
          expandMark: v.expandMark.replace('<button', `<button data-id=${k}`),
        }
      }),
      colHeader: Object.keys(seed[0]).map((v, i) => {
        return {
          id: v,
          label: colHeaderNames[i],
        }
      }),
      colHeaderNasted: Object.keys(seedNasted[0]).map((v, i) => {
        return {
          id: v,
          label: colHeaderNasted[i],
        }
      }),
      tableDataNasted: seedNasted,
    }
  },
  components: {
    TheSearchBox,
    BaseTable,
  },
  updated () {
    js()
  },
  mounted () {
    this.$nextTick(() => {
      js()
    })
  },
}

function js () {
  const td = document.querySelector('#attendance-table>tbody tr td')
  const tdPddingBottomOrg = getComputedStyle(td).paddingBottom
  Array.prototype.forEach.call(
    document.querySelectorAll('.expand-button'),
    v => {
      v.addEventListener('click', e => {
        const target = e.currentTarget
        const id = target.dataset.id
        const targetTr = target.parentElement.parentElement
        const targetTrHeightOrg = targetTr.offsetHeight
        const table = targetTr.parentElement.parentElement
        const thead = table.children[0]
        const trs = document.querySelectorAll('#attendance-table>tbody tr')
        const sourceTable = document.querySelector(`.BaseTable2[data-id='${id}']`)
        const sourceTableHeight = sourceTable.getBoundingClientRect().height
        target.classList.toggle('active')
        if (target.classList.contains('active')) {
          Array.prototype.forEach.call(targetTr.children, function (v) {
            v.style.paddingBottom = `${sourceTableHeight}px`
          })
          sourceTable.style.top = `${targetTr.offsetTop + targetTrHeightOrg}px`
          sourceTable.style.visibility = 'visible'
        } else {
          Array.prototype.forEach.call(targetTr.children, function (v) {
            v.style.paddingBottom = tdPddingBottomOrg
          })
          sourceTable.style.top = '0'
          sourceTable.style.visibility = 'hidden'
        }
      })
    },
  )
}
</script>

<style lang="scss">
.expand-button {
  background: url('../../../pages/learning/classes/update/assets/arrow-down.svg') no-repeat center center;
  border: none;
  background-size: contain;
  width: 1.5rem;
  height: 1.5rem;
}
.late, .absence, .attendance {
  padding-right: 1rem;
  padding-top: 0.5rem;
}
.late {
  display: flex;
  float: left;
  line-height: 1;
  align-items: center;

  &:before {
    content: '';
    display: block;
    background: url('../../../pages/learning/classes/update/assets/history.svg') no-repeat center center;
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
    background: url('../../../pages/learning/classes/update/assets/cancel.svg') no-repeat center center;
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
    background: url('../../../pages/learning/classes/update/assets/circle.svg') no-repeat center center;
    background-size: contain;
    width: 1.5rem;
    height: 1.5rem;
  }
}

</style>
<style lang=scss>
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
    #attendance-table-group {
      position: relative;
      margin-top: 3rem;

      .BaseTable2[data-id] {
        position: absolute;
        width: 100%;
        background-color: white;
        top: 0;
        visibility: hidden;
      }

      #attendance-table {

        td {
          display: table-cell;
        }

        td:nth-child(2),th:nth-child(2) {
          flex-basis: 6rem;
        }

        td:nth-child(3), td:nth-child(4), td:nth-child(5), td:nth-child(6), td:last-child {
          font-size: 0;
          flex: 0 1 6rem;
        }

        th:nth-child(3), th:nth-child(4), th:nth-child(5), th:nth-child(6), th:last-child {
          flex: 0 1 6rem;
        }

      }
    }
  }
}

</style>
