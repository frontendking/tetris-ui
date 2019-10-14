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
    'tableData',
  ],
}
</script>

<style lang=scss>
.BaseTable2 {
  display: flex;
  flex-flow: column;
  color: #000;

  caption {
    text-align: center;
    padding: 2rem 0;
  }

  thead {
    height: auto;
  }

  tr {
    display: flex;
    align-items: stretch;

    th, td {
      border: none;
      flex: 1;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    th {
      font-size: 1.6rem;
      font-weight: 500;
      color: #ffffff;
      background-color: #6e737d;

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
  thead tr {
    flex: 1 0 3rem;
  }
  tbody tr {
    flex: 1 0 6rem;
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

  tbody {
    overflow: auto;
    border: 1px solid #e0e0e0;
    border-bottom: none;
    border-right: none;

    td {
      border-right: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
    }
  }
}
</style>
