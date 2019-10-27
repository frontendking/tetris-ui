<template>
  <admin
    id="teaching"
    :heading="heading"
    :navList="navList"
  >
    <nuxt-child/>
  </admin>
</template>

<script>
import admin from '@/components/admin/layout'

export default {
  name: 'teaching',
  layout: 'tutor',
  data () {
    return {
      heading: '멤버쉽 구매',
      navList: [],
    }
  },
  components: {
    admin,
  },
}
</script>

<style lang=scss>
#teaching {
}
</style>
