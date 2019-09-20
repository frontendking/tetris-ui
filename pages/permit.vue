<template>
  <article class="class-info">
    <h1>permit</h1>
    <the-tutor-local-nav :navItems="subPages"/>
    <nuxt-child/>
  </article>

</template>

<script>
import TheTutorLocalNav from '@/components/class/TheTutorLocalNav'

export default {
  name: 'permit',
  components: {
    TheTutorLocalNav
  },
  data()  {
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
  }
}
</script>

<style lang=scss>
.permit {
}
</style>
