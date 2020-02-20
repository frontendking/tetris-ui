<template>
  <table class="TheClassTimeTable">
    <thead>
    <tr>
      <th scope="col" v-for="v in colHeader">{{v}}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(tr, k) in tableBody">
      <th scope="row">{{rowHeader[k]}}</th>
      <td v-for="td in tr" v-html="td">
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    rowHeader: {},
    colHeader: {

    },
    tableBody: {
      default () {
        return [
          [
            `<a class="teacher-name" href="#">이현식 <div class="class-status">마감임박</div></a>`,
            '',
            `<a class="teacher-name" href="#">김미진</a>`,
            , '', '', ''
          ],
          [
            [
              `<a class="teacher-name" href="#">이현식 <div class="class-status">마감임박</div></a>`,
              `<a class="teacher-name" href="#">김미진</a>`
            ],
            '', '', '', '', ''
          ], ['', '', '', '', '', ''], ['', '', '', '', '', ''], ['', '', '', '', '', '']
        ]
      }
    }
  },
}
</script>

<style lang=scss>
$th-w: 100% / 95rem * 15.2rem;
$td-w: (95rem - 15.2rem) / 6;
.TheClassTimeTable {
  border-collapse: collapse;
  border: 1px solid #6e737d;
  width:100%;
  caption {
    .main-caption {
      padding: 1.6rem 0;
      font-size: 3.4rem;
      line-height: 1;
      font-weight: bold;
      border-bottom: 2px solid #000000;
    }

    .sub-caption {
      padding: 3rem 0;

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
    vertical-align: middle;
    text-align: center;

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

    font-size: 1.6rem;
    font-weight: 500;
    color: #ffffff;
    background-color: #6e737d;
    text-align: center;



    &[scope="row"] {
      background-color: #f7f7f7;
      color: #000000;
      border: 1px solid #b7b7b7;
    }

  }
  th, td {
    position: relative;
    vertical-align: middle;
    height: 5rem;
    width: 14%;
    &:nth-child(1) {
      min-width: 15.2rem;
    }
  }
}
</style>
