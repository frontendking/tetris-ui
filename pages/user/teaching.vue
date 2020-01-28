<template>
  <TheLayoutConects>
    <admin
      id="teaching"
      :heading="heading"
      :navList="navList"
    >
      <nuxt-child/>
    </admin>
  </TheLayoutConects>
</template>

<script>
import admin from '@/components/admin/layout'
import navList from '@/components/pages/teaching/assets/navList.js'
import TheLayoutConects from '@/pages/layout/index'

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
    TheLayoutConects,
    admin,
  },
}
</script>

<style lang=scss>
#teaching {
}
</style>
