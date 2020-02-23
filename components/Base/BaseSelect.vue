<template>
  <div>
    dddss
    <select>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <IArrowDown />
  </div>
</template>

<script>
import IArrowDown from './arrow-down.svg'

export default {
  name: 'BaseSelect',
  components: {
    IArrowDown
  },
  props: {
    options: { type: Array, required: true }
  }
}
</script>

<style lang=scss scoped>
div {
  position: relative;
  border-bottom: 1px solid;
  display: flex;
  align-items: center;
  select {
    font-size: 0.8em;
    appearance: none;
    border: none;
    outline: none;
    width: 100%;
    color: inherit;
    padding: 0.5em;
    padding-right: 1.5em;
  }

  .icon {
    position: absolute;
    right: 0.4em;
    width: 0.8em;
    pointer-events: none;
  }
}

</style>
