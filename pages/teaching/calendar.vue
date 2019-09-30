<template>
  <article class="program-wrapper p-lg">
    <h1>{{heading}}</h1>
    <table>
      <caption>{{table.caption}}</caption>
      <thead>
        <tr>
          <th scope="col" v-for="v in table.colHeader">{{v}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="">

        </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
export default {
  name: 'calendar',
  data() {
    return {
      heading: '수업 캘린더',
      table: {
        caption: '* 캘린더 내의 수업을 클릭하시면 수업 입장 화면으로 이동합니다.',
        colHeader: [
          '일', '월', '화', '수', '목', '금', '토',
        ],
        rowHeader: [
          '오전 8', '오전 9', '오전 10', '오전 11',
          '오후 12','오후 1','오후 3','오후 4','오후 5','오후 6', '오후 7','오후 8','오후 9','오후 10','오후 11','오후 12',
          '오전 1','오전 2','오전 3','오전 4','오전 5','오전 6','오전 7'
        ],
      },
      buttons : [
        '<',
        '오늘',
        '>'
      ],

    }
  }
}
</script>

<style lang=scss>
.calendar {
}
</style>
