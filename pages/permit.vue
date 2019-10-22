<template>
  <article class="permit">
    <h1 id=permit-heading class="hidden">수업권 신청</h1>
    <div id="ThePermitBanner">
      이벤트 배너 영역
    </div>
    <TheLnb id=permit-nav :navList="subPages"/>
    <nuxt-child id="permit-article"/>
  </article>

</template>

<script>
import TheLnb from '@/components/admin/TheLnb'

export default {
  name: 'permit',
  layout: 'tutor',
  components: {
    TheLnb,
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
  /*@formatter:off*/
  grid-template:
    "banner" 23rem
   "nav" 7.5rem
   "article" auto/
   auto;
  /*@formatter:on*/
  #permit-nav {
    grid-area: nav;

  }
  #ThePermitBanner {
    grid-area: banner;
    background-color: #e0e0e0;
  }
  #permit-article {
    grid-area: article;
  }

}

@media(min-width: 641px) {
  .permit {
    display: grid;
    grid-gap: 7.6rem;
    /*@formatter:off*/
    grid-template:
      "nav" 4rem
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
}
</style>
