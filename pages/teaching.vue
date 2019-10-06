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
import admin from '@/pages/admin/index'
import navList from '@/assets/data/navList.js'

export default {
  name: 'teaching',
  layout: 'tutor',
  data () {
    return {
      heading: '가르치기',
      navList: navList.map(v => ({ ...v, isActive: this.$route.name.includes(v.id) })),
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
