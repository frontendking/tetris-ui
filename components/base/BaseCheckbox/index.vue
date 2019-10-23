<template>
  <div class="BaseCheckbox tutor-checkbox">
    <input type="checkbox" :id="checkboxId">
    <label v-if="label" :for="checkboxId" v-html="label"/>
  </div>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  props: {
    checkboxId: {
      default: 'BaseCheckbox',
      required: true
    },
    label: {
      default: '',
    }
  }
}
</script>

<style lang=scss>
@import '@/assets/style/global.scss';

.BaseCheckbox {
  display: flex;
  align-items: center;

  label {
    margin-left: 1rem;
  }

  input[type=checkbox], input[type=radio] {
    display: flex;
    justify-content: center;
    align-items: center;
    appearance: none;
    width: 100%;
    height: 100%;
    border: 1px solid #cdcdcd;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    background-color: #fff;
    font-weight: 500;
    color: $surface;

    &:checked:before {
      content: '';
      display: block;
      width: 65%;
      height: 65%;
      background-color: $primary;
    }
/*    &:checked:before {
      content: '';
      background: url('./assets/tick.svg') no-repeat;
      width: 65%;
      display: block;
      height: 65%;
    }*/

    &:checked {
      background-color: #00b9fd;
    }
  }

}
</style>
