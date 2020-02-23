<template>
  <fieldset class="BaseFieldset">
    <div>
      <slot />
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'BaseFieldset'
}
</script>

<style lang="scss">
.BaseFieldset {
  div {
    display: inherit;
  }
}
</style>
