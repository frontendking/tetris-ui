<template>
  <article class="calendar">
    <h1 v-html="heading"/>
    <div class="calendar-table">
      <div class="table-buttons">
        <button v-for="button in buttons" :class="button.id" v-html="button.label"></button>
      </div>
      <BaseTimeTable
        id="base-time-table"
        :captions="table.captions"
        :colHeader="table.colHeader"
        :rowHeader="table.rowHeader"
        :tableData="table.data"
      />
    </div>
  </article>
</template>

<script>

import BaseTimeTable from '@/components/base/BaseTable'

export default {
  name: 'calendar',
  components: {
    BaseTimeTable,
  },
  data () {
    return {
      heading: '수업 캘린더',
      table: {
        captions: [
          { id: '', p: '2019년 9월 22일 - 2019년 9월 28일' },
          { id: '', p: '* 캘린더 내의 수업을 클릭하시면 수업 입장 화면으로 이동합니다.' }
        ],
        colHeader: [
          ['', '일', '월', '화', '수', '목', '금', '토'],
          ['', '22', '23', '24', '25', '26', '27', '28']
        ],
        rowHeader: [
          '오전 8', '오전 9', '오전 10', '오전 11',
          '오후 12', '오후 1', '오후 3', '오후 4', '오후 5', '오후 6', '오후 7', '오후 8', '오후 9', '오후 10', '오후 11', '오후 12',
          '오전 1', '오전 2', '오전 3', '오전 4', '오전 5', '오전 6', '오전 7',
        ].reduce((r, v, k) => {
          r.push(v)
          r.push('')
          return r
        }, []),
        data: [
          ...Array(46).fill([...Array(7)]),
        ]
        /*
                  .map((v, k) => {
                    if (k > 7 && k < 30) {
                      return v.map((v, day) => {
                        let classes = []
                        if (day === 1) classes.push({
                          time: '12:00pm - 12:00am',
                          lesson: 4
                        })
                        if (day === 2) classes.push({
                          time: '12:00pm - 12:00am',
                          lesson: 5
                        })
                        if (day === 3) classes.push({
                          time: '12:00pm - 12:00am',
                          lesson: 6
                        })
                        if (day === 4) classes.push({
                          time: '12:00pm - 12:00am',
                          lesson: 7
                        })
                        if (k < 9 && day === 5) classes.push({
                          time: '12:00pm - 1:00pm',
                          lesson: 8
                        })
                        if (k > 13 && k < 15 && day === 3) classes.push({
                          time: '4:05pm - 5:05pm',
                          lesson: 9
                        })
                        return classes.length === 0 ? v : classes
                      })
                    }
                    return v
                  }),
        */
      },
      buttons: [
        {
          id: 'left',
        },
        {
          id: 'today',
          label: '오늘'
        },
        {
          id: 'right',
        }
      ],

    }
  },
}
</script>

<style lang=scss>
@media(min-width: 641px) {
  .calendar {
    position: relative;
    display: grid;
    /*@formatter:off*/
    grid-template:
      "header" auto
      "table" auto/
      auto;
  /*@formatter:on*/
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.56;
    letter-spacing: normal;
    color: #6e737d;

    h1, h2 {
      color: #000000;
    }

    > h1 {
      grid-area: header;
      padding-bottom: 1.6rem;
      font-size: 3.4rem;
      line-height: 1;
      font-weight: bold;
      border-bottom: 2px solid #000000;
    }

    #base-time-table {
      grid-area: table;
      display: flex;
      flex-flow: column;
      border: none;

      caption {
        text-align: center;
        padding: 2rem 0;
      }

      tr {
        flex: 1 0 4rem;
        display: flex;

        th, td {
          border: none;
          flex: 1;
          display: flex;
          height: initial;
        }
      }

      thead, tbody {
        display: flex;
        flex-flow: column;
      }

      /*specifiy style*/
      th, td {
        justify-content: center;
        align-items: center;
      }

      th {
        &[scope="row"] {
          align-items: flex-end;
        }
      }

      thead {
        tr:first-child {
          th[scope="col"] {
            align-items: flex-end;
          }
        }

        tr:not(:first-child) {
          th[scope="col"] {
            align-items: flex-start;
          }
        }
      }

      tbody {
        height: 60rem;
        overflow: auto;

        tr {
          &:nth-child(odd) {
            border-bottom: 1px dotted #e0e0e0;
          }

          &:nth-child(even) {
            border-bottom: 1px solid #e0e0e0;
          }
        }

        td {
          border-right: 1px solid #e0e0e0;
        }
      }

      caption p:first-child {
        padding-left: 5rem;
      }

      caption p:not(:first-child) {
        position: absolute;
        font-size: 1.5rem;
        font-weight: normal;
        top: 0;
        right: 0;
      }
    }
  }
  .table-buttons {
    display: flex;
    width: 15rem;
    height: 4rem;
    font-size: 2rem;
    margin: 2rem 0;
    position: absolute;

    button {
      flex: 1;
      display: flex;
      justify-content: center;

      &.today {
        flex: 1.5 0 1rem;
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
      }

      &.left, &.right {
        border: 1px solid #e0e0e0;

        &:before {
          content: '';
          display: block;
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          padding-top: 2rem;
          width: 2rem;
        }
      }

      &.left:before {
        background-image: url(calendar/assets/left.svg);
      }

      &.right:before {
        background-image: url(calendar/assets/right.svg);
      }
    }
  }

}
</style>
