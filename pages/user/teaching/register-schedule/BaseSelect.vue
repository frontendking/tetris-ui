<template>
  <select class="BaseSelect">
    <option v-for="v of options" v-html="`${v}년`"/>
  </select>
</template>

<script>
export default {
  props: {
    options: {
      default () {
        return [2019, 2020, 2021]
      }
    }
  }
}
</script>

<style lang=scss>
.BaseSelect {
  background: #eee;
  padding: 1em;
  border-radius: 0.5em;
}
</style>
