<template>
  <article class="layout-sub">
    <h1 v-html="heading"/>
    <slot/>
  </article>
</template>

<script>

export default {
  name: 'layout-sub',
  props: ['heading'],
}
</script>

<style lang=scss>
.layout-sub {
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: auto;

  > h1 {
    font-size: 3.4rem;
    font-weight: bolder;
    line-height: 1;
    padding-bottom: 1.8rem;
    border-bottom: 2px solid #000000;
    display: flex;
    justify-content: space-between;
  }
}
</style>
