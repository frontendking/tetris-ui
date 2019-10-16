<template>
  <div class="TheFooterButtons">
    <button class="cancel" type="button" v-html="cancelLabel"/>
    <button v-html="applyLabel"/>
  </div>
</template>

<script>
export default {
  name: 'TheFooterButtons',
  props: ['cancelLabel', 'applyLabel']
}
</script>

<style  lang=scss>
.TheFooterButtons {
  display: flex;
  width: 37.2rem;
  justify-content: space-between;
  align-items: center;
  justify-self: center;

  button {
    padding: 1rem;
    background-color: #34b4f9;
    color: #ffffff;
    width: 18rem;
    height: 5rem;
    border-radius: initial;
    text-align: center;

    &.cancel {
      background-color: #999;
    }
  }
}
</style>
