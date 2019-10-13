<template>
  <article class="atTendance">
    <BaseTable
      id="base-time-table"
      :captions="table.captions"
      :colHeader="table.colHeader"
      :tableData="table.data"
    />
  </article>
</template>

<script>
import BaseTable from '@/components/BaseTable'

export default {
  name: 'attendance',
  components: {
    BaseTable
  },
  data () {
    return {
      heading: '출결현황',
      form: {
        searchText: {
          legend: '키워드',
          selectTextType: ['전체', '클래스명', '학생명'],
          inputText: '검색어를 입력하세요'
        },
        searchBtn: {
          label: '검색'
        },
      },
      table: {
        colHeader: [
          {
            id: 'grade',
            label: '학년',
          },
          {
            id: 'subject',
            label: '과목'
          },
          {
            id: 'day',
            label: '요일',
          },
          {
            id: 'time',
            label: '시간'
          },
          {
            id: 'name',
            label: '학생이름'
          },
          {
            id: 'id',
            label: '학생 ID',
          },
          {
            id: 'lesson1',
            label: '1회',
          },
          {
            id: 'lesson2',
            label: '2회',
          },
          {
            id: 'lesson3',
            label: '3회',
          },
          {
            id: 'lesson4',
            label:  '4회'
          },
          {
            id: 'ratio',
            label: '출석률'
          }
        ],
        data: [
          {
            grade: '1학년',
            subject: '수학',
            day: '목',
            time: '17:00',
            name: '홍길동',
            id: 'hong11',
            lesson1: {
              time: '2019-07-04 17:00',
              status: 1,
            },
            lesson2: {
              time: '2019-07-11 17:00',
              status: 1,
            },
            lesson3: {
              time: '2019-07-18 17:00',
              status: 1,
            },
            lesson4: {
              time: '2019-07-25 17:00',
              status: 1,
            },
            ratio: '100% (4/4)'
          },
          {
            grade: '1학년',
            subject: '수학',
            day: '목',
            time: '17:00',
            name: '홍길순 ',
            id: 'hong12',
            lesson1: {
              time: '2019-07-04 17:00',
              status: 1
            },
            lesson2: {
              time: '2019-07-11 17:00',
              status: 1
            },
            lesson3: {
              time: '2019-07-18 17:00',
              status: 2
            },
            lesson4: {
              time: '2019-07-25 17:00',
              status: 0
            },
            ratio: '50% (2/4)'
          },
        ]
      },
      pagination: {
        nextBtn: '다음',
        lastBtn: '마지막'
      }
    }
  }
}
</script>

<style  lang=scss>
.index {
}
</style>
