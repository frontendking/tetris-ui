<template>
  <table class="TheClassTimeTable">
    <caption>
      <p class="main-caption">{{caption}}</p>
      <p class="sub-caption"><span class="active">국어</span><span>수학</span></p>
    </caption>

    <thead>
    <tr>
      <th scope="col" v-for="v in colHeader">{{v}}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(tr, k) in tableBody">
      <th scope="row">{{rowHeader[k]}}</th>
      <td v-for="td in tr">
        <div class="class-info" v-if="td!==''">
          <a class="teacher-name" href="#">{{td.teacher}}</a>
          <div class="class-message">{{td.message}}</div>
          <div v-if="td.status" class="class-status">{{td.status?'마감임박':''}}</div>
        </div>
      </td>
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
        '13:00 - 14:00',
        '18:00 - 19:00',
        '19:00 - 20:00',
        '20:00 - 21:00',
        '21:00 - 22:00',
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
        ], ['','','','','',''], ['','','','','',''], ['','','','','','']
      ]
    },
  },
}
</script>

<style lang=scss>
$th-w: 100% / 95rem * 15.2rem;
$td-w: (95rem - 15.2rem) / 6;
.TheClassTimeTable {
  border-collapse: collapse;
  border: 1px solid #000000;
  caption {
    .main-caption {
      padding: 1.6rem 0;
      font-size: 3.4rem;
      line-height: 1;
      font-weight: bold;
      border-bottom: 2px solid #000000;
    }
    .sub-caption {
      padding: 3rem  0;
      span {
        display: inline-block;
        padding: 0 3rem;
        border-right: 1px solid #000000;
        font-size: 2rem;
        font-weight: 500;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          border-right: none;
        }
        &.active {
          font-weight: 900;
        }
      }
    }

  }
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

    padding: 2.2rem 0;
    font-size: 1.6rem;
    font-weight: 500;
    color: #ffffff;
    background-color: #6e737d;
    text-align: center;
    &:nth-child(1) {
      width: 100% / 95rem * 15.2rem;
      min-width: 15.2rem;
    }
    &:nth-child(n+2){
      width: 100% / 95rem * ((95rem - 15.2rem) / 6);
    }
    &[scope="row"] {
      padding: 6rem 2.7rem;
      background-color: #f7f7f7;
      color: #000000;
      border: 1px solid #b7b7b7;
    }

  }
}
</style>
