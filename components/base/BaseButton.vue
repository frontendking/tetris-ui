<template>
  <button>
    <slot>lorem</slot>
  </button>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
@import '../../assets/color.scss';

button {
  width: 18.1rem;
  height: 4.2rem;
  text-align: center;
  border-radius: 40px;
  font-size: 1.5rem;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.27;
  letter-spacing: -0.08rem;

  &:focus {
    outline: none;
  }

  &.next {
    background-color: $primary;
    color: $onPrimary;
    border: none;
  }

  &.prev {
    border: solid 1px $primary;
    color: $primary;
    margin-right: 2rem;
    background: white;
  }
}
</style>
