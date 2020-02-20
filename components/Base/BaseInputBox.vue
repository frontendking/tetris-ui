<template>
  <div class="tutor-checkbox">
    <input v-bind="$attrs" v-on="$listeners" :id="inputBox.key" :value="inputBox.value">
    <label :for="inputBox.key" v-html="inputBox.label"/>
  </div>
</template>

<script>
export default {
  name: 'BaseInputBox',
  inheritAttrs: false,
  props:['inputBox']
}
</script>

<style lang=scss scoped>

</style>
