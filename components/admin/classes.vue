<template>
  <article id="admin-class">
    <h1 v-html="heading"/>
    <div class="tabs-container">
      <slot/>
    </div>
  </article>
</template>>

<script>
export default {
  name: 'admin-class',
  props: ['heading'],
}
</script>

<style lang=scss>
#admin-class {
  display: grid;

  /*@formatter:off*/
  grid-template:
    "heading" auto
    "nav" auto
    "card-list" auto/
    auto;
  /*@formatter:on*/
  grid-gap: 3rem;

  > h1 {
    grid-area: heading;
    font-size: 3.4rem;
    font-weight: bolder;
    line-height: 1;
    padding-bottom: 1.8rem;
    border-bottom: 2px solid #000000;
  }

  > .tabs-container {
    display: contents;

    .nav-tabs {
      grid-area: nav;
      margin-bottom: 0;
    }

    .card-list {
      grid-area: card-list;
    }
  }

}
</style>
