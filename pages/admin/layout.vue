<template>
  <article class="admin-layout">
    <h1 v-html="heading"/>
    <the-tutor-local-nav id="the-tutor-local-nav" :navList="navList"/>
    <slot/>
  </article>
</template>

<script>
import TheTutorLocalNav from '@/components/TheLnb'

export default {
  name: 'admin-layout',
  props: [
    'heading',
    'navList'
  ],
  components: {
    TheTutorLocalNav,
  },
}
</script>

<style  lang=scss>
@media(min-width: 641px) {
  .admin-layout {
    display: grid;
    /*@formatter:off*/
    grid-template:
      "header" 12rem
      "nav" auto
      "article" auto/
      auto;
    /*@formatter:on*/
    grid-gap: 5.8rem;

    > h1 {
      grid-area: header;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-size: 4.2rem;
      line-height: 0.96;
      font-weight: 300;
      background-color: #f5f5f5;
      color: #000000;
    }

    > #the-tutor-local-nav {
      grid-area: nav;
      margin-top: 2.2rem;
    }
  }
}
</style>
