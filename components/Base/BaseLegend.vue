<template>
  <legend>
      <slot/>
  </legend>
</template>

<script>
export default {
  name: 'BaseLegend'
}
</script>

<style scoped lang=scss>
legend {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 2em;
  font-weight: bold;
  position: relative;
}
</style>
