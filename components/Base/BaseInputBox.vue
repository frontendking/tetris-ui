<template>
  <div class="BaseInputBox">
    <BaseLabel :for="inputBox.key">
      {{ inputBox.label }}
    </BaseLabel>
    <input :id="inputBox.key" v-bind="$attrs" :value="inputBox.value" v-on="$listeners">
  </div>
</template>

<script>
import BaseLabel from '@/components/Base/BaseLabel'

export default {
  name: 'BaseInputBox',
  components: { BaseLabel },
  inheritAttrs: false,
  props: {
    inputBox: { type: Object, required: true }
  }
}
</script>

<style lang=scss>
.BaseInputBox {
  display: flex;
  justify-content: space-evenly;
  input[type=checkbox] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 2.4rem;
    height: 2.4rem;
    border: 1px solid #cdcdcd;
    cursor: pointer;
    outline: none;
    background-color: #fff;
    font-weight: 500;
    color: #e1e1e1;

    &:checked {
      &:before {
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        content: "⅃";
        transform: rotate(40deg);
        position: relative;
        top: -2px;
      }

      background-color: #00b9fd;
    }

    &:before {
      display: flex;
      justify-content: center;
      align-items: center;
      content: "⅃";
      transform: rotate(40deg);
      position: relative;
      top: -2px;
    }
  }
}
</style>
