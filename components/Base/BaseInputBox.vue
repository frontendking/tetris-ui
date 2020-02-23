<template>
  <div class="tutor-checkbox">
    <input :id="inputBox.key" v-bind="$attrs" :value="inputBox.value" v-on="$listeners">
    <label :for="inputBox.key" v-html="inputBox.label" />
  </div>
</template>

<script>
export default {
  name: 'BaseInputBox',
  inheritAttrs: false,
  props: ['inputBox']
}
</script>

<style lang=scss scoped>

</style>
