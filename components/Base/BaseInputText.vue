<template>
  <input class="BaseInputText" type="text">
</template>

<script>
export default {
  name: 'BaseInputText'
}
</script>

<style lang=scss>
.BaseInputText {
  display: flex;
  border: 1px solid #e0e0e0;
  padding: 0 0.5em;
  min-height: 2em;

  &::placeholder {
    color: #aaa;
    font-size: 0.8em;
  }
}
</style>
