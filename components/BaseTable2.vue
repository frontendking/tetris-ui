<template>
  <table class="BaseTable2">
    <caption v-if="captions">
      <p v-for="caption in captions" :class="caption.id" v-html="caption.p"/>
    </caption>

    <thead>
    <tr>
      <th scope="col" v-for="v in colHeader" v-html="v.label"></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(row, k) in tableData">
      <td v-for="v in colHeader" v-html="row[v.id]"/>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'BaseTable2',
  props: [
    'captions',
    'colHeader',
    'tableData'
  ],
}
</script>

<style lang=scss>
.BaseTable2 {
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

  td {
    font-size: 1.2rem;
    font-weight: normal;
    border: 1px solid #b7b7b7;
  }

  th {
    &[scope="col"] {
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
