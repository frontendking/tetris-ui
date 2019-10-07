<template>
  <table class="BaseTimeTable">
    <caption>
      <p v-for="caption in captions" :class="caption.id" v-html="caption.p"/>
    </caption>
    <thead>
    <tr v-for="tr in colHeader">
      <th scope="col" v-for="th in tr" v-html="th"></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(tr, k) in tableData">
      <th scope="row">{{rowHeader[k]}}</th>
      <td v-for="(td,k) in tr" :class="{active:k===3}">
        <template v-for="classa in td">
          <p>{{classa?classa.time:''}}</p>
          <p>{{classa?classa.lesson:''}}</p>
        </template>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: [
    'captions',
    'colHeader',
    'rowHeader',
    'tableData'
  ],
}
</script>

<style lang=scss>
.BaseTimeTable {
  border-collapse: collapse;
  border: 1px solid #000000;
  color: #000;
  table-layout: fixed;
  width: 100%;
  caption {
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    padding: 2rem 0;
  }
  .active {
    background-color: #FCF8EF;
  }

  td {
    font-size: 1.2rem;
    font-weight: normal;
    border: 1px solid #b7b7b7;
  }

  th {
    &[scope="col"]{
      height: 3rem;
    }
    height: 3rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: #ffffff;
    background-color: #6e737d;
    text-align: center;
    vertical-align: middle;

    &:nth-child(1) {
      min-width: 6rem;
    }

    &:nth-child(n+2) {
    }

    &[scope="row"] {
      background-color: #f7f7f7;
      color: #000000;
      border: 1px solid #b7b7b7;
    }
  }
}
</style>
