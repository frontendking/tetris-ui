<template>
  <input v-bind=$attrs>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'BaseCheckbox',
  props: {
    label: {
      default: '',
    },
  },
}
</script>

<style lang=scss>
@import '@/assets/style/global.scss';

input[type] {
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  border: 1px solid #cdcdcd;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  background-color: $background;
  width: 3.2rem;
  height: 3.2rem;
  order: 1;

  &:checked {
    background: $primary url('./assets/tick.svg') no-repeat center/50%;
  }
}

.ThePermitCard {
  input[type] {
    background-color: rgba(0, 0, 0, 0.3);
  }

  input:checked {
    background: $primary;

    &:before {
      content: '';
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      background: black;
      width: 100%;
      height: 100%;
      border: $primary solid 0.4rem;
      border-radius: 0.5rem;
      background: rgba(0, 0, 0, 0.5);
      /* opacity: 0.5; */
    }

    &:after {
      content: '';
      display: flex;
      background: $primary;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      position: relative;
      top: 0;
      right: 0;
    }
  }
}

@media(min-width: 641px) {
  .ThePermitCard {
    input[type] {
      visibility: hidden;
      position: static;
    }

    input:checked {
      &:before {
        visibility: visible;
        border:none;
        z-index: 1;
      }
    }

    > div {
      border-radius: 0.5rem;

      &:hover {
        box-shadow: 0 0 0 5px $onBackground-variant inset;
      }

    }
  }

}
</style>
