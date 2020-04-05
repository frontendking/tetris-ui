<template>
  <footer id="TheReviewFormFooter">
    <template>
      <BaseButton
        id="prevButton"
        class="step prev"
      >
      </BaseButton>
      <BaseButton
        id="nextButton" class="step next"
      >
      </BaseButton>
    </template>
  </footer>
</template>

<script>

import BaseButton from '../../components/base/BaseButton'

export default {
  components: { BaseButton }
}
</script>

<style scoped lang="scss">
@import '../../assets/color.scss';

footer {
  .BaseButton.step {
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
    }
  }
}
</style>
