<template>
  <table class="TheClassTimeTable">
    <caption>
      <p v-html="caption"/>
    </caption>

    <thead>
    <tr>
      <th scope="col" v-for="v in colHeader" v-html="v"></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(tr, k) in tableData">
      <th scope="row">{{rowHeader[k]}}</th>
      <td v-for="td in tr" v-html="td">
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: [
    'caption',
    'colHeader',
    'rowHeader',
    'tableData'
  ],
  data () {
    return {
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
        ], ['','','','','',''], ['','','','','',''], ['','','','','','']
      ]
    },
  },
}
</script>

<style lang=scss>
.TheClassTimeTable {
  border-collapse: collapse;
  border: 1px solid #000000;
  td {
    font-size: 1.2rem;
    font-weight: normal;
    border: 1px solid #b7b7b7;
    padding-left: 2rem;
    padding-top: 2.5rem;
    .teacher-name {
      display: block;
      font-size: 1.6rem;
      font-weight: bold;
      &:before {
        content: "\02022";
        padding-right: 0.5rem;
        color: #ec4800;
        font-size: 2rem;
      }
      margin-left: -1rem;
    }
    .class-message {
      padding: 0.5rem 0;
    }
    .class-status {
      display: inline-block;
      padding: 0.7rem 0.6rem;
      text-align: center;
      /*background-color: #5559b0;*/
      background-color: #ec4800;
      color: #ffffff;
    }
  }
  th {
    height:7rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: #ffffff;
    background-color: #6e737d;
    text-align: center;
    &:nth-child(1) {
      min-width: 6rem;
    }
    &:nth-child(n+2){
      width: 100% / 95rem * ((95rem - 6rem) / 7);
    }
    &[scope="row"] {
      background-color: #f7f7f7;
      color: #000000;
      border: 1px solid #b7b7b7;
    }

  }
}
</style>
