<template>
  <admin
    id="learning"
    :heading="heading"
    :navList="navList"
  >
    <nuxt-child/>
  </admin>
</template>

<script>
import admin from '@/components/admin/layout'
import navList from '@/pages/learning/classes/update/assets/navList.js'

export default {
  name: 'learning',
  layout: 'tutor',
  data () {
    return {
      heading: '배우기',
      navList: navList.map(v => ({ ...v, isActive: this.$route.name.includes(v.id) })),
    }
  },
  components: {
    admin,
  },
}
</script>
