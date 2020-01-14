<template>
  <button class="BaseButton" v-html="label"></button>
</template>

<script>
export default {
  props: ['label']
}
</script>

<style scoped lang=scss>
.BaseButton {
}
</style>
