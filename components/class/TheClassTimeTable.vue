<template>
  <table class="TheClassTimeTable">
    <caption>{{caption}}</caption>
    <thead>
    <tr>
      <th v-for="v in colHeader">{{v}}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(tr, k) in tableBody">
      <td>{{rowHeader[k]}}</td>
      <td v-for="td in tr">{{td.teacher}}{{td.message}}{{td.status}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data () {
    return {
      caption: '과목 시간표',
      colHeader: [
        '수업시간',
        '월', '화', '수', '목', '금', '토',
      ],
      subjects: [
        {
          id: '1',
          name: '국어',
        },
        {
          id: '2',
          name: '수학',
        },
      ],
      classe: [
        {
          teacher: 'Teacher10',
          schedule: [
            {
              start: '2019.04.01, 월, 13:00',
            },
          ],
        },
        {
          teacher: 'Got1선생님',
          schedule: [
            {
              start: '2019.08.01, 수, 13:00',
            },
            {
              start: '2019.08.01, 월, 18:00',
            },
          ],
        },
      ],
    }
  },
  computed: {
    rowHeader () {
      return [
        '13:00-14:00',
        '18:00-19:00',
        '19:00-20:00',
        '20:00-21:00',
        '21:00-22:00',
      ]
    },
    tableBody () {
      return [
        [
          {
            teacher: 'Teacher10',
            message: '04.01 수업시작',
            status: 1,
          },
          '',
          {
            teacher: 'Got1선생님',
            message: '08.01 수업시작',
            status: 0,
          }, '', '', '',
        ],
        [
          {
            teacher: 'Got1선생님',
            message: '08.01 수업시작',
            status: 1,
          }, '', '', '', '', '',
        ],[],[],[]
      ]
    },
  },
}
</script>

<style lang=scss>

.TheClassTimeTable {
}
</style>
