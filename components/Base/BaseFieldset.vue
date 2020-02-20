<template>
  <fieldset>
    <div v-bind="$attrs" v-on="$listeners">
      <slot/>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'BaseFieldset',
  inheritAttrs: false
}
</script>

<style scoped lang=scss>
fieldset {
  width: 100%;
  > div {
    display: inherit;
    justify-content: inherit;
  }
}
</style>
