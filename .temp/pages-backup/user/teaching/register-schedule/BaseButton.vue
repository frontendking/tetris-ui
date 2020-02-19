<template>
  <button class="BaseButton" v-html="label"></button>
</template>

<script>
export default {
  props: ['label']
}
</script>

<style lang=scss>
.BaseButton {
  background: #eee;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}
</style>
