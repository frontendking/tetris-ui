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

<style lang=scss>
.BaseLabel {
  font-weight: bold;
}
</style>
