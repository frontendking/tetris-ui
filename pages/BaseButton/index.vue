<template>
  <button>
    <slot>button</slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton'
}
</script>

<style lang=scss>
@import '@/assets/style/global.scss';

button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 10.4rem;
  font-size: 2.6rem;
  font-weight: bold;
  background-color: $primary;
  color: $onPrimary;
  border-radius: 0.5rem;
  cursor: pointer;

  &.disabled {
    background-color: #9ea2a4;
  }

  &:after {
    content: '';
    display: flex;
    width: 1.5rem;
    height: 1.5rem;
    background: url('./assets/arrow.svg') no-repeat center right/contain;
    position: absolute;
    right: (34/588)*100%;
  }
}
@media(min-width: 641px) {
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 1.6rem;
    font-weight: bold;
    background-color: $primary;
    color: $onPrimary;
    border-radius: 0;
    cursor: pointer;
    width: 18rem;
    height: 5rem;
    &.disabled {
      background-color: #9ea2a4;
    }

    &:after {
      content: '';
      display: none;
    }
  }
}
</style>
