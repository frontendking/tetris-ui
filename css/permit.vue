<template>
  <article class="permit">
    <h1 id=permit-heading>수업권 신청</h1>
    <TheLnb id=permit-nav :navList="subPages"/>
    <nuxt-child id="permit-article"/>
    <div id="ThePermitBanner">배너 영역</div>
  </article>
</template>

<script>
import TheLnb from '@/components/admin/TheLnb'

export default {
  name: 'permit',
  // layout: 'tutor',
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
article.permit {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(4, auto);

  > h1 {
    display: none;
  }

  #ThePermitBanner {
    background-color: #e0e0e0;
    height: 23rem;
    order: -1;
  }

  #permit-article {
    margin-top: 7.5rem;
    padding: 0 2rem;
  }
}

$heading-height: 12rem;
$m-t: 6rem;
@media(min-width: 641px) {
  article.permit {
    > *:nth-child(2) {
      margin-top: $heading-height + $m-t;
    }

    > h1 {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: $heading-height;
      font-size: 4.2rem;
      line-height: 0.96;
      font-weight: 300;
      background-color: #f5f5f5;
      color: #000000;
    }

    > #TheTutorLocalNav {
      padding: 0 5rem;

      & + * {
        padding: 0 5rem;
      }
    }
    #permit-article {
      padding: 0;
    }
    #ThePermitBanner {
      order: 0;
    }
  }
}
</style>
