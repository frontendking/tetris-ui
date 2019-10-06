<template>
  <article class="permit">
    <h1 id=permit-heading class="hidden">수업권 신청</h1>
    <the-tutor-local-nav id=permit-nav :navItems="subPages"/>
    <nuxt-child id="permit-article"/>
  </article>

</template>

<script>
import TheTutorLocalNav from '@/components/TheLnb'

export default {
  name: 'permit',
  components: {
    TheTutorLocalNav,
  },
  data () {
    return {
      subPages: [
        {
          id: 'permit3',
          label: '3과목 수업권',
          to: `/permit/permit-subject-3`,
          active: true,
        },
        {
          id: 'permit2',
          label: '2과목 수업권',
          to: `/permit/permit-subject-2`,
        },
        {
          id: 'permit1',
          label: '1과목 수업권',
          to: `/permit/permit-subject-1`,
        },
      ],
    }
  },
}
</script>

<style lang=scss>
.permit {
  display: grid;
  grid-gap: 7.6rem;
  /*@formatter:off*/
  grid-template:
   "nav" auto
   "article" auto/
   auto;
  /*@formatter:on*/
  #permit-nav {
    grid-area: nav;
  }
  #permit-article {
    grid-area: article;
  }

}
</style>
