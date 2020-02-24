<template>
  <label class="BaseLabel">
    <slot />
  </label>
</template>

<script>
export default {
  name: 'BaseLabel'
}
</script>

<style lang=scss scoped>
.BaseLabel {
  font-weight: bold;
}
</style>
