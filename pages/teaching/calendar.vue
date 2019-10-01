<template>
  <article class="calendar">
    <h1>{{heading}}</h1>
    <BaseTimeTable
      :caption="table.caption"
      :colHeader="table.colHeader"
      :rowHeader="table.rowHeader"
      :tableData="table.data"
    />
  </article>
</template>

<script>

import BaseTimeTable from '@/components/BaseTimeTable'

export default {
  name: 'calendar',
  components: {
    BaseTimeTable,
  },
  data () {
    return {
      heading: '수업 캘린더',
      table: {
        caption: '* 캘린더 내의 수업을 클릭하시면 수업 입장 화면으로 이동합니다.',
        colHeader: [
          '수업시간', '일', '월', '화', '수', '목', '금', '토',
        ],
        rowHeader: [
          '오전 8', '오전 9', '오전 10', '오전 11',
          '오후 12', '오후 1', '오후 3', '오후 4', '오후 5', '오후 6', '오후 7', '오후 8', '오후 9', '오후 10', '오후 11', '오후 12',
          '오전 1', '오전 2', '오전 3', '오전 4', '오전 5', '오전 6', '오전 7',
        ].reduce((r, v, k) => {
          r.push(v)
          r.push(`${v}:30`)
          return r
        }, []),
        data: [
          ...Array(48).fill([1, 2, 3, 4, 5, 6, 7]),
        ].map((v,k)=>{
          if(k>3&&k<8){
            return v.map((v,k)=>{
              if(k===1) return 'good'
              return v
            })
          }
          return v
        }),
      },
      buttons: [
        '<',
        '오늘',
        '>',
      ],

    }
  },
}
</script>

<style lang=scss>
.calendar {
  h1 {
    padding: 1.6rem 0;
    font-size: 3.4rem;
    line-height: 1;
    font-weight: bold;
    border-bottom: 2px solid #000000;
  }
}
</style>
